import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";
import { Formulario } from "./Formulario";
import { useEffect, useState } from "react";
import { startAgregarLamina, startPostAgregarLamina } from "../../../../../../store/slices/contenidos/thunks";

export const ModalAgregar = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const [messageError, setMessageError] = useState(false);
  const { tema, lamina } = useSelector((state) => state.contenidosReducer);


  const [form, setForm] = useState({
    file:null,
    formData:null,
    posicion:lamina.posicion,
    temaID:tema.id,
  });  

  useEffect(() => {
    setForm(form);
  }, [form])
  

  const onChangeVal = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const onChangeFormData = (file) => {
    console.log(pos, file);
    setForm({ ...form, ['file']: file} );
  };

  const handleCancel = () => {

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
        messageError={messageError}
        onChangeFormData ={onChangeFormData}
        tema={tema}
      />
    </Modal>
  );
};
