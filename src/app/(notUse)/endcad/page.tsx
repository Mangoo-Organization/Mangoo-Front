'use client'
import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Image from 'next/image'
import './style.css'
import { Green } from '../../components/Button/Button'

const Endcad = () => {
  return (
    <>
    <NavBar/>
    <div className="endcad__container">
        <div className="endcad__imagem-progresso">
            <Image
             src="/icones/progressbar_complete.svg"
             alt='imagem barra de progresso completa'
             width={650}
             height={50}/>
        </div>
        <div className="endcad__card">
            <p className='endcad__card-p'>Cadastro finalizado com sucesso</p>
            <div className="information__border"/>
            <Image
              src="/icones/endcad_image.svg"
              alt='imagem principal tela de finalização de cadastro'
              width={500}
              height={500}/>
            
            <p className='endcad__card-p2'>Você pode acessar</p>
            <p className='endcad__card-p2'>todas as funcionalidades agora!</p>
            <div className='endcad__button'>
                <Green >finalizar</Green>
            </div>
            
        </div> 
    </div>
    </>
  )
}

export default Endcad