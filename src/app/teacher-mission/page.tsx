'use client'
import React from 'react'
import './style.css'
import NavBar from '../components/NavBar/NavBar'
import SidebarTeacher from '../components/SidebarTeacher/SidebarTeacher'
import { InputSimple } from '../components/InputSimple/InputSimple'
import * as Button from '../components/Button/Button';
import TableMission from '../components/TableMission/TableMission'
import Image from 'next/image'
import MissionCuston from '../../../public/icones/mission_custon.svg'
import MissionClass from '../../../public/icones/mission_class.svg'
import MissionInHome from '../../../public/icones/mission_inhome.svg'
import { useRouter } from 'next/navigation' // ou 'next/router' dependendo da versão
import SearchBar from '../components/SearchBar/SearchBar'


const tableData = [
    {
      title: 'Curso de React',
      class: 'Turma A',
      duration: '4 semanas',
      checklist: 'Sim',
      actions: 'Ver',
      status: 'Ativo',
    },
    {
      title: 'Curso de TypeScript',
      class: 'Turma B',
      duration: '6 semanas',
      checklist: 'Não',
      actions: 'Editar',
      status: 'Inativo',
    },
    {
        title: 'Curso de TypeScript',
        class: 'Turma C',
        duration: '6 semanas',
        checklist: 'Não',
        actions: 'Editar',
        status: 'Inativo',
      },
    // Adicione mais dados conforme necessário
  ];

 const TeacherMission = () => {

  const router = useRouter();

  const handleMissionCreateClick = () => {
    router.push('/teacher-mission-create');
  }

  return (
    <div>
        <SidebarTeacher/>
        <NavBar isLogIn />
        
        <div className='teacher__mission__container'>
            
            <p className='teacher__mission__title'>Missões modelo</p>
            <div className="teacher__mission__line"></div>
            <p className='teacher__mission__text'>Crie missões baseadas em nossos templates</p>

            <div className='type__missions__container'>
                
                <div className='type__mission__custon' onClick={handleMissionCreateClick}>
                  <div className='type__mission__title__container'>
                    <p className='type__mission__title'>Missões personalizadas</p>
                    </div>
                    <div className='type__misson__images'>
                      <Image
                        src={MissionCuston}
                        alt='mission custon'
                        width={145}
                        height={130}
                      />
                  </div>
                </div>

                <div className='type__mission__class' onClick={handleMissionCreateClick}>
                  <div className='type__mission__title__container'>
                    <p className='type__mission__title'>Missões em sala</p>
                  </div>
                  <div className='type__misson__images'>
                    <Image
                      src={MissionClass}
                      alt='mission class'
                      width={159}
                      height={93}
                    />
                  </div>
                </div>

                <div className='type__mission__inhome' onClick={handleMissionCreateClick}>
                  <div className='type__mission__title__container'>
                    <p className='type__mission__title'>Missões em casa</p>
                  </div>
                  <div className='type__misson__images'>
                    <Image
                      src={MissionInHome}
                      alt='mission in home'
                      width={133}
                      height={115}
                    />
                  </div>
                </div>

            </div>

            <p className='teacher__mission__title'>Missões</p>
            <div className="teacher__mission__line"></div>
            <div className='teacher__mission__searchbar'>
            <SearchBar placeholder="Digite o título da missão"/>
            </div>
            <div className='teachermission__tablecontainer'>
                <TableMission data={tableData}/>
            </div>
        
        </div>
    </div>
  )
}

export default TeacherMission