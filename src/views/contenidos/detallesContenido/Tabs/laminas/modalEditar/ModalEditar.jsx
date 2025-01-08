import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "antd";
import { Formulario } from "./Formulario";
import { useFormActualizarLamina  } from "../../../../../../hooks/useFormActualizarLamina";


export const ModalEditar = ({open, setOpen, laminaActual}) => {
  const [messageError, setMessageError] = useState(false);
  const {id} = useParams();
  const {form, setForm, onChangeVal, onChangeFormData, handleSubmit, handleReset} = useFormActualizarLamina(laminaActual, id);

  const handleCancel =()=>{

    setOpen(false);
  };

  const handleOk = () => {
    console.log(form);
    // dispatch(startPostAgregarLamina(formData));
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
        setForm={setForm}
        onChangeVal={onChangeVal}
        onChangeFormData ={onChangeFormData}
        messageError={messageError}
      />
    </Modal>
  )
}
