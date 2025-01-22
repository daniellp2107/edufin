import { Button, message, Popconfirm } from "antd";

export const Controles = ({ preguntaActual, eliminarActual }) => {
  const onClickEditar = () => {
    preguntaActual();
  };

  const confirm = (e) => {
    eliminarActual();
    message.success("Pregunta eliminada");
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
    </>
  );
};
