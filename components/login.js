"use client"
import React from 'react'

import "../src/app/globals.css"
import { useState } from 'react'

import Link from 'next/link'

import "../CSS/login.css"

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useRouter } from 'next/router';

const schema = yup.object({
  email : yup.string()
            .required("O email é obrigatório"),
  senha : yup.string()
            .required("A senha é obrigatório")
}).required();



export default function login(){
  const router = useRouter();  // Inicializa o hook de roteamento
  const { register, handleSubmit, formState: { errors }, setFocus, setValue } = useForm({ resolver : yupResolver(schema) })
  const [cadastro, setCadastro] = useState({'email':'', 'senha':''})
  const [listaCadastro, setListaCadastro] = useState([])


  const handleLogin = (data) => { 
    const listaCadastroLocalStorage = JSON.parse(localStorage.getItem('listaCadastro')) || [];
    const usuarioEncontrado = listaCadastroLocalStorage.find(usuario => usuario.email === data.email && usuario.senha === data.senha);
  
    if (usuarioEncontrado) {
      // Usuário encontrado, faça algo aqui (por exemplo, redirecione para outra página)
      alert("Login bem-sucedido!");
      router.push('/listaAnimes');
    } else {
      // Usuário não encontrado, faça algo aqui (por exemplo, mostre uma mensagem de erro)
      alert("Usuário não encontrado. Verifique suas credenciais.");
    }
  }


  //function inserirSuporte(suporte){
  //    setListaSuporte([...listaSuporte, suporte])
  //    alert("Enviado com sucesso")
  //    window.location.href = '/listaAnimes';
  //}

    return(
        <>
<div className="card">
  <h4 className="title">Log In!</h4>
  <form name="frmLogin" action='/listaAnimes' onSubmit={ handleSubmit(handleLogin)}>
    <div className="field">
      
      <input autocomplete="off" id="txtEmail" placeholder="Email" className="input-field" {...register('email')} type="email"/>
      <span className='erro'>{ errors.email?.message }</span>
    </div>
    <div className="field">
      <input autocomplete="off" id="txtPwd" placeholder="Password" className="input-field" {...register('senha')} type="password"/>
      <span className='erro'>{ errors.senha?.message }</span>
    </div>
    <button className="btn" type="submit">Login</button>
    <Link href="/cadastro" className="btn-link">Criar nova conta!</Link>
  </form>
</div>
        </>
    )
}