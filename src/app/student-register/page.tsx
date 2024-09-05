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

 const StudentRegister = () => {
  return (
    <div>
        <NavBar/>
        
    <div className='page__student'>

        <div className='intro__student'>
            <p>ESPAÇO PARA O CARROSSEL</p>
        </div>

        <div className='space'>
            {/*Spacing between divs*/}
        </div>

        <div className="student__card">
            
            <div className='logo__card'>
            <Image
                src={MangooIcon}
                alt='mangoo icon'
                width={53}
                height={49
                }
            />
            </div>

            <p className='titulo__card'>Crie sua conta</p>
            <div className="div__line"></div>

            <div className="container__inputs">

                <p className='subtitle__text'>Nome completo<span className='asterisk'>*</span></p>
                <InputSimple extra placeholder='Nome Completo' style={{ width: '380px'}}/>
                
                <p className='subtitle__text'>E-mail<span className='asterisk'>*</span></p>
                <InputSimple extra placeholder='Email Ex: aluno@instituição.com' style={{ width: '380px'}}/>

                <p className='subtitle__text'>Senha<span className='asterisk'>*</span></p>
                <InputSimple extra placeholder='Senha' style={{ width: '380px'}}/>

                <p className='subtitle__text'>Confirmação de senha<span className='asterisk'>*</span></p>
                <InputSimple extra placeholder='Confirme sua senha' style={{ width: '380px'}}/>

                <p className='subtitle__text'>Código da instituição<span className='asterisk'>*</span></p>
                <InputSimple extra placeholder='Código fornecido pela instituição' style={{ width: '380px'}}/>

                <p className='subtitle__text'>Como podemos te chamar?<span className='asterisk'>*</span></p>
                <Dropdown options={["opção 1", "opção 2", "opção 3", "opção 4"]}  placeholder="selecione a opção preferida" title="Como podemos te chamar?" onOptionClick={console.log}/>

            </div>

            <div className="buttons">
                <Button.Focused extra style={{ width: '350px', margin:'0px'}}>Criar conta</Button.Focused>    
            </div>
            <p className='footer__text'>Já possui uma conta? Clique aqui</p>
        </div>
    </div>
    </div>
  )
}

export default StudentRegister