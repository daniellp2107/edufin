import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ControlesLamina } from './ControlesLamina';
import { MostrarLaminas } from './mostrarLaminas/MostrarLaminas';
import { startCargarLaminas, startSetLaminaActual } from '../../../../../store/slices/contenidos/thunks';

export const Laminas = () => {
  const dispatch = useDispatch();
  const {laminas} = useSelector(state => state.contenidosReducer)
  useEffect(() => {
    if (laminas.length > 0) {
      dispatch(startSetLaminaActual(laminas[0]));
    };
  }, []);
  

  return (
    <>
      <ControlesLamina />
      <MostrarLaminas />
    </>
  )
}
