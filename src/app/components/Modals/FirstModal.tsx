import React from 'react';
import './FirstModal.css';
import * as Button from '../Button/Button';
import Image from 'next/image';


const FirstModal  = ({ onNext, onClose }: { onNext: () => void, onClose: () => void }) => {

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                
                <div className="modal-header">
                <Image
                    src='./icones/close_modal_buttom.svg'
                    alt='close modal button'
                    width={25}
                    height={25}
                    onClick={onClose}
                    style={{ cursor: 'pointer' }}
                    />
                </div>

                <div className="modal-body">

                    <div className='image-container'>
                    <Image
                    src='./icones/green_shape_logo.svg'
                    alt='green shape logo'
                    width={756}
                    height={595}
                    />
                    </div>

                    <div className='modal-text-modal1'>
                        <p>Você está utilizando o sistema Mangoo. Use-o para responder os testes das suas turmas e receber recompensas pelo seu esforço.</p>
                    </div>

                </div>
                
                <div className="modal-footer">
                    <div className='image-container2'>
                    <Image
                    src='./icones/green_balls1.svg'
                    alt='green balls one'
                    width={100}
                    height={11}
                    />
                    </div>
                    <Button.DarkGreen onClick={onNext}>Avançar</Button.DarkGreen>
                </div>
            </div>
        </div>
    );
};


export default FirstModal;