import { Modal } from 'antd'
import React, { useState } from 'react'
import { Formulario } from './Formulario';
import { useFormAgregarPregunta } from '../../../../../../hooks/useFormAgregarPregunta';
import { useSelector } from 'react-redux';

export const ModalAgregar = ({open, setOpen}) => {
  const {tema} = useSelector(state => state.contenidosReducer);
  const {form, formValidation, handleReset, handleSubmit, isFormValid,onChangeCheck, onChangeNombre, onChangeRespuesta} = useFormAgregarPregunta(tema);
  const [messageError, setMessageError] = useState(false);
  const handleOk =()=>{
    if (!isFormValid()) {
      setMessageError(true);
      return;
    };
    setMessageError(false);
    handleSubmit();
    handleReset();
    setOpen(false);
  };

  const handleCancel =()=>{
    console.log('cancel');
    setOpen(false);
  };

  return (
    <Modal 
      title={'Agregar Pregunta'}
      open={open}
      onCancel={()=>handleCancel()}
      onOk={handleOk}
    >
      <Formulario 
        form={form}
        formValidation={formValidation}
        onChangeCheck={onChangeCheck}
        onChangeNombre={onChangeNombre}
        onChangeRespuesta={onChangeRespuesta}
        messageError={messageError}
      />
    </Modal>
  )
}
