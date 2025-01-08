import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "antd";
import { Formulario } from "./Formulario";
import { useFormActualizarLamina  } from "../../../../../../hooks/useFormActualizarLamina";

export const ModalEditar = ({open, setOpen, laminaActual}) => {
  const {id} = useParams();
  const [messageError, setMessageError] = useState(false);
  const { form, setForm, formValidation, isFormValid, onChangeVal, onChangeFormData, handleSubmit, handleReset } = useFormActualizarLamina();

  useEffect(() => {
    setForm({...form, posicion:laminaActual, temaID:id});
  }, [laminaActual]);

  const handleCancel = () => {

    setOpen(false);
  };

  const handleOk = () => {
    if (!isFormValid()) {
      setMessageError(true);
      return;
    }

    handleSubmit()
    setMessageError(false);
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      onOk={handleOk}
      title={"Editar lámina"}
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
  )
}
