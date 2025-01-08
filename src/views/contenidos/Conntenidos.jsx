import React from 'react'
import CardPage from '../../layout/CardPage'
import {ListadoTemas} from './temas/ListadoTemas';
import { ContenidoHeader } from './contenidoHeader/ContenidoHeader';

export const Conntenidos = () => {  
  return (
    <>
      <CardPage titulo="Contenidos" >
        <ContenidoHeader />
        <ListadoTemas />
      </CardPage>
    </>
  )
}
