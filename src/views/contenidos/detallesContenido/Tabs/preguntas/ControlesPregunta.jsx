import React, { useState } from 'react';
import { Button } from 'antd'
import { ModalAgregar } from './modalAgregar/ModalAgregar';

export const ControlesPregunta = () => {
  const [open, setOpen] = useState(false);

  const handleEliminar =()=>{
    console.log('elimiando pregunta');
  };

  return (
    <>
      <Button onClick={()=>setOpen(!open)}>
        Agregar Pregunta
      </Button>
      <ModalAgregar open={open} setOpen={setOpen}/>
    </>
  )
}
