import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "antd";
import { Formulario } from "./Formulario";
import { useFormActualizarLamina } from "../../../../../../hooks/useFormActualizarLamina";

export const ModalEditar = ({ open, setOpen, laminaActual, laminas }) => {
  const { id } = useParams();
  const [messageError, setMessageError] = useState(false);
  const { form, setForm, formValidation, isFormValid, onChangeVal, onChangeFormData, handleSubmit, handleReset } = useFormActualizarLamina(id, laminaActual, laminas );

  const handleCancel = () => {
    
    setOpen(false);
  };


  const handleOk = () => {
    if (!isFormValid()) {
      setMessageError(true);
      return;
    };

    handleSubmit();
    setMessageError(false);
    handleReset();
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      onOk={handleOk}
      title={"Agregar lamina"}
      okText={"Guardar"}
      cancelText={"Cerrar"}
    >
      <Formulario
        form={form}
        formValidation={formValidation}
        setForm={setForm}
        onChangeVal={onChangeVal}
        onChangeFormData={onChangeFormData}
        messageError={messageError}
        laminaActual = {laminaActual}
      />
    </Modal>
  )
}
