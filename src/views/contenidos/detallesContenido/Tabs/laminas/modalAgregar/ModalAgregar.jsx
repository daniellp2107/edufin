import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "antd";
import { Formulario } from "./Formulario";
import { useFormAgregarLamina } from "../../../../../../hooks/useFormAgregarLamina";

export const ModalAgregar = ({ open, setOpen, laminaActual }) => {
  const { id } = useParams();
  const [messageError, setMessageError] = useState(false);
  const { form, setForm, formValidation, isFormValid, onChangeVal, onChangeFormData, handleSubmit, handleReset } = useFormAgregarLamina();

  useEffect(() => {
    setForm({ ...form, posicion: laminaActual, temaID: id });
  }, [laminaActual]);

  const handleCancel = () => {

    setOpen(false);
  };


  const handleOk = () => {
    console.log(form)
    if (!isFormValid()) {
      console.log(formValidation);
      setMessageError(true);
      return;
    }

    handleSubmit()
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
      />
    </Modal>
  );
};
