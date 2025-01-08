import React from 'react'
import CardPage from '../../../layout/CardPage'
import { ActualizarDatos } from './ActualizarDatos'
import { SeccionTabs } from './SeccionTabs'

export const DetallesContenido = () => {
  return (
    <CardPage titulo={'Detalle del Contenido'}>
      <ActualizarDatos />
      <SeccionTabs />
    </CardPage>
  )
}
