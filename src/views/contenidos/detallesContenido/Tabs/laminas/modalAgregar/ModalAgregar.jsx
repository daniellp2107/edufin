import { useSelector } from "react-redux";
import { Modal } from "antd";
import { Formulario } from "./Formulario";
import { useFormAgregarLamina } from "../../../../../../hooks/useFormAgregarLamina";
import { useState } from "react";

export const ModalAgregar = ({ open, setOpen }) => {
  const [messageError, setMessageError] = useState(false);
  const { laminaActual, agregarLamina } = useSelector((state) => state.contenidosReducer);
  const {form, formValidation, onChangeId, onChangeVal, handleSubmit, handleReset, isFormValid} = useFormAgregarLamina(agregarLamina);
  const handleCancel = () => {
    handleReset();
    setMessageError(false);
    setOpen(false);
  };

  const handleOk = () => {
    if (!isFormValid()) {
      setMessageError(true);
      console.log(formValidation);
      return;
    }
    handleSubmit();
    handleReset();
    setMessageError(false);
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
        onChangeId={onChangeId}
        onChangeVal={onChangeVal}
        formValidations={formValidation}
        messageError={messageError}
      />
    </Modal>
  );
};
