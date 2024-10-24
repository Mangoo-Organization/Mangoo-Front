'use client'
import React from 'react'
import './style.css'
import NavBar from '../../components/NavBar/NavBar'
import Image from 'next/image'
import { InputSimple } from '../../components/InputSimple/InputSimple'
import * as Button from '../../components/Button/Button'

import SecurePana from '../../../../public/icones/forgot_password_pana.svg' 
import MiddlewarePlugin from 'next/dist/build/webpack/plugins/middleware-plugin'

 const ForgotPasswordChange = () => {
  return (
    <div>
        <NavBar/>
        
    <div className='page__forgotchange'>

        <div className='intro__forgotchange'>
            <Image
                src={SecurePana}
                alt='Pana image'
                width={700}
                height={700}
            />
        </div>

        <div className='space__forgotchange'>
            {/*Spacing between divs*/}
        </div>

        <div className="forgotchange__card">
            
            <p className='titulo__card__forgotchange'>Altere sua senha</p>
            
            <div className="div__line__forgotchange"></div>

            <div className="container__inputs__forgotchange">
                
                <p className='subtitle__text__forgotchange'>Nova senha<span className='asterisk'>*</span></p>
                <InputSimple extra placeholder='Senha' style={{ width: '380px'}}/>

                <p className='subtitle__text__forgotchange'>Confirmação de senha<span className='asterisk'>*</span></p>
                <InputSimple extra placeholder='Confirme sua nova senha' style={{ width: '380px'}}/>

            </div>

            <div className="buttons__forgotchange">
                <Button.Focused extra style={{ width: '350px', margin: '0px'}}>Redefinir senha</Button.Focused>    
            </div>
        </div>
    </div>
    </div>
  )
}

export default ForgotPasswordChange