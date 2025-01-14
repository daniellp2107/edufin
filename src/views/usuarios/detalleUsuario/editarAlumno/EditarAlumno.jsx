import { useState } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { Button, Col, message, Popconfirm, Row } from "antd";
import { InputText } from "../../../../components/input/InputText";
import { ModalEditar } from "./modalEdiar/ModalEditar";


export const EditarAlumno = () => {
  const [openModal, setOpenModal] = useState(false);
  const {usuario} = useSelector(state => state.usuariosReducer);

  const handleEliminarTema = () => {
    message.error('Pendiente por eliminar');
  };

  const handleEliminarCancelar = (e) => {
    message.error('Cancelado');
  };

  return (
    <>
      <Row gutter={[16, 8]}>
        <Col md={6} sm={24}>
          <InputText
            name={"nombre"}
            label={"Nombre"}
            value={usuario.nombre}
            readOnly={true}
          />
        </Col>
        <Col md={6} sm={24}>
          <InputText
            name={"email"}
            label={"Correo"}
            value={usuario.email}
            readOnly={true}
            
          />
        </Col>
        <Col md={6} sm={24}>
          <InputText
            label={"Vence"}
            name={"fechaLimite"}
            value={usuario.fechaLimite && dayjs(usuario.fechaLimite).format('DD/MM/YYYY')}
            readOnly={true}
          />
          
        </Col>
        <Col md={6} sm={24}>
          <InputText
            label={"Último Login"}
            name={"fechaLimite"}
            value={usuario.ultimoLogin && dayjs(usuario.ultimoLogin).format('DD/MM/YYYY')}
            readOnly={true}
          />
          
        </Col>
      </Row>
      <Row >
        <Col >
          <Button type="primary" onClick={()=>setOpenModal(true)}>
            Editar Datos
          </Button>
        </Col>
        <Col >
          <Popconfirm
            title="Eliminar actual"
            description="¿Estás seguro que quieres eliminar el alumno actual?"
            onConfirm={handleEliminarTema}
            onCancel={handleEliminarCancelar}
            okText="Eliminar"
            cancelText="No"
          >
            <Button danger>Eliminar Alumno </Button>
          </Popconfirm>
        </Col>
      </Row>
      <ModalEditar open={openModal} setOpen={setOpenModal} usuario={usuario}/>
    </>
  )
}
