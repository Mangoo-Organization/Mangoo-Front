'use client'
import React from 'react'
import './style.css'
import NavBar from '../components/NavBar/NavBar'
import Image from 'next/image'
import { InputSimple } from '../components/InputSimple/InputSimple'
import * as Button from '../components/Button/Button'
import Dropdown from "../components/Dropdown/Dropdown";
import Pana from '../../../public/icones/forgot_password_pana.svg' 
import MiddlewarePlugin from 'next/dist/build/webpack/plugins/middleware-plugin'

 const ForgotPasswordConfirm = () => {
  return (
    <div>
        <NavBar/>
        
    <div className='page__forgotconfirm'>

        <div className='intro__forgotconfirm'>
            <Image
                src={Pana}
                alt='Pana image'
                width={700}
                height={700}
            />
        </div>

        <div className='space__forgotconfirm'>
            {/*Spacing between divs*/}
        </div>

        <div className="forgotconfirm__card">
            
            <p className='titulo__card__forgotconfirm'>Esqueceu sua senha?</p>
            
            <div className="div__line__forgotconfirm"></div>

            <div className="container__forgotconfirm">
                <p className='title__text__forgotconfirm'>Email enviado!</p>
                <p className='text__container__forgotconfirm'>Verifique seu email para redefinir sua senha. Caso não tenha chegado verifique a caixa de Spam.</p>
                
                <div className='button__forgotconfirm'>
                <Button.Transparent extra style={{ width: '182px', margin:'0px'}}>Voltar</Button.Transparent>
                </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default ForgotPasswordConfirm