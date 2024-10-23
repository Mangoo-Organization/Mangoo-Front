'use client'
import React, { useState } from 'react'
import './style.css'
import NavBar from '../components/NavBar/NavBar'
import Image from 'next/image'
import { InputSimple } from '../components/InputSimple/InputSimple'
import * as Button from '../components/Button/Button'
import MangooIcon from '../../../public/icones/mangoo-icon.svg'
import CarouselTeacher from '../components/CarouselTeacher/carouselteacher'
import { useRouter } from 'next/navigation' // ou 'next/router' dependendo da versão

 const TeacherLogin = () => {
    
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState(''); 
  const router = useRouter();

  const handleLogin = async () => {
    
    try {
      const response = await fetch('http://45.174.64.137:8000/api/v1/auth-token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email, 
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.statusText}`);
      }

      const data = await response.json();
      
      const token = data.token; // Capturando o token da resposta
      const userType = data.user_type; // Capturando o tipo de usuário

      // Verificando o tipo de usuário
      if (userType === 'T') {
        localStorage.setItem('authToken', token); // Armazenando o token no localStorage, usado na home
        localStorage.setItem('userType', userType); // Armazenando o userType no localStorage
        router.push('/teacher-home'); // Redirecionando para outra página após o login bem-sucedido
      } else {
        alert('Usuário não autorizado. Verifique seu tipo de conta.');
        localStorage.removeItem('authToken'); // Remove o token de autenticação
        localStorage.removeItem('userType'); // Remove o tipo de usuário
      }
      
    } catch (error) {
      alert('Erro ao fazer login.');
      localStorage.removeItem('authToken'); // Remove o token de autenticação
      localStorage.removeItem('userType'); // Remove o tipo de usuário
    }
  };

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
                
                <InputSimple 
                        extra 
                        placeholder='Email Ex: professor@instituição.com' 
                        style={{ width: '380px'}}
                        value={email}  
                        onChange={(e) => setEmail(e.target.value)} 
                    />

                <p className='subtitle__text__teacher'>Senha<span className='asterisk'>*</span></p>
                
                <InputSimple
                        type='password' 
                        extra 
                        placeholder='Senha' 
                        style={{ width: '380px'}}
                        value={password}  
                        onChange={(e) => setPassword(e.target.value)} 
                    />

                <p className='password__text__teacher' onClick={handleForgotClick}>Esqueceu sua senha?</p>

            </div>

            <div className="buttons__teacher">
              <Button.Focused extra style={{ width: '350px', margin:'0px'}}  onClick={handleLogin}>Login</Button.Focused>     
            </div>
            <p className='footer__text__teacher' onClick={handleRegisterClick}>Não possui conta? Realize seu cadastro aqui</p>
        </div>
    </div>
    </div>
  )
}

export default TeacherLogin