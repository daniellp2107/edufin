import React, { useState } from 'react'
import { Button, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { colores } from '../../../../../../const/colores';
import { URL_BASE } from '../../../../../../const/url';
import { startSetLaminaActual } from '../../../../../../store/slices/contenidos/thunks';

export const MostrarLaminas = () => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);
  const [laminaActual, setLaminaActual] = useState(0)
  const { laminas } = useSelector(state => state.contenidosReducer);

  const images = laminas?.map(i => {
    return `${URL_BASE}/api/laminas/getImage/${i.temaID}/${i.url}`
  });

  const handleClick = (direccion) => {
    setLoad(false);
    let newLamina = laminaActual + direccion;
    if (newLamina === laminas.length) newLamina = 0;
    if (newLamina === -1) newLamina = laminas.length - 1;
    dispatch(startSetLaminaActual(laminas[newLamina]));
    setLaminaActual(newLamina);
  };

  if (laminas.length === 0) return <p>Sin laminas para mostrar</p>

  return (
    <div className="slider-container">
      {load || <div><Spin size="large" /></div>}
      <div className="image-container">
        <img
          src={images[laminaActual]}
          alt={`Imagen ${laminaActual + 1}`}
          onLoad={() => setLoad(true)}
        />
      </div>

      {/* Botones Anterior y Siguiente */}
      <div className="buttons">
        <button onClick={() => {
          handleClick(-1);
        }}>Anterior</button>
        <span>{laminaActual + 1} / {images.length}</span>
        <button onClick={() => {
          handleClick(1);
        }}>Siguiente</button>
      </div>
    </div>
  );
}
