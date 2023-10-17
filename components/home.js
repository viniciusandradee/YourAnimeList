"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "../CSS/home.css"

export default function Home({ animes }) {
    return (
        <>
        <div className='container'>
            <h1 className='tituloHome'>Top 10 Week</h1>
            <div className='listona'>
                {animes
                        .map((animes, index) =>
                            <div key={index}>
                                <div className='gallery'>
                                    <img  src={`assets/img/${animes.img}.jpg`} className='animeImgs'/>
                                </div>
                            </div>
                        )
                    }
            </div>
        </div>
        
        </>
    )
}