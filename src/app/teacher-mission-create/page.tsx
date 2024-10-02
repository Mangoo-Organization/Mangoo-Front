'use client'
import React from 'react'
import './style.css'
import NavBar from '../components/NavBar/NavBar'
import SidebarTeacher from '../components/SidebarTeacher/SidebarTeacher'
import { InputSimple } from '../components/InputSimple/InputSimple'
import * as Button from '../components/Button/Button';
import TableMission from '../components/TableMission/TableMission'
import Image from 'next/image'
import { useRouter } from 'next/navigation' // ou 'next/router' dependendo da versão

 const TeacherMission = () => {

  return (
    <div>
        <SidebarTeacher/>
        <NavBar isLogIn />
        <div className='teacher__mission__container'>
            
            <p className='teacher__mission__title'>Missões modelo</p>
            <div className="teacher__mission__line"></div>
            <p className='teacher__mission__text'>Crie missões baseadas em nossos templates</p>

            <p className='teacher__mission__title'>Missões</p>
            <div className="teacher__mission__line"></div>
            <InputSimple extra placeholder='Digite o nome da pesquisa' style={{ margin: 0, marginTop: '7px' }} />
            <Button.Transparent style={{height: "53px"}}>Filtro</Button.Transparent>

        </div>
    </div>
  )
}

export default TeacherMission