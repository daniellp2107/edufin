import React from 'react'
import { ModalAgregar } from './modalAgregar/ModalAgregar'
import { ListaPreguntas } from './ListaPreguntas'
import { ControlesPregunta } from './ControlesPregunta'

export const Preguntas = () => {
  return (
    <>
      <ControlesPregunta />
      <ListaPreguntas />
    </>
  )
}
