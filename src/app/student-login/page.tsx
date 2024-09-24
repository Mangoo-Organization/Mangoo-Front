'use client'
import React from 'react'
import './style.css'
import NavBar from '../components/NavBar/NavBar'
import Image from 'next/image'
import { InputSimple } from '../components/InputSimple/InputSimple'
import * as Button from '../components/Button/Button'
import MangooIcon from '../../../public/icones/mangoo-icon.svg'
import CarouselStudent from '../components/CarouselStudent/carouselstudent'
import { useRouter } from 'next/navigation' // ou 'next/router' dependendo da versão

 const StudentLogin = () => {
    
    const router = useRouter();

  const handleForgotClick = () => {
    router.push('/forgot-password');
  }

  const handleRegisterClick = () => {
    router.push('/student-register');
  }

  return (
    <div>
        <NavBar/>
        
    <div className='page__student'>

        <div className='intro__student'>
            <CarouselStudent/>
        </div>

        <div className='space__student'>
            {/*Spacing between divs*/}
        </div>

        <div className="student__card">
            
            <div className='logo__card'>
            <Image
                src={MangooIcon}
                alt='mangoo icon'
                width={53}
                height={49}
            />
            </div>
            
            <p className='titulo__card__student'>Faça seu Login</p>
            
            <div className="div__line__student"></div>

            <div className="container__inputs__student">
                
                <p className='subtitle__text__student'>E-mail<span className='asterisk'>*</span></p>
                <InputSimple extra placeholder='Email Ex: aluno@instituição.com' style={{ width: '380px'}}/>

                <p className='subtitle__text__student'>Senha<span className='asterisk'>*</span></p>
                <InputSimple extra placeholder='Senha' style={{ width: '380px'}}/>

                <p className='password__text__student' onClick={handleForgotClick}>Esqueceu sua senha?</p>

            </div>

            <div className="buttons__student">
                <Button.Focused extra style={{ width: '350px', margin:'0px'}}>Login</Button.Focused>    
            </div>
            <p className='footer__text__student' onClick={handleRegisterClick}>Não possui conta? Realize seu cadastro aqui</p>
        </div>
    </div>
    </div>
  )
}

export default StudentLogin