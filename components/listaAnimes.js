"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "../../cp05/CSS/listaAnimes.css"
import "../src/app/globals.css"

export default function listaAnimes({ animes }) {
    return (
        <>
            <div className='cartoes'>
                {animes
                    .map((animes, index) =>
                        <div className='cartao' key={index}>
                            <p><b>Nome: </b>{animes.name}</p>
                            <p><b>Nota: </b>{animes.Rating}</p>
                            <img src={`assets/img/${animes.img}.jpg`} />
                            <p><b>Release: </b>{animes.description.slice(0, 100)}... <a href="#">Saiba mais</a></p>
                        </div>
                    )
                }
            </div>
        </>
    )
}