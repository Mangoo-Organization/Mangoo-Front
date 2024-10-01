'use client'
import React, { useState, useEffect } from 'react'
import './SidebarTeacher.css'
import Image from 'next/image'
import SidebarMangoo from '../../../../public/icones/sidebar_logomangoo.svg'
import ProfileIconWhite from '../../../../public/icones/profile_icon_white.svg'
import MissionIconWhite from '../../../../public/icones/mission_icon_white.svg'
import ClassesIconWhite from '../../../../public/icones/classes_icon_white.svg'
import LogoutIconWhite from '../../../../public/icones/logout_icon_white.svg'
import { useRouter, usePathname } from 'next/navigation'  // Adiciona usePathname
  
const SidebarTeacher = () => {
    const router = useRouter();
    const pathname = usePathname();  // Obtém a rota atual
    const [activeDiv, setActiveDiv] = useState<string>('') // Armazena a div clicada

    useEffect(() => {
        // Mapeia a rota para a div correspondente
        if (pathname === '/teacher-account') {
            setActiveDiv('minhaConta');
        } else if (pathname === '/teacher-mission-create') {
            setActiveDiv('missoes');
        } else if (pathname === '/teacher-classes') {
            setActiveDiv('turmas');
        }
    }, [pathname]); // Atualiza sempre que a rota muda

    const handleDivClick = (divName: string, route: string) => {
        setActiveDiv(divName) // Atualiza a div clicada
        router.push(route);
    }

    const handleLogoutClick = () => {
        router.push('/teacher-login');
    }

    return (
        <div className='menu__teacher'>
            <div className='menu__teacher__logocontainer'>
                <Image src={SidebarMangoo} alt='Sidebar Mangoo' />
            </div>

            <div className='menu__teacher__container'>
                <div
                    className={`menu__teacher__containerline ${activeDiv === 'minhaConta' ? 'active' : ''}`}
                    onClick={() => handleDivClick('minhaConta', '/teacher-account')}
                >
                    <div className='menu__teacher__containericon'>
                        <Image src={ProfileIconWhite} alt='profile icon white' className='icons__menuteacher' />
                    </div>
                    <p className='menu__teacher__text'>Minha Conta</p>
                </div>

                <div
                    className={`menu__teacher__containerline ${activeDiv === 'missoes' ? 'active' : ''}`}
                    onClick={() => handleDivClick('missoes', '/teacher-mission-create')}
                >
                    <div className='menu__teacher__containericon'>
                        <Image src={MissionIconWhite} alt='profile icon white' className='icons__menuteacher' />
                    </div>
                    <p className='menu__teacher__text'>Missões</p>
                </div>

                <div
                    className={`menu__teacher__containerline ${activeDiv === 'turmas' ? 'active' : ''}`}
                    onClick={() => handleDivClick('turmas', '/teacher-classes')}
                >
                    <div className='menu__teacher__containericon'>
                        <Image src={ClassesIconWhite} alt='profile icon white' className='icons__menuteacher' />
                    </div>
                    <p className='menu__teacher__text'>Turmas</p>
                </div>
            </div>

            <div className='menu__teachercontainer__logout'>
                <div className='menu__teacher__containerline'>
                    <div className='menu__teacher__containericon'>
                        <Image src={LogoutIconWhite} alt='profile icon white' className='icons__menuteacher' />
                    </div>
                    <p className='menu__teacher__text' onClick={handleLogoutClick}>Sair</p>
                </div>
            </div>
        </div>
    )
}

export default SidebarTeacher