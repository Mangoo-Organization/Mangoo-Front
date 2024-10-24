'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const StudentHome = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('authToken');
      const userType = localStorage.getItem('userType'); // Capturando o tipo de usuário

      if (!token) {
        // Caso o token não exista, redirecione para a página de login
        router.push('/without-permission');
        return;
      }

      if (userType !== 'S') {
        // Se o tipo de usuário não for 'S', redirecione para a página sem permissão
        console.error('Usuário não é do tipo S.');
        console.log('Tipo de usuário:', userType);
        router.push('/without-permission');
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
        console.error('Erro ao buscar dados do estudante:', error);
        alert('Dados não encontrados');
        router.push('/student-login');
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
      <h1>Bem-vindo à página inicial do estudante</h1>
      
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
  );
};

export default StudentHome;