import React from 'react'
import './Footer.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='footer__container'>
        <div className='footer__div1'>
            <div className='footer__logo'>
                <Image
                    src='/icones/logo_vetorizada.svg'
                    alt='logo'
                    width={60}
                    height={60}
                    />
                 <p >Mangoo 2024<br />All rights reserved &copy; 
                    </p>   
            </div>
            <ul className='footer__nav'>
                <li className='nav__item'>
                    <h2 className='nav__title'>Media</h2>
                    <ul className='nav__ul'>
                        <li>
                            <a href="#"> Online </a>
                        </li>
                        <li>
                            <a href="#">Print</a>
                        </li>
                        <li>
                            <a href="#">Alternative ads</a>
                        </li>
                    </ul>
                </li>
                <li className='nav__item'>
                    <h2 className='nav__title'>Media</h2>
                    <ul className='nav__ul'>
                        <li>
                            <a href="#"> Online </a>
                        </li>
                        <li>
                            <a href="#">Print</a>
                        </li>
                        <li>
                            <a href="#">Alternative ads</a>
                        </li>
                    </ul>
                </li>
                <li className='nav__item'>
                    <h2 className='nav__title'>Media</h2>
                    <ul className='nav__ul'>
                        <li>
                            <a href="#"> Online </a>
                        </li>
                        <li>
                            <a href="#">Print</a>
                        </li>
                        <li>
                            <a href="#">Alternative ads</a>
                        </li>
                    </ul>
                </li>

            </ul>

        </div>

        <div className="legal">
            <p> @2024 Mangoo. All rights reserved.</p>
    
        </div>

    </footer>
  )
}

export default Footer