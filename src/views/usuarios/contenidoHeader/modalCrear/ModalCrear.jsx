import { useState } from "react";
import { Modal } from "antd";
import { Formulario } from "./Formulario";
import { useFormAgregarUsuario } from "../../../../hooks/useFormAgregarUsuario";

export const ModalCrear = ({open, setOpen}) => {
  const [messageError, setMessageError] = useState(false);
  const {form, formValidation,onChangeDate ,onChangeText, onChangeVal, handleReset, handleSubmit} = useFormAgregarUsuario();

  const handleClickOk =()=>{
    console.log('ok');
  };

  const handleClickCancel =()=>{
    
    setOpen(false);
  };

  return (
    <Modal 
      title="Agregar Nuevo Tema"
      centered
      open={open}
      onOk={handleClickOk}
      onCancel={handleClickCancel}
    >
      <Formulario 
        form = {form}
        formValidation = {formValidation}
        onChangeDate = {onChangeDate}
        onChangeText = {onChangeText}
        onChangeVal = {onChangeVal}
        handleReset = {handleReset}
        messageError = {messageError}
      />
    </Modal>
  )
};