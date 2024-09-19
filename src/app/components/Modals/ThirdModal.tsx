import React from 'react';
import './ThirdModal.css';
import * as Button from '../Button/Button';
import Image from 'next/image';
import RadioButton from './RadioButton';

const ThirdModal = ({ onNext, onPrevious, onClose }: { onNext: () => void, onPrevious: () => void, onClose: () => void }) => {

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
                    <Button.DarkGreen onClick={onPrevious}>Voltar</Button.DarkGreen>
                    <RadioButton checkedId="radio3" />
                    <Button.DarkGreen  onClick={onNext}>Avançar</Button.DarkGreen>
                </div>
            </div>
        </div>
    );
};


export default ThirdModal;