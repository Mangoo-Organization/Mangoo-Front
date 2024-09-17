import React, { useState } from 'react';
import FirstModal from './FirstModal';   // Importe o FirstModal
import SecondModal from './SecondModal'; // Importe o SecondModal
import ThirdModal from './ThirdModal';   // Importe o ThirdModal
import FourthModal from './FourthModal';   // Importe o ThirdModal

const ModalContainer = () => {
    const [currentModal, setCurrentModal] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(true);  // Controla a visibilidade do modal

    const handleNext = () => {
        setCurrentModal((prevModal) => prevModal + 1);
    };

    const handlePrevious = () => {
        setCurrentModal((prevModal) => prevModal - 1);
    };

    const handleClose = () => {
        setIsModalOpen(false); // Fecha o modal
    };

    if (!isModalOpen) {
        return null; // Não renderiza nada se o modal estiver fechado
    }

    return (
        <>
            {currentModal === 1 && <FirstModal onNext={handleNext} onClose={handleClose}/>}
            {currentModal === 2 && <SecondModal onNext={handleNext} onPrevious={handlePrevious} onClose={handleClose}/>}
            {currentModal === 3 && <ThirdModal onNext={handleNext} onPrevious={handlePrevious} onClose={handleClose}/>}
            {currentModal === 4 && <FourthModal onPrevious={handlePrevious} onClose={handleClose} />}
        </>
    );
};

export default ModalContainer;