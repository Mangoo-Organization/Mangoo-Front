import React, { useState } from 'react';
import './carouselteacher.css';
import Image from 'next/image';
import left from '../../../../public/icones/left_arrow.svg';
import right from '../../../../public/icones/right_arrow.svg';

// Componente funcional Carousel
const CarouselTeacher: React.FC = () => {
  // Lista de URLs das imagens do carrossel
  const images = [
    '/icones/carousel_teacher1.svg',
    '/icones/carousel_teacher2.svg',
    '/icones/carousel_teacher3.svg',
  ];

  // Estado para o índice da imagem atual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para ir para a imagem anterior
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Função para ir para a próxima imagem
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Função para alterar a imagem atual com base na mudança dos radio buttons
  const handleRadioChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      {/* Botão de navegação para a imagem anterior */}

      <div className='arrow_carousel_left'>
      <Image
            src= {left}
            alt='left arrow'
            onClick={goToPrevious}
      />
      </div>

      <div className="carousel-images">
        {/* Mapeia e exibe as imagens do carrossel */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      
      <div className='arrow_carousel_right'>
      <Image
            src= {right}
            alt='right arrow'
            onClick={goToNext}
      />
      </div>

      <div className="carousel-controls">
        {/* Radio buttons para navegação entre as imagens */}
        {images.map((_, index) => (
          <input
            key={index}
            type="radio"
            name="carousel"
            checked={index === currentIndex}
            onChange={() => handleRadioChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselTeacher;