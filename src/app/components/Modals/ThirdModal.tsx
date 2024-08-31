import React from 'react';
import './ThirdModal.css';
import * as Button from '../Button/Button';
import Image from 'next/image';


const ThirdModal = () => {

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                
                <div className="modal-header">
                <Image
                    src='./icones/close_modal_buttom.svg'
                    alt='close modal button'
                    width={25}
                    height={25}
                    />
                </div>

                <div className="modal-body">
                
                    <div className='image-container'>
                    <Image
                        src='./icones/person_and_tree.svg'
                        alt='person and tree'
                        width={739}
                        height={593}
                        />
                    </div>

                    <div className='modal-text1-modal3'>
                        <p>Além de benefícios, adquira também customizações para deixar seu perfil com a sua cara.</p>
                    </div>
                
                    <div className='modal-text2-modal3'>
                        <p>E acompanhe seu progresso com o crescimento de sua árvore de !TOKENS!</p>
                    </div>

                </div>
                
                <div className="modal-footer">
                    <Button.DarkGreen>Voltar</Button.DarkGreen>
                    <div className='image-container2'>
                    <Image
                    src='./icones/green_balls3.svg'
                    alt='green balls three'
                    width={100}
                    height={11}
                    />
                    </div>
                    <Button.DarkGreen>Avançar</Button.DarkGreen>
                </div>
            </div>
        </div>
    );
};


export default ThirdModal;