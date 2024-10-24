import './NavBar.css'
import UserImg from '../../../../public/icones/User-icon.svg'
import Bell from '../../../../public/icones/bell_navbar.svg'
import MenuIcon from '../../../../public/icones/menu.svg'
import Image from 'next/image'
import MangooIcon from '../../../../public/icones/mangoo-icon.svg'
import { NavBarProps } from '@/types'
import { Transparent, DarkGreen } from '../Button/Button'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const NavBar = ({ isLogIn }: NavBarProps) => {
    const router = useRouter();
    const [userData, setUserData] = useState<{ first_name?: string; userType?: string }>({}); //criação das constantes

    const GoToLogIn = () => {
        router.push('/choosen-profile');
    };

    useEffect(() => {
        const token = localStorage.getItem('authToken'); //armazenamento do token
        const userType = localStorage.getItem('userType'); //armazenamento do tipo de usuário

        const fetchData = async () => {
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
                setUserData({ first_name: data.first_name, userType });
            } catch (error) {
                console.error('Erro ao buscar dados (navbar)', error);
            }
        };

        if (isLogIn) {
            fetchData();
        }
    }, [isLogIn, router]);

    const getUserTypeLabel = (userType?: string) => {
        switch (userType) {
            case 'T':
                return 'Professor(a)';
            case 'S':
                return 'Aluno(a)';
            case 'O':
                return 'Proprietário(a)';
            default:
                return 'Usuário'; // Valor padrão caso não seja reconhecido
        }
    };

    return (
        <header className='menu'>
            <div className="menu__left">
                <Image
                    src={MangooIcon}
                    alt="Mangoo Icon"
                    className='image__settings-left'
                />
                {isLogIn ? null : (
                    <div className='tag__menu-container'>
                        <a href="#" className='tag__menu'>Home</a>
                        <a href="#" className='tag__menu'>Sobre Nós</a>
                        <a href="#" className='tag__menu'>Planos</a>
                        <a href="#" className='tag__menu'>Contato</a>
                    </div>
                )}
            </div>
            <div className="menu__right">
                {isLogIn ? (
                    <>
                        <Image src={Bell} alt="bell navbar" width={30} height={30} className='image__settings-right' />
                        <div className='infos__container'>
                            <p className='infos__texttitle'>{userData.first_name}</p>
                            <p className='infos_textsubtitle'>{getUserTypeLabel(userData.userType)}</p>
                        </div>
                        <Image src={UserImg} alt="User Icon" className='image__settings-right' />
                    </>
                ) : (
                    <>
                        <Transparent onClick={GoToLogIn}>Log-in</Transparent>
                        <DarkGreen>Cadastre-se</DarkGreen>
                    </>
                )}
            </div>
        </header>
    );
}

export default NavBar;