import React from 'react';
import './FourthModal.css';
import * as Button from '../Button/Button';
import Image from 'next/image';
import RadioButton from './RadioButton';

const FourthModal = ({ onPrevious, onClose }: { onPrevious: () => void, onClose: () => void }) => {

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
                        src='./icones/sparkle_mangoo.svg'
                        alt='sparkle mangoo'
                        width={739}
                        height={593}
                        />
                    </div>

                    <div className='modal-text1-modal4'>
                        <p>Seja muito bem-vindo(a) ao Mangoo e bons estudos!</p>
                    </div>

                </div>
                
                <div className="modal-footer">
                    <Button.DarkGreen onClick={onPrevious}>Voltar</Button.DarkGreen>
                    <RadioButton checkedId="radio4" />
                    <Button.Focused onClick={onClose}>Começar</Button.Focused>
                </div>
            </div>
        </div>
    );
};


export default FourthModal;