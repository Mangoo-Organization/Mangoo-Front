'use client'
import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/Sidebar/SideBar'
import './style.css'
import { InputSimple } from '../../components/InputSimple/InputSimple'
import * as Button from '../../components/Button/Button'
import { useRouter } from 'next/navigation'


const InstituEdit = () => {
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
   <NavBar isLogIn/>
   <div className="instituedit__container">
        <div className="instituedit__sidebar">
            {/* passar os texts de acordo com qual texto você quer sublinhar */}
            <SideBar minhaConta='sidebar__text' instituicao='sidebar__textsub' token='sidebar__text'/>
        </div>
            <div className="instituedit__card">
                <div className="instituedit__info">
                    
                    <div className="owneredit__titulo">
                        <h3>Informações Institucionais</h3>
                        <p>Configuração de perfil da Instituição</p>
                    </div>
            </div>

            <div className="instituedit__dados">
                <p className='instituedit__dados-titulo'>Dados Institucionais</p>


                <div className="input__data">
                    <div className="boxes">
                        <p className='instituedit__text'>Nome da Instituição</p>
                        <InputSimple extra placeholder='Instituição...'/>
                    </div>
                    <div className="boxes">
                        <p className='instituedit__text'>CNPJ</p>
                        <InputSimple extra placeholder='xx.xxx.xxx/xxxx-xx'/>
                    </div>
                </div>

                <div className="input__data">
                    <div className="boxes">
                        <p className='instituedit__text'>Email Institucional</p>
                        <InputSimple extra placeholder='Instituição@escola.com'/>
                    </div>
                    <div className="boxes">
                        <p className='instituedit__text'>Telefone Institucional</p>
                        <InputSimple  placeholder='(xx) xxxxx-xxxx'/>
                    </div>
                </div>

            </div>

            <div className="instituedit__dados">
                <p className='instituedit__dados-titulo'>Endereço</p>


                <div className="input__data">
                    <div className="boxes">
                        <p className='instituedit__text'>CEP</p>
                        <InputSimple  placeholder='CEP'/>
                    </div>
                    <div className="boxes">
                        <p className='instituedit__text'>Cidade<span className='asterisk'>*</span></p>
                        <InputSimple extra placeholder='Ex: Fortaleza'/>
                    </div>
                    <div className="boxes">
                        <p className='instituedit__text'>Estado<span className='asterisk'>*</span></p>
                        <InputSimple extra placeholder='Ex: Ceará'/>
                    </div>
                </div>

                <div className="input__data">
                    <div className="boxes">
                        <p className='instituedit__text'>Rua<span className='asterisk'>*</span></p>
                        <InputSimple extra placeholder='Rua x'/>
                    </div>
                    <div className="boxes">
                        <p className='instituedit__text'>Bairro</p>
                        <InputSimple extra placeholder='Bairro y'/>
                    </div>
                </div>

                <div className="input__data">
                    <div className="boxes">
                        <p className='instituedit__text'>Número<span className='asterisk'>*</span></p>
                        <InputSimple  placeholder='xxxxxx'/>
                    </div>
                    <div className="boxes">
                        <p className='instituedit__text'>Complemento</p>
                        <InputSimple extra placeholder='Ex: apto, ponto de referência...'/>
                    </div>
                </div>

            </div>

            <div className="instituedit__buttons">
                    <Button.Transparent disabled>Cancelar</Button.Transparent>   
                    <Button.Green disabled>Salvar</Button.Green>
            </div>

        </div>
   </div>
   </>
  )
}

export default InstituEdit