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

    const router = useRouter();
    function GoToLogIn(){
        router.push('/choosen-profile');
    }

    /*is login or not?*/
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
                    <p className='infos__texttitle'>Nomeee</p>
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
                    <Transparent onClick={GoToLogIn}>Log-in</Transparent>
                    <DarkGreen>Cadastre-se</DarkGreen>
                </div>
            </header>
        );
}

export default NavBar;