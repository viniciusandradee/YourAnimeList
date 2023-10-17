"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Chiquita from '../assets/chichichi.png'
import "../src/app/globals.css"
import Link from 'next/link'

import "../CSS/cadastro.css"


import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  nome : yup.string()
            .required("O nome é obrigatório"),
  email : yup.string()
            .required("O email é obrigatório"),
  senha : yup.string()
            .required("A senha é obrigatório"),
  confirmarSenha : yup.string()
            .required("A confirmação de senha é obrigatório")
}).required();



export default function cadastro(){
    
    const { register, handleSubmit, formState: { errors }, setValue, setFocus } = useForm({ resolver : yupResolver(schema) })
    const [cadastro, setCadastro] = useState({'nome':'', 'emai':'', 'senha':'', 'confirmarSenha':''})
    const [listaCadastro, setListaCadastro] = useState([])
    
    function adicionarUsuario(usuario) {
        
        const listaCadastroLocalStorage = JSON.parse(localStorage.getItem('listaCadastro')) || [];
        listaCadastroLocalStorage.push(usuario);
        localStorage.setItem('listaCadastro', JSON.stringify(listaCadastroLocalStorage)); //salva as infos em um json
    
        setTimeout(() => {
          window.location.href = '/login';
        }, 1000);

      }

    
    //function inserirCadastro(cadastro){
    //    setListaCadastro([...listaCadastro, cadastro])
    //    alert("Enviado com sucesso")
    //    window.location.href = '/listaAnimes';
    //}
    return(
        <>
        <div className="card">
        <h4 className="title">Criar Conta!</h4>
        <form className='form' name="frmCadastro" method="" onSubmit={ handleSubmit(adicionarUsuario)}>
        <div className="field">    
            <input autocomplete="off" id="txtNome" placeholder="Firsname" className="input-field"  {...register('nome')} type="name"/>
            <span className='erro'>{ errors.nome?.message }</span>
            </div>
            <div className="field">    
            <input autocomplete="off" id="txtEmail" placeholder="Email" className="input-field"  {...register('email')} type="email"/>
            <span className='erro'>{ errors.email?.message }</span>
            </div>
            <div className="field">      
            <input autocomplete="off" id="txtPwd" placeholder="Senha" className="input-field"  {...register('senha')} type="password"/>
            <span className='erro'>{ errors.senha?.message }</span>
            </div>
            <div className="field">      
            <input autocomplete="off" id="txtPwdConfirm" placeholder="Confirmar Senha" className="input-field"  {...register('confirmarSenha')} type="password"/>
            <span className='erro'>{ errors.confirmarSenha?.message }</span>
            </div>

            <button className="btn" type="submit">Submit</button>
            <Link href="/login"><p className="btn-link">Já tem uma conta?</p></Link>
        </form>
        </div>
                </>
            )
        }