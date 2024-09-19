import React, { useState } from 'react';
import './carouselteacher.css';

// Componente funcional Carousel
const CarouselTeacher: React.FC = () => {
  // Lista de URLs das imagens do carrossel
  const images = [
    'https://via.placeholder.com/600x400?text=Image+1',
    'https://via.placeholder.com/600x400?text=Image+2',
    'https://via.placeholder.com/600x400?text=Image+3',
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
      <button className="carousel-button prev" onClick={goToPrevious}>◀</button>
      
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

      {/* Botão de navegação para a próxima imagem */}
      <button className="carousel-button next" onClick={goToNext}>▶</button>
      
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