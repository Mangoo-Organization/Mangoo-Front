'use client'
import React, { useState } from 'react'
import './style.css'
import NavBar from '../components/NavBar/NavBar'
import Image from 'next/image'
import { InputSimple } from '../components/InputSimple/InputSimple'
import * as Button from '../components/Button/Button'
import MangooIcon from '../../../public/icones/mangoo-icon.svg'
import Students from '../../../public/icones/school_students.svg'
import { useRouter } from 'next/navigation' // ou 'next/router' dependendo da versão

 const OwnerLogin = () => {

    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState(''); 
    const router = useRouter();

    const handleForgotClick = () => {
      router.push('/forgot-password');
    }

    const handleRegisterClick = () => {
        router.push('/information');
      }

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
          console.log('Login bem-sucedido:');
          // Se entrar aqui é pq deu certo e vai ser redirecionado para a página desejada
          router.push('/owneredit')
          
        } catch (error) {
          console.error('Erro ao fazer login:', error);
        }
      };

  return (
    <div>
        <NavBar/>
        
    <div className='page__owner'>

        <div className='intro__owner'>
            <p className='titulo__owner'>Bem-Vindo Proprietário!</p>
            <p className='subtitle__owner'>Faça o acesso da sua conta por aqui</p>
            <Image
                src={Students}
                alt='school students'
                width={750}
                height={534}
            />
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
                <InputSimple 
                    extra 
                    placeholder='Email Ex: proprietario@instituição.com' 
                    style={{ width: '380px'}}
                    value={email}  
                    onChange={(e) => setEmail(e.target.value)} />

                <p className='subtitle__text__owner'>Senha<span className='asterisk'>*</span></p>
                <InputSimple
                    type='password' 
                    extra 
                    placeholder='Senha' 
                    style={{ width: '380px'}}
                    value={password}  // Define o valor do input para o estado da senha
                    onChange={(e) => setPassword(e.target.value)}  // Atualiza o estado ao digitar
                    />

                <p className='password__text__owner' onClick={handleForgotClick}>Esqueceu sua senha?</p>

            </div>

            <div className="buttons__owner">
                <Button.Focused extra style={{ width: '350px', margin:'0px'}}  onClick={handleLogin}>Login</Button.Focused>    
            </div>
            <p className='footer__text__owner' onClick={handleRegisterClick}>Não possui conta? Realize seu cadastro aqui</p>
        </div>
    </div>
    </div>
  )
}

export default OwnerLogin