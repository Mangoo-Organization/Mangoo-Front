'use client'
import React from 'react'
import './style.css'
import NavBar from '../../components/NavBar/NavBar'
import Image from 'next/image'
import { InputSimple } from '../../components/InputSimple/InputSimple'
import * as Button from '../../components/Button/Button'
import MangooIcon from '../../../../public/icones/mangoo-icon.svg'
import CarouselStudent from '../../components/CarouselStudent/carouselstudent'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

 const StudentRegister = () => {
    const [ErrorMessage, setErrorMessage] = useState('')
    const [notEqual, setNotEqual] = useState(false)
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [password, setPassword] = useState('')
    const [password_2, setPassword_2] = useState('')
    // const [phone1, setPhone1] = useState('')
    // const [phone2, setPhone2] = useState('')
    const [email, setEmail] = useState('')
    const [institution, setInstitution] = useState('')
    const userType = 'S'
    const phone1 = '(xx)xxxxx-xxxx'
    const phone2 = '(xx)xxxxx-xxxx'
    
    const router = useRouter();

    const handleStudentClick = () => {
      router.push('/student-login');
    }

    const handleRegistrationStudent = async () => {
        try {

            if(password !== password_2)
            {
                setNotEqual(true)
                setErrorMessage('As senhas não são iguais')
                alert('As senhas não são iguais')
                return;
            }
            setNotEqual(false)

            const response = await fetch('http://45.174.64.137:8000/api/v1/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    first_name: first_name,
                    institution: institution,
                    last_name: last_name,
                    password: password,
                    password_2: password_2,
                    phone1: phone1,
                    user_type: userType,
                    phone2: phone2, 
                }),
            });

            if (!response.ok) {
                if (response.status === 400){
                    setErrorMessage('O estudante já existe ou a instituição é inválida')
                    alert('O estudante já existe ou a instituição é inválida')
                    return;
                }
                else{
                    setErrorMessage('Erro ao cadastrar o aluno');
                    alert('Erro ao cadastrar o aluno')
                    return;
                }
            }
            

            const result = await response.json();
            console.log("Dados atualizados:", result);
            alert("Alterações salvas com sucesso!");
        } catch (error) {
            console.error("Erro ao salvar os dados:", error);
        }
    };

  return (
    <div>
        <NavBar/>
        
    <div className='page__studentregister'>

        <div className='intro__studentregister'>
            <CarouselStudent/>
        </div>

        <div className='space__studentregister'>
            {/*Spacing between divs*/}
        </div>

        <div className="student__card__register">
            
            <div className='logo__card__studentregister'>
            <Image
                src={MangooIcon}
                alt='mangoo icon'
                width={53}
                height={49}
            />
            </div>
            
            <p className='titulo__card__studentregister'>Crie sua conta</p>
            
            <div className="div__line__studentregister"></div>

            <div className="container__inputs__studentregister">

                <p className='subtitle__text__studentregister'>Nome<span className='asterisk'>*</span></p>
                <InputSimple 
                    extra 
                    placeholder='Ex: Maria' 
                    style={{ width: '380px'}} 
                    value={first_name} 
                    onChange={(e) => setFirst_name(e.target.value)}
                    />

                <p className='subtitle__text__studentregister'>Sobrenome<span className='asterisk'>*</span></p>
                <InputSimple 
                    extra 
                    placeholder='Ex: Da Silva' 
                    style={{ width: '380px'}} 
                    value={last_name} 
                    onChange={(e) => setLast_name(e.target.value)}
                    />
                
                <p className='subtitle__text__studentregister'>E-mail<span className='asterisk'>*</span></p>
                <InputSimple 
                    extra 
                    placeholder='Ex: aluno@instituição.com' 
                    style={{ width: '380px'}} 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    />

                <p className='subtitle__text__studentregister'>Senha<span className='asterisk'>*</span></p>
                <InputSimple 
                    extra 
                    placeholder='Digite uma senha' 
                    style={{ width: '380px'}} 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    atention={notEqual}
                    type='password'
                />

                <p className='subtitle__text__studentregister'>Confirmação de senha<span className='asterisk'>*</span></p>
                <InputSimple 
                    extra 
                    placeholder='Confirme sua senha' 
                    style={{ width: '380px'}} 
                    value={password_2} 
                    onChange={(e) => setPassword_2(e.target.value)}
                    atention={notEqual}
                    type='password'
                    />

                <p className='subtitle__text__studentregister'>Nome da instituição<span className='asterisk'>*</span></p>
                <InputSimple 
                    extra
                    placeholder='Diga o nome da sua instituição'
                    style={{ width: '380px'}} 
                    value={institution} 
                    onChange={(e) => setInstitution(e.target.value)}
                    />

            </div>

            <div className="buttons__studentregister">
                <Button.Focused extra style={{ width: '350px'}} 
                onClick={handleRegistrationStudent }>Criar conta</Button.Focused>    
            </div>
            <p className='footer__text__studentregister' onClick={handleStudentClick}>Já possui uma conta? Clique aqui</p>
        </div>
    </div>
    </div>
  )
}

export default StudentRegister