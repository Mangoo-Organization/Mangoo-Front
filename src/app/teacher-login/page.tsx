'use client'
import React from 'react'
import './style.css'
import NavBar from '../components/NavBar/NavBar'
import Image from 'next/image'
import { InputSimple } from '../components/InputSimple/InputSimple'
import * as Button from '../components/Button/Button'
import MangooIcon from '../../../public/icones/mangoo-icon.svg'
import CarouselTeacher from '../components/CarouselTeacher/carouselteacher'
import { useRouter } from 'next/navigation' // ou 'next/router' dependendo da versão

 const TeacherLogin = () => {
       
    const router = useRouter();

  const handleForgotClick = () => {
    router.push('/forgot-password');
  }

  const handleRegisterClick = () => {
    router.push('/teacher-register');
  }


  return (
    <div>
        <NavBar/>
        
    <div className='page__teacher'>

        <div className='intro__teacher'>
        <CarouselTeacher/>
        </div>

        <div className='space__teacher'>
            {/*Spacing between divs*/}
        </div>

        <div className="teacher__card">
            
            <div className='logo__card__teacher'>
            <Image
                src={MangooIcon}
                alt='mangoo icon'
                width={53}
                height={49}
            />
            </div>
            
            <p className='titulo__card__teacher'>Faça seu Login</p>
            
            <div className="div__line__teacher"></div>

            <div className="container__inputs__teacher">
                
                <p className='subtitle__text__teacher'>E-mail<span className='asterisk'>*</span></p>
                <InputSimple extra placeholder='Email Ex: professor@instituição.com' style={{ width: '380px'}}/>

                <p className='subtitle__text__teacher'>Senha<span className='asterisk'>*</span></p>
                <InputSimple extra placeholder='Senha' style={{ width: '380px'}}/>

                <p className='password__text__teacher' onClick={handleForgotClick}>Esqueceu sua senha?</p>

            </div>

            <div className="buttons__teacher">
                <Button.Focused extra style={{ width: '350px', margin:'0px'}}>Login</Button.Focused>    
            </div>
            <p className='footer__text__teacher' onClick={handleRegisterClick}>Não possui conta? Realize seu cadastro aqui</p>
        </div>
    </div>
    </div>
  )
}

export default TeacherLogin