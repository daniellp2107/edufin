import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { Formulario } from "./Formulario";
import { checkForm, formValidationsActualizarUsuario, isFormValid } from "../../../../../utils/formValidations";

export const ModalEditar = ({ open, setOpen, formulario }) => {
  const [messageError, setMessageError] = useState(false);
  const [confirmPass, setConfirmPass] = useState(null);
  const [confirmRol, setConfirmRol] = useState(null);
  const [formValidation, setFormValidation] = useState();
  
  const {
    form,
    onClickGenPass,
    onChangeDate,
    onChangeText,
    onChangeVal,
    handleSubmit,
    handleReset} = formulario;

    useEffect(() => {
      
    }, [form]);
    

  const handleOk = () => {
    const validaciones = checkForm(form, formValidationsActualizarUsuario);
    const isValid = isFormValid(validaciones);
    if(!isValid){
      setFormValidation(validaciones);
      setMessageError(true);
      console.log(formValidation);
      return;
    };
    if ((form.password !== form.confirmPassword)) {
      setMessageError(true);
      setConfirmPass('Las contraseñas no son iguales');
      return;
    };
    setConfirmPass(null);
    if (form.esAdmin === false && form.esAlumno === false) {
      setMessageError(true);
      setConfirmRol('Elige almenos un rol para el usuario');
      return;
    };
    setConfirmPass(null);
    setConfirmRol(null);
    setMessageError(false);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onCancel={handleCancel} onOk={handleOk}>
      <Formulario
        form={form}
        formValidation={formValidation}
        onClickGenPass={onClickGenPass}
        onChangeDate={onChangeDate}
        onChangeText={onChangeText}
        onChangeVal={onChangeVal}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        messageError ={messageError}
        confirmPass = {confirmPass}
        confirmRol = {confirmRol}
      />
    </Modal>
  );
};
