import { Modal } from "antd";
import React, { useState } from "react";
import { Formulario } from "./Formulario";
import { useFormActualizarPregunta } from "../../../../../../../hooks/useFormActualizarPregunta";
import { checkForm, isFormValid, formValidationsEditarPregunta } from "../../../../../../../utils/formValidations";


export const ModalEditar = ({ open, setOpen, pregunta }) => {
  // const {pregunta} = useSelector(state => state.contenidosReducer);
  const [messageError, setMessageError] = useState(false);
  const [formValidation, setFormValidation] = useState({});
  const {
    form,
    // formValidation,
    handleReset,
    handleSubmit,
    onChangeCheck,
    onChangeNombre,
    onChangeRespuesta,
  } = useFormActualizarPregunta(pregunta);

  const handleOk = () => {
    console.log("editar pregunta");
    const validaciones = checkForm(form, formValidationsEditarPregunta);
    const isValid = isFormValid(validaciones);

    if(!isValid){
      setFormValidation(validaciones);
      setMessageError(true);
      return; 
    };
    setMessageError(false);
    handleSubmit();
    setOpen(false);
  };

  const handleCancel = () => {
    console.log("cerrar editar pregunta");
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
        onChangeCheck={onChangeCheck}
        onChangeNombre={onChangeNombre}
        onChangeRespuesta={onChangeRespuesta}
        messageError={messageError}
      />
    </Modal>
  );
};
