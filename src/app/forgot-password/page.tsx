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

 const ForgotPassword = () => {
  return (
    <div>
        <NavBar/>
        
    <div className='page__forgot'>

        <div className='intro__forgot'>
            <Image
                src={Pana}
                alt='Pana image'
                width={700}
                height={700}
            />
        </div>

        <div className='space__forgot'>
            {/*Spacing between divs*/}
        </div>

        <div className="forgot__card">
            
            <p className='titulo__card__forgot'>Esqueceu sua senha?</p>
            
            <div className="div__line__forgot"></div>

            <div className="container__inputs__forgot">
                
                <p className='text__container__forgot'>Para redefinir sua senha, informe o email cadastrado no campo abaixo:</p>

                <p className='subtitle__text__forgot'>E-mail<span className='asterisk'>*</span></p>
                <InputSimple extra placeholder='Email Ex: professor@instituição.com' style={{ width: '380px'}}/>

            </div>

            <div className="buttons__forgot">
                <Button.Focused extra style={{ width: '182px', margin: '0px', marginBottom: '10px'}}>Enviar</Button.Focused>
                <Button.Transparent extra style={{ width: '182px', margin:'0px'}}>Cancelar</Button.Transparent>      
            </div>
        </div>
    </div>
    </div>
  )
}

export default ForgotPassword