'use client'
import React from 'react'
import './style.css'
import NavBar from '../components/NavBar/NavBar'
import Image from 'next/image'
import { InputSimple } from '../components/InputSimple/InputSimple'
import * as Button from '../components/Button/Button'
import Dropdown from "../components/Dropdown/Dropdown";
import MangooIcon from '../../../public/icones/mangoo-icon.svg'
import CarouselTeacher from '../components/CarouselTeacher/carouselteacher'
import { useRouter } from 'next/navigation' // ou 'next/router' dependendo da versão

 const TeacherRegister = () => {
    
    const router = useRouter();

    const handleTeacherClick = () => {
      router.push('/teacher-login');
    }

  return (
    <div>
        <NavBar/>
        
    <div className='page__teacherregister'>

        <div className='intro__teacherregister'>
        <CarouselTeacher/>
        </div>

        <div className='space__teacherregister'>
            {/*Spacing between divs*/}
        </div>

        <div className="teacherregister__card">
            
            <div className='logo__card__teacherregister'>
            <Image
                src={MangooIcon}
                alt='mangoo icon'
                width={53}
                height={49}
            />
            </div>
            
            <p className='titulo__card__teacherregister'>Crie sua conta</p>
            
            <div className="div__line__teacherregister"></div>

            <div className="container__inputs__teacherregister">

                <p className='subtitle__text__teacherregister'>Nome completo<span className='asterisk'>*</span></p>
                <InputSimple extra placeholder='Nome Completo' style={{ width: '380px'}}/>
                
                <p className='subtitle__text__teacherregister'>E-mail<span className='asterisk'>*</span></p>
                <InputSimple extra placeholder='Email Ex: professor@instituição.com' style={{ width: '380px'}}/>

                <p className='subtitle__text__teacherregister'>Senha<span className='asterisk'>*</span></p>
                <InputSimple extra placeholder='Senha' style={{ width: '380px'}}/>

                <p className='subtitle__text__teacherregister'>Confirmação de senha<span className='asterisk'>*</span></p>
                <InputSimple extra placeholder='Confirme sua senha' style={{ width: '380px'}}/>

                <p className='subtitle__text__teacherregister'>Código da instituição<span className='asterisk'>*</span></p>
                <InputSimple extra placeholder='Código fornecido pela instituição' style={{ width: '380px'}}/>

                <p className='subtitle__text__teacherregister'>Como podemos te chamar?<span className='asterisk'>*</span></p>
                <Dropdown options={["opção 1", "opção 2", "opção 3", "opção 4"]}  placeholder="selecione a opção preferida" title="Como podemos te chamar?" onOptionClick={console.log}/>

            </div>

            <div className="buttons__teacherregister">
                <Button.Focused extra style={{ width: '350px', margin:'0px'}}>Criar conta</Button.Focused>    
            </div>
            <p className='footer__text__teacherregister' onClick={handleTeacherClick}>Já possui uma conta? Clique aqui</p>
        </div>
    </div>
    </div>
  )
}

export default TeacherRegister