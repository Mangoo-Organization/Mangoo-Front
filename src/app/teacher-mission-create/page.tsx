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
import { InputDate } from '../components/InputDate/InputDate'
import Checkbox from '../components/CheckBox/Checkbox'

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
                            <InputDate width='126px' type='date'/>
                        </div>

                         
                        <div className='boxes'>
                            <p className='mission__dados__text'> Entrega</p>
                            <InputDate width='126px' type='time'/>
                                                     
                        </div>
                    </div>
                    
                    <div className="input__data">
                        <div className='boxes'>
                            <p className='owneredit__text'>CPF</p>
                            <InputSimple  
                                placeholder='Nome da instituição'

                            />
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
                        <div className="boxes">
                            
                        </div>
                    </div>
                </div>



            <p className='teacher__mission__title'>Missões</p>
            <div className="teacher__mission__line"></div>
            <InputSimple extra placeholder='Digite o nome da pesquisa' style={{ margin: 0, marginTop: '7px' }} />
            <Button.Transparent style={{height: "53px"}}>Filtro</Button.Transparent>

        </div>
    </div>
  )
}

export default TeacherMissionCreate