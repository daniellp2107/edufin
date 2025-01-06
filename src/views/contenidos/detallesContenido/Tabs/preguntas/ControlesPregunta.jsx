import React, { useState } from 'react';
import { Button } from 'antd'
import { ModalAgregar } from './modalAgregar/ModalAgregar';

export const ControlesPregunta = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={()=>setOpen(!open)}>
        Agregar Pregunta
      </Button>
      <ModalAgregar open={open} setOpen={setOpen}/>
    </>
  )
}
