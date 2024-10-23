'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SidebarTeacher from '../../components/SidebarTeacher/SidebarTeacher';
import NavBar from '../../components/NavBar/NavBar';
import './style.css'

const TeacherHome = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carregamento, para não mostrar nada da página
  const router = useRouter();

  useEffect(() => {

    const fetchData = async () => {
      const token = localStorage.getItem('authToken');
      const userType = localStorage.getItem('userType'); // Capturando o tipo de usuário

      if (!token) {
        // Caso o token não exista, redirecione para a página de login
        alert('Faça login para acessar a página.');
        console.error('token não encontrado.');
        router.push('/teacher-login');
        return;
      }

      if (userType !== 'T') {
        // Se o tipo de usuário não for 'T', mostre um alerta e redirecione
        alert('Você não tem permissão para acessar essa página.');
        router.push('/teacher-login');
        return;
      }

      try {
        const response = await fetch('http://45.174.64.137:8000/api/v1/my-data/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Erro: ${response.statusText}`);
        }

        const data = await response.json();
        setUserData(data); // Armazena os dados no estado

      } catch (error) {
        console.error('Erro ao buscar dados', error);
        alert('Erro ao buscar dados do')
        // Em caso de erro, redirecionar para a página de login ou mostrar uma mensagem de erro
        router.push('/teacher-login');
      } finally {
        setLoading(false); // Define o carregamento como concluído
      }
    };

    fetchData();
  }, [router]);

  // Enquanto estiver carregando, não renderize a página
  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <SidebarTeacher />
      <NavBar isLogIn />

      <div className='teacher__mission__container'>
        <p className='teacher__mission__title'>Bem-vindo professor</p>
        <div className="teacher__mission__line"></div>
        <p className='teacher__mission__text'>Seus dados:</p>

        {userData ? (
          <div>
            <p>ID: {userData.id}</p>
            <p>Email: {userData.email}</p>
            <p>Nome: {userData.first_name} {userData.last_name}</p>
            <p>Instituição: {userData.institution_name}</p>
            <p>Carteira ID: {userData.wallet[0]?.id}</p>
            <p>Saldo: {userData.wallet[0]?.balance}</p>
            <p>Token da Carteira: {userData.wallet[0]?.token}</p>
            <p>Telefone 1: {userData.phone1}</p>
            <p>Telefone 2: {userData.phone2}</p>
            <p>ITR: {userData.itr}</p>
            <p>Foto de Perfil: {userData.profile_picture}</p>
          </div>
        ) : (
          <p>Carregando dados...</p>
        )}
      </div>
    </div>
  );
};

export default TeacherHome;
