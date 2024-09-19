import React from 'react';
import './SecondModal.css';
import * as Button from '../Button/Button';
import Image from 'next/image';
import RadioButton from './RadioButton';

const SecondModal = ({ onNext, onPrevious, onClose }: { onNext: () => void, onPrevious: () => void, onClose: () => void }) => {

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
                        src='./icones/people_modal2.svg'
                        alt='people modal two'
                        width={788}
                        height={593}
                        />
                    </div>

                    <div className='modal-text1-modal2'>
                        <p>Ao completar missões e concluir atividades, você recebe !TOKENS! em sua carteira do aplicativo.</p>
                    </div>
                
                    <div className='modal-text2-modal2'>
                        <p>Você pode trocar os !TOKENS! adquiridos por benefícios em sua instituição de ensino.</p>
                    </div>

                </div>
                
                <div className="modal-footer">
                    <Button.DarkGreen onClick={onPrevious}>Voltar</Button.DarkGreen>
                    <RadioButton checkedId="radio2" />
                    <Button.DarkGreen  onClick={onNext}>Avançar</Button.DarkGreen>
                </div>
            </div>
        </div>
    );
};


export default SecondModal;