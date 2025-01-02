import { useState } from "react";
import { Modal } from "antd";
import { Formulario } from "./Formulario";
import { useFormNuevoTema } from "../../../hooks/useFormNuevoTema";

export const ModalCrear = ({open, setOpen}) => {
  const [messageError, setMessageError] = useState(false);
  const {form, formValidation, isFormValid, onChangeText, onChangeVal, handleReset, handleSubmit} = useFormNuevoTema();

  const handleClickOk =()=>{
    if (!isFormValid()) {
      setMessageError(true);
      return;
    };
    setMessageError(false);
    handleSubmit();
    setOpen(false);
  };

  const handleClickCancel =()=>{
    setMessageError(false);
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
        onChangeText={onChangeText}
        onChangeVal = {onChangeVal}
        handleReset = {handleReset}
        formValidation = {formValidation}
        messageError = {messageError}
      />
    </Modal>
  )
};