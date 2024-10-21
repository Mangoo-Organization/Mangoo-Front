'use client'
import React, { useState } from 'react'
import './style.css'
import NavBar from '../components/NavBar/NavBar'
import SidebarTeacher from '../components/SidebarTeacher/SidebarTeacher'
import { InputSimple } from '../components/InputSimple/InputSimple'
import * as Button from '../components/Button/Button';
import TableMission from '../components/TableMission/TableMission'
import Image from 'next/image'
import { useRouter } from 'next/navigation' // ou 'next/router' dependendo da versão
import { Input } from '../components/Input/Input'
import Checkbox from '../components/CheckBox/Checkbox'
import DifficultButton from '../components/DifficultyButton/DifficultyButton'

 const TeacherMissionCreate = () => {

    const [isPresencial, setIsPresencial] = useState(false);
    const [isOnline, setIsOnline] = useState(false);

    const handlePresencialChange = () => {
        setIsPresencial(true);
        setIsOnline(false);
      };
    
      const handleOnlineChange = () => {
        setIsPresencial(false);
        setIsOnline(true);
      };

  return (
    <div>
        <SidebarTeacher/>
        <NavBar isLogIn />
        <div className='teacher__mission__container'>
            
            <p className='teacher__mission__title'>Criação de Missão Personalizada</p>
            <div className="teacher__mission__line"></div>
            <p className='teacher__mission__subtitle'>Configurações para registo de missão</p>


            <div className="mission__dados" >
                    <p className="mission__dados__titulo">Dados da missão</p>

                    <div className="input__data">
                        <div className='boxes'>
                            <p className='mission__dados__text'>Disciplina</p>
                            <InputSimple 
                                extra 
                                placeholder='Selecione a turma'

                            />
                        </div>
                        
                        <div className='boxes'>
                            <p className='mission__dados__text'>Prazo &emsp;&emsp;  de &emsp;</p>
                            <Input width='126' type='date' height='39'/>
                        </div>

                         
                        <div className='boxes'>
                            <p className='mission__dados__text'> Entrega</p>
                            <Input width='126' type='time' height='39'/>
                                                     
                        </div>
                    </div>
                    
                    <div className="input__data">
                        <div className='boxes'>
                            <p className='mission__dados__text'>Nível da Missão</p>
                            <DifficultButton/>
                        </div>
                        <div className='boxes'>
                            <p className='mission__dados__text'>Tipo de Entrega</p>
                            <div className='mission__dados__checkbox'>
                                <p className='mission__dados__text__checkbox'>Presencial</p>
                                <Checkbox
                                    checked={isPresencial}
                                    onChange={handlePresencialChange}/>
                                <p className='mission__dados__text__checkbox'>Online</p>
                                <Checkbox
                                    checked={isOnline}
                                    onChange={handleOnlineChange}/>
                            </div>
                           
    
                        </div>
                       
                    </div>


                    <div className="input__data">
                        <div className='boxes'>
                            <p className='mission__dados__text'>Título da Missão</p>
                            <InputSimple extra placeholder='Ex: Fazer atividade do livro'/>
                        </div>
                       
                       
                    </div>
                    
                    <div className="input__data">
                        <div className="boxes">
                            <p className='mission__dados__text'> Descrição da Atividade</p>
                            <textarea className='mission__text__area' rows={20} cols={50} />
                            {/* <Input width='968.43' height='158.13'/> */}
                        </div>
                    </div>

                    <div className="input__data">
                        <div className="boxes">
                            <p className='mission__dados__text'> Comentário Adicional</p>
                            <Input width='716' height='39'/>
                        </div>
                    </div>

                </div>

                <div className="mission__buttons">
                    <Button.Transparent extra>Cancelar</Button.Transparent>   
                    <Button.Green extra>Criar Missão</Button.Green>
                </div>

        </div>
    </div>
  )
}

export default TeacherMissionCreate