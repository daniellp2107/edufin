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
      console.log(formValidation);
      return;
    };

    handleSubmit();
    setMessageError(false);
    setOpen(false);
  };

  const handleCancel = () => {
    console.log("cerrar editar pregunta");
    handleReset();
    setMessageError(false);
    setOpen(false);
  };

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
      Modal
    </Modal>
  );
};
