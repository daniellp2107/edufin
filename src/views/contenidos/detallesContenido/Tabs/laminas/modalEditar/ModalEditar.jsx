import { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "antd";
import { Formulario } from "./Formulario";
import { useFormAgregarLamina } from "../../../../../../hooks/useFormAgregarLamina";


export const ModalEditar = ({open, setOpen}) => {
  const [messageError, setMessageError] = useState(false);
  const {laminaActual} = useSelector(state => state.contenidosReducer);
  const {form, formValidation,onChangeVal, handleSubmit, handleReset, isFormValid} = useFormAgregarLamina(laminaActual);
  const handleCancel =()=>{
    handleReset();
    setMessageError(false);
    setOpen(false);
  };

  const handleOk =()=>{
    if (!isFormValid()) {
      setMessageError(true);
      console.log(formValidation);
      return;
    }
    handleSubmit();
    handleReset();
    setOpen(false);
  };
  
  return (
    <Modal 
      open={open}
      onCancel={handleCancel}
      onOk={handleOk}
      title={'Agregar lamina'}
      okText={'Guardar'}
      cancelText={'Cerrar'}
    >
      <Formulario 
        form={form}
        onChangeVal={onChangeVal}
        formValidations={formValidation}
        messageError={messageError}
      />
    </Modal>
  )
}
