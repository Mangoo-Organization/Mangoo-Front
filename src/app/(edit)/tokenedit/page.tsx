'use client'
import React, { useEffect, useState } from 'react'
import TokenPhoto from '../../components/TokenPhoto/TokenPhoto'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/Sidebar/SideBar'
import * as Button from '../../components/Button/Button'
import { InputSimple } from '../../components/InputSimple/InputSimple'
import './style.css'
import { useRouter } from 'next/navigation'

const page = () => {
    // Estado de carregamento
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    //dados puxados da api
    const token = localStorage.getItem('authToken');


    useEffect(() =>{
        const userType = localStorage.getItem('userType');

        if (!token) {
            // Caso o token não exista, redirecione para a página de login
            console.error('token não encontrado.');
            router.push('/without-permission');
            return;
          }
        if (userType !== 'O') {
            router.push('/without-permission');
            return;
          }
        setLoading(false); // Define o carregamento como concluído
    },[router]);
    if (loading) {
        return <p>Carregando...</p>;
      }

  return (
    <>
    <NavBar isLogIn />
    <div className="tokenedit__container">
        <div className="tokenedit__sidebar">
            <SideBar minhaConta='sidebar__text' instituicao='sidebar__text' token='sidebar__textsub'/>
        </div>

        <div className="tokenedit__card">
            <div className="tokenedit__info">
              <div className="tokenedit__titulo">
                <h3>Informações do Token</h3>
                <p>Configuração de perfil do token</p>
              </div>

              <div className="tokenedit__tokenphoto">
                <TokenPhoto/>
                <div className="tokenedit__button-foto">
                  <Button.Green extra>Alterar foto</Button.Green>
                  <Button.Transparent>  Remover foto</Button.Transparent>
                </div>
              </div>

            </div>

            <div className="tokenedit__dados">
                <p className='tokenedit__dados-titulo'>Dados do Token</p>

                <div className="input__data">
                    <div className="boxes">
                      <p className='tokenedit__text'>Nome<span className='asterisk'>*</span></p>
                      <InputSimple extra placeholder='Instituição token'/>
                    </div>
                </div>

                <div className="input__data">
                    <div className="boxes">
                      <p className='tokenedit__text'>Simbolo<span className='asterisk'>*</span></p>
                      <InputSimple extra placeholder='IT'/>
                    </div>
                </div>
            
            </div>

            <div className="tokenedit__buttons">
                    <Button.Transparent>Cancelar</Button.Transparent>   
                    <Button.Green>Salvar</Button.Green>
            </div>

        </div>
    </div>
    </>
  )
}

export default page