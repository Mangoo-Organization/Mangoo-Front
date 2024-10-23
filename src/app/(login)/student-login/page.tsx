'use client'
import React, { useState } from 'react'
import './style.css'
import NavBar from '../../components/NavBar/NavBar'
import Image from 'next/image'
import { InputSimple } from '../../components/InputSimple/InputSimple'
import * as Button from '../../components/Button/Button'
import MangooIcon from '../../../../public/icones/mangoo-icon.svg'
import CarouselStudent from '../../components/CarouselStudent/carouselstudent'
import { useRouter } from 'next/navigation' // ou 'next/router' dependendo da versão

const StudentLogin = () => {
    
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
      if (userType === 'S') {
        localStorage.setItem('authToken', token); // Armazenando o token no localStorage, usado na home
        router.push('/student-home'); // Redirecionando para outra página após o login bem-sucedido
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
                    
                    <InputSimple 
                        extra 
                        placeholder='Email Ex: aluno@instituição.com' 
                        style={{ width: '380px'}}
                        value={email}  
                        onChange={(e) => setEmail(e.target.value)} 
                    />

                    <p className='subtitle__text__student'>Senha<span className='asterisk'>*</span></p>
                    
                    <InputSimple
                        type='password' 
                        extra 
                        placeholder='Senha' 
                        style={{ width: '380px'}}
                        value={password}  
                        onChange={(e) => setPassword(e.target.value)} 
                    />

                    <p className='password__text__student' onClick={handleForgotClick}>Esqueceu sua senha?</p>

                </div>

                <div className="buttons__student">
                  <Button.Focused extra style={{ width: '350px', margin:'0px'}}  onClick={handleLogin}>Login</Button.Focused>    
                </div>
                
                <p className='footer__text__student' onClick={handleRegisterClick}>Não possui conta? Realize seu cadastro aqui</p>
            </div>
        </div>
    </div>
  )
}

export default StudentLogin;