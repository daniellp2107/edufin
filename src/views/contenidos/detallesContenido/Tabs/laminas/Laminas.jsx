import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Row } from "antd";
import { ModalAgregar } from "./modalAgregar/ModalAgregar";
import { ModalEditar } from "./modalEditar/ModalEditar";


export const Laminas = () => {
  const [openAgregar, setOpenAgregar] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const {laminas,laminaActual} = useSelector(state => state.contenidosReducer);

  const handleAgregar = () => {
    console.log('agregar');
    setOpenAgregar(true);
  };

  const handleEdit = () => {
    console.log('editar');
    setOpenEditar(true);
  };

  const handleEliminar = async () => {

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
              Editar Lamina ({laminaActual})
            </Button>
          </Col>
        )}
        {laminas?.length > 0 && (
          <Col>
            <Button onClick={handleEliminar} type="danger">
              Eliminar Lamina ({laminaActual})
            </Button>
          </Col>
        )}
      </Row>
      <ModalAgregar open={openAgregar} setOpen={setOpenAgregar} />
      <ModalEditar open={openEditar} setOpen={setOpenEditar}/>
    </>
  )
}
