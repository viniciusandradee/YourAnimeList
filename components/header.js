"use client"
import React from 'react'
import Image from 'next/image'
import Chiquita from '../assets/chichichi.png'

import Link from 'next/link'

import "../CSS/header.css"

export default function Header(){
    return(
        <>
            <header>
                <Link href="/"><Image src={Chiquita} className="logo"/></Link>
                <Link href="/"><p className='tituloHeader'>Mega Animes</p></Link>
                <nav>
                    
                    <ul>
                         
                        <li className='navega'>
                        
                            <Link className='links' href="/login">Login</Link>
               
                        </li>
                        <li className='navega'>
                            <Link className='links' href="/cadastro">SignUp
                            </Link>
                        </li>
                        <li className='navega'>
                            <Link className='links' href="/sobreNos">Sobre nós</Link>
                            
                        </li>  
                        
              
                    </ul>
                </nav>
            </header>
        </>
    )
}