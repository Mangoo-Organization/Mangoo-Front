'use client'

import NavBar from "../components/NavBar/NavBar";
import Image from "next/image";
import './style.css'
import { InputSimple } from "../components/InputSimple/InputSimple";
import * as Button from '../components/Button/Button'
import UploadImage from "../components/UploadImage/UploadImage";
import Modal from 'react'
import { useState } from "react";

const token = () => {



    return(
        <>
            <NavBar/>
            <div className="institution__image-progress">
                <Image 
                    src="./icones/progress-bar3.svg" 
                    alt='Progress Bar on third stage' 
                    width={650} 
                    height={50}
                />
            </div>
            
            <div className="token__card">
                    <p className='titulo__card'>Sobre o Token</p>
                    <div className="div__line"></div>

                    <div className="token__information">
                            <div className="token__image">
                                <p className="title__img-token">Imagem do Token <span> <Image src="./icones/Info.svg" alt="info image" width={21.6} height={21.6}/></span></p>
                                <Image 
                                    src="./icones/default-token.svg" 
                                    alt="default token image" 
                                    width={175.14}
                                    height={175.14}
                                />
                                <p className="add__img">Adicionar Imagem</p>
                            </div>

                            <div className="token__data">
                                <p className="token__data-title">Dados do Token</p>
                                <div className='boxes'>
                                    <p className='token__text'>Nome<span className='asterisk'>*</span></p>
                                    <InputSimple extra placeholder='Ex: Mangoo Token'/>
                                </div>

                                <div>
                                    <p className='token__text' >
                                        Símbolo
                                        <span className='asterisk'>*  </span>
                                        <span><Image src="./icones/Info.svg" alt="info image" width={18} height={18}/></span>
                                    </p>
                                    <InputSimple placeholder='Ex: MGO'/>
                                </div>
                            </div>
                    </div>

                    <div className="buttons">
                        <Button.Transparent extra>Voltar</Button.Transparent>
                        <Button.Green extra>Avançar</Button.Green>
                    </div>
            </div>
        </>
    );

}

export default token