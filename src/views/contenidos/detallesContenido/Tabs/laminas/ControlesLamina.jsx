import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Col, Popconfirm, Row, message } from "antd";
import { ModalAgregar } from "./modalAgregar/ModalAgregar";
import { ModalEditar } from "./modalEditar/ModalEditar";


export const ControlesLamina = () => {
  const [openAgregar, setOpenAgregar] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const { laminas, laminaActual, lamina } = useSelector(state => state.contenidosReducer);

  const handleAgregar = () => {
    setOpenAgregar(true);
  };

  const handleEdit = () => {
    setOpenEditar(true);
  };

  const handleEliminarConfirmar = (e) => {
    message.success('Pendiente por borrar');
  };

  const handleEliminarCancelar = (e) => {
    message.error('Cancelado');
  };

  return (
    <>
      <Row gutter={10} justify="center" style={{ marginBottom: 10 }}>
        <Col>
          <Button onClick={handleAgregar} type="primary">
            Agregar Lámina
          </Button>
        </Col>
        {laminas?.length > 0 && (
          <Col>
            <Button onClick={handleEdit} type="primary">
              Editar Lámina ({laminaActual})
            </Button>
          </Col>
        )}
        {laminas?.length > 0 && (
          <Popconfirm
            title="Eliminar lámina actual"
            description="¿Estás seguro que quieres eliminar esta lámina?"
            onConfirm={handleEliminarConfirmar}
            onCancel={handleEliminarCancelar}
            okText="Eliminar"
            cancelText="No"
          >
            <Button danger>Eliminar Lámina {`(${laminaActual})`}</Button>
          </Popconfirm>
        )}
      </Row>
      {openAgregar && <ModalAgregar open={openAgregar} setOpen={setOpenAgregar} laminaActual={laminaActual} />}
      {openEditar && <ModalEditar open={openEditar} setOpen={setOpenEditar} laminaActual={laminaActual} lamina={lamina} laminas = {laminas}/>}
    </>
  )
}
