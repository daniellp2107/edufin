import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ListaPreguntas } from './ListaPreguntas'
import { ControlesPregunta } from './ControlesPregunta'
import { startCargarPreguntas } from '../../../../../store/slices/contenidos/thunks'

export const Preguntas = () => {
  const dispatch = useDispatch()
  const {tema} = useSelector(state => state.contenidosReducer);
  useEffect(() => {

    dispatch(startCargarPreguntas(tema.id));
  }, []);
  
  return (
    <>
      <ControlesPregunta />
      <ListaPreguntas />
    </>
  )
}
