import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";
import { Formulario } from "./Formulario";
import { useEffect, useState } from "react";
import { startAgregarLamina, startPostAgregarLamina } from "../../../../../../store/slices/contenidos/thunks";

export const ModalAgregar = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const [messageError, setMessageError] = useState(false);
  const { laminaActual, agregarLamina, tema } = useSelector((state) => state.contenidosReducer);


  const [form, setForm] = useState({
    file:null,
    formData:null,
    posicion:laminaActual,
    temaID:tema.id,
  });

  useEffect(() => {
    
  }, [laminaActual])
  

  const onChangeVal = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const handleCancel = () => {

    setOpen(false);
  };

  const handleOk = () => {
    console.log(agregarLamina);
    const {formData} = agregarLamina;
    dispatch(startPostAgregarLamina(formData));
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
        messageError={messageError}
        laminaActual={laminaActual}
        tema={tema}
      />
    </Modal>
  );
};
