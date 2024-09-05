'use client'
import React from 'react'
import './style.css'
import NavBar from '../components/NavBar/NavBar'
import Image from 'next/image'
import { InputSimple } from '../components/InputSimple/InputSimple'
import * as Button from '../components/Button/Button'
import Dropdown from "../components/Dropdown/Dropdown";
import MangooIcon from '../../../public/icones/mangoo-icon.svg'
import MiddlewarePlugin from 'next/dist/build/webpack/plugins/middleware-plugin'

 const OwnerLogin = () => {
  return (
    <div>
        <NavBar/>
        
    <div className='page__owner'>

        <div className='intro__owner'>
            <p>ESPAÇO PARA O CARROSSEL</p>
        </div>

        <div className='space__owner'>
            {/*Spacing between divs*/}
        </div>

        <div className="owner__card">
            
            <div className='logo__card__owner'>
            <Image
                src={MangooIcon}
                alt='mangoo icon'
                width={53}
                height={49}
            />
            </div>
            
            <p className='titulo__card__owner'>Faça seu Login</p>
            
            <div className="div__line__owner"></div>

            <div className="container__inputs__owner">
                
                <p className='subtitle__text__owner'>E-mail<span className='asterisk'>*</span></p>
                <InputSimple extra placeholder='Email Ex: prorpietario@instituição.com' style={{ width: '380px'}}/>

                <p className='subtitle__text__owner'>Senha<span className='asterisk'>*</span></p>
                <InputSimple extra placeholder='Senha' style={{ width: '380px'}}/>

                <p className='password__text__owner'>Esqueceu sua senha?</p>

            </div>

            <div className="buttons__owner">
                <Button.Focused extra style={{ width: '350px', margin:'0px'}}>Login</Button.Focused>    
            </div>
            <p className='footer__text__owner'>Não possui conta? Realize seu cadastro aqui</p>
        </div>
    </div>
    </div>
  )
}

export default OwnerLogin