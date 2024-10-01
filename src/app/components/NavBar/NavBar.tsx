import './NavBar.css'
import UserImg from '../../../../public/icones/User-icon.svg'
import MenuIcon from '../../../../public/icones/menu.svg'
import Image from 'next/image'
import MangooIcon from '../../../../public/icones/mangoo-icon.svg'
import { NavBarProps } from '@/types'
import {Transparent, DarkGreen} from '../Button/Button'

const NavBar = ({isLogIn}: NavBarProps) => {

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