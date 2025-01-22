import { useState } from "react";
import { Modal } from "antd";
import { Formulario } from "./Formulario";
import { useFormAgregarUsuario } from "../../../../hooks/useFormAgregarUsuario";

export const ModalCrear = ({open, setOpen}) => {
  const [messageError, setMessageError] = useState(false);
  const [confirmPass, setConfirmPass] = useState(null);
  const [confirmRol, setConfirmRol] = useState(null);
  const {form, formValidation, isFormValid,onClickGenPass, onChangeDate ,onChangeText,onChangeVal, handleReset, handleSubmit} = useFormAgregarUsuario();

  const handleClickOk =()=>{
    if (!isFormValid()) {
      setMessageError(true);
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
    handleSubmit();
  };

  const handleClickCancel =()=>{
    handleReset();
    setMessageError(false);
    setOpen(false);
  };

  return (
    <Modal 
      title="Agregar Usuario"
      centered
      open={open}
      onOk={handleClickOk}
      onCancel={handleClickCancel}
    >
      <Formulario 
        confirmPass = {confirmPass}
        confirmRol = {confirmRol}
        form = {form}
        formValidation = {formValidation}
        onClickGenPass = {onClickGenPass}
        onChangeDate = {onChangeDate}
        onChangeText = {onChangeText}
        onChangeVal = {onChangeVal}
        handleReset = {handleReset}
        messageError = {messageError}
      />
    </Modal>
  )
};