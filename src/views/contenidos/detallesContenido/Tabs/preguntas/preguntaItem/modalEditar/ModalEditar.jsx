import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Formulario } from "./Formulario";
import { useFormActualizarPregunta } from "../../../../../../../hooks/useFormActualizarPregunta";
import {
  checkForm,
  isFormValid,
  formValidationsEditarPregunta,
} from "../../../../../../../utils/formValidations";

export const ModalEditar = ({ open, setOpen, pregunta }) => {
  const [messageError, setMessageError] = useState(false);
  const [formValidation, setFormValidation] = useState({});
  const { form, handleSubmit, handleReset , onChangeCheck, onChangeNombre, onChangeRespuesta } = useFormActualizarPregunta(pregunta);

  const handleOk = () => {
    const validaciones = checkForm(form, formValidationsEditarPregunta);
    const isValid = isFormValid(validaciones);
    if(!isValid){
      setFormValidation(validaciones);
      setMessageError(true);
      return;
    };

    handleSubmit();
    setMessageError(false);
    setOpen(false);
  };

  const handleCancel = () => {
    handleReset();
    setMessageError(false);
    setOpen(false);
  };
console.log(form);
  return (
    <Modal
      title={"Editar Pregunta"}
      open={open}
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <Formulario
        form={form}
        formValidation={formValidation}
        messageError = {messageError}
        onChangeCheck={onChangeCheck}
        onChangeNombre={onChangeNombre}
        onChangeRespuesta={onChangeRespuesta}
      />
      
    </Modal>
  );
};
