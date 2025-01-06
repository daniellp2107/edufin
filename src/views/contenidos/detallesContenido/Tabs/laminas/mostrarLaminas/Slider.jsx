import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { URL_BASE } from '../../../../../../const/url';

export const Slider = () => {
  const {laminas} = useSelector(state => state.contenidosReducer);
  const images = laminas?.map(i=>{
    return `${URL_BASE}/api/laminas/getImage/${i.temaID}/Diapositiva${i.posicion}.jpg`
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleSlideChange = (event) => {
    const newIndex = parseInt(event.target.value, 10);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <div className="image-container">
        <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} />
      </div>
      
      {/* Botones Anterior y Siguiente */}
      <div className="buttons">
        <button onClick={goToPrevious}>Anterior</button>
        <span>{currentIndex + 1} / {images.length}</span>
        <button onClick={goToNext}>Siguiente</button>
      </div>
    </div>
  );
};
