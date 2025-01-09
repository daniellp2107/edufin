import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Col, Row } from 'antd'
import { ModalAgregar } from './modalAgregar/ModalAgregar';
import { InputText } from '../../../../../components/input/InputText';
import { startBuscarPregunta } from '../../../../../store/slices/contenidos/thunks';

export const ControlesPregunta = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleChange =(e)=>{
    dispatch(startBuscarPregunta(e.target.value));
  };

  return (
    <Row gutter={[16,6]}>
      <Col xs={24} md={16} style={{marginTop:6}}>
        <InputText 
          name={'filtrat'}
          onChange={handleChange}
          placeholder={'Filtrar ...'}
        />
      
      </Col>
      <Col xs={24} md={4}>
        <Button 
          type='primary' 
          onClick={()=>setOpen(!open)}
        >
          Agregar Pregunta
        </Button>
        <ModalAgregar open={open} setOpen={setOpen}/>
      </Col>
    </Row>
  )
}
