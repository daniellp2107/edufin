import { Button, message, Popconfirm } from "antd";
import { ModalEditar } from "./modalEditar/ModalEditar";

export const Controles = ({ preguntaActual, eliminarActual, open, setOpen, act }) => {
  const onClickEditar = () => {
    preguntaActual();
  };

  const confirm = (e) => {
    eliminarActual();
  };

  const cancel = (e) => {
    message.error("Cancelar");
  };

  return (
    <>
      <Button type="primary" onClick={() => onClickEditar()}>
        Editar
      </Button>
      <Popconfirm
        title="Eliminar pregunta"
        description="¿Estas seguro que quieres eliminar está pregunta?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Borrar"
        cancelText="Cancelar"
      >
        <Button danger>Eliminar</Button>
      </Popconfirm>
      <ModalEditar open={open} setOpen={setOpen} pregunta={act} />
    </>
  );
};
