import { Button } from 'antd'
import React, { useState } from 'react'
import { ModalEditar } from './modalEditar/ModalEditar';

export const Controles = ({open, setOpen, act }) => {

  const onClickEditar =()=>{
    setOpen(!open);
    act();
  };

  return (
    <>
      <Button onClick={()=>onClickEditar()}>
        Editar
      </Button>
      <Button onClick={()=> console.log('eliminar pregunta')}>
        Eliminar
      </Button>
    </>
  )
}
