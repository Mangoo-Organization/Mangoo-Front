import './NavBar.css'
import UserImg from '../../../../public/icones/User-icon.svg'
import Bell from '../../../../public/icones/bell_navbar.svg'
import MenuIcon from '../../../../public/icones/menu.svg'
import Image from 'next/image'
import MangooIcon from '../../../../public/icones/mangoo-icon.svg'
import { NavBarProps } from '@/types'
import {Transparent, DarkGreen} from '../Button/Button'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const NavBar = ({isLogIn}: NavBarProps) => {
    
    const [userData, setUserData] = useState(null);
    const router = useRouter();

    useEffect(() => {
      const fetchData = async () => {
        const token = localStorage.getItem('authToken');
  
        if (!token) {
          // Caso o token não exista, redirecione para a página de login
          // router.push('/choosen-profile');
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
          console.error('Erro ao buscar dados do usuário:', error);
          // Em caso de erro, redirecionar para a página de login ou mostrar uma mensagem de erro
          router.push('/choosen-profile');
        }
      };
  
      fetchData();
    }, [router]);

    /*is login or not? -------------------------------------------------*/
    console.log(isLogIn)
    if(isLogIn){
        return(
            <header className='menu'>
                <div className="menu__left">                
                    <Image 
                    src={MangooIcon} 
                    alt="Mangoo Icon" 
                    className='image__settings-left'/>
                </div>
                <div className="menu__right">
                    <Image src={Bell} alt="bell navbar" width={30} height={30} className='image__settings-right'/>
                    <div className='infos__container'>
                    {userData ? ( <p className='infos__texttitle'>{userData.first_name}</p>) : (<p>Carregando dados...</p>)}
                    <p className='infos_textsubtitle'>Tipo de usuário</p>
                    </div>
                    <Image src={UserImg} alt="User Icon" className='image__settings-right'/>
                </div>
            </header>
        );
    }
        return(
            <header className='menu'>
                <div className="menu__left">                
                    <Image 
                    src={MangooIcon} 
                    alt="Mangoo Icon" 
                    className='image__settings-left'/>
                    <div className='tag__menu-container'>
                        <a href="#" className='tag__menu'>Home</a>
                        <a href="#" className='tag__menu'>Sobre Nós</a>
                        <a href="#" className='tag__menu'>Planos</a>
                        <a href="#" className='tag__menu'>Contato</a>
                    </div>
                </div>
                <div className="menu__right">
                    <Transparent>Log-in</Transparent>
                    <DarkGreen>Cadastre-se</DarkGreen>
                </div>
            </header>
        );
}

export default NavBar;