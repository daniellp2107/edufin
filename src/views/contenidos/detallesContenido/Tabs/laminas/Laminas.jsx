import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ControlesLamina } from './ControlesLamina';
import { MostrarLaminas } from './mostrarLaminas/MostrarLaminas';
import { startCargarLaminas, startSetLaminaActual } from '../../../../../store/slices/contenidos/thunks';

export const Laminas = () => {
  const dispatch = useDispatch();
  const {laminas, tema} = useSelector(state => state.contenidosReducer);
  useEffect(() => {
    dispatch(startCargarLaminas(tema.id));   
  }, [tema]);
  

  return (
    <>
      <ControlesLamina />
      <MostrarLaminas />
    </>
  )
}
