import './NavBar.css'
import UserImg from '../../../../public/icones/User-icon.svg'
import MenuIcon from '../../../../public/icones/menu.svg'
import Image from 'next/image'
// import MangooIcon from '../../../../public/icones/mangoo-icon.svg'

const NavBar = () => {
    return(
        
        <header className='menu'>
            <div className="menu__left">
                <Image src={MenuIcon} alt="Hanburger Menu" className='image__settings-left' height={54}/>
                {/* <Image src={MangooIcon} alt="Mangoo Icon" className='image__settings-left' height={45}/> */}
            </div>
            <div className="menu__right">
                <Image src={UserImg} alt="User Icon" className='image__settings-right'/>
            </div>
        </header>
        
    );
}

export default NavBar;