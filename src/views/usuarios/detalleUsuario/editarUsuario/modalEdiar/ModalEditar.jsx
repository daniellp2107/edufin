import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "antd";
import { Formulario } from "./Formulario";
import { checkForm, formValidationsActualizarUsuario, isFormValid } from "../../../../../utils/formValidations";
import { userFormActualizarUsuario } from "../../../../../hooks/userFormActualizarUsuario";

export const ModalEditar = ({ open, setOpen }) => {
  const {usuario} = useSelector(state => state.usuariosReducer);
  const [messageError, setMessageError] = useState(false);
  const [confirmPass, setConfirmPass] = useState(null);
  const [confirmRol, setConfirmRol] = useState(null);
  const [formValidation, setFormValidation] = useState();
  const {form, setForm,onClickGenPass, onChangeDate, onChangeText, onChangeVal, handleSubmit, handleReset} = userFormActualizarUsuario(usuario);

  useEffect(() => {
    setForm({...usuario, confirmPassword:"", password:""});
  }, [usuario]);
  

  const handleOk = () => {
    const validaciones = checkForm(form, formValidationsActualizarUsuario);
    const isValid = isFormValid(validaciones);
    if(!isValid){
      setFormValidation(validaciones);
      setMessageError(true);
      return;
    };
    if (form.password !== form.confirmPassword) {
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
    handleSubmit();
    setConfirmPass(null);
    setConfirmRol(null);
    setMessageError(false);
    setOpen(false);
  };

  const handleCancel = () => {
    setConfirmPass(null);
    setConfirmRol(null);
    setMessageError(false);
    setOpen(false);
  };

  return (
    <Modal 
      title = 'Actualizar Usuario'
      open={open} 
      onCancel={handleCancel} 
      onOk={handleOk}
    >
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
