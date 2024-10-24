'use client'
import React, { useEffect, useState } from 'react';
import './style.css';
import NavBar from '../../components/NavBar/NavBar';
import SidebarTeacher from '../../components/SidebarTeacher/SidebarTeacher';
import TableMission from '../../components/TableMission/TableMission';
import Image from 'next/image';
import MissionCuston from '../../../../public/icones/mission_custon.svg';
import MissionClass from '../../../../public/icones/mission_class.svg';
import MissionInHome from '../../../../public/icones/mission_inhome.svg';
import { useRouter } from 'next/navigation';
import SearchBar from '../../components/SearchBar/SearchBar';

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
  // Adicione mais dados conforme necessário
];

const TeacherMission = () => {
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userType = localStorage.getItem('userType'); // Capturando o tipo de usuário

    if (!token) {
      // Caso o token não exista, redirecione para a página de login
      console.error('token não encontrado.');
      router.push('/without-permission');
      return;
    }

    if (userType !== 'T') {
      // Se o tipo de usuário não for 'T', mostre um alerta e redirecione
      router.push('/without-permission');
      return;
    }

    setLoading(false); // Define o carregamento como concluído
  }, [router]);

  // Enquanto estiver carregando, não renderize a página
  if (loading) {
    return <p>Carregando...</p>;
  }

  const handleMissionCreateClick = () => {
    router.push('/teacher-mission-create');
  }

  return (
    <div>
      <SidebarTeacher />
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
          <SearchBar placeholder="Digite o título da missão" />
        </div>
        <div className='teachermission__tablecontainer'>
          <TableMission data={tableData} />
        </div>
      </div>
    </div>
  )
}

export default TeacherMission;
