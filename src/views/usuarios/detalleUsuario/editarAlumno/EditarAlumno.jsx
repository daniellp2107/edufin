import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Col, Modal, Row } from "antd";
import dayjs from "dayjs";
import { userFormActualizarUsuario } from "../../../../hooks/userFormActualizarUsuario"
import { InputText } from "../../../../components/input/InputText";
import { ModalEditar } from "./modalEdiar/ModalEditar";


export const EditarAlumno = () => {
  const [openModal, setOpenModal] = useState(false);
  const {usuario} = useSelector(state => state.usuariosReducer);
  const formulario = userFormActualizarUsuario(usuario);
  const {form} = formulario;
  return (
    <>
      <Row gutter={[16, 8]}>
        <Col md={6} sm={24}>
          <InputText
            name={"nombre"}
            label={"Nombre"}
            value={form?.nombre}
            readOnly={true}
          />
        </Col>
        <Col md={6} sm={24}>
          <InputText
            name={"email"}
            label={"Correo"}
            value={form?.email}
            readOnly={true}
            
          />
        </Col>
        <Col md={6} sm={24}>
          <InputText
            label={"Vence"}
            name={"fechaLimite"}
            value={form.fechaLimite && dayjs(form?.fechaLimite).format('DD/MM/YYYY')}
            readOnly={true}
          />
          
        </Col>
        <Col md={6} sm={24}>
          <InputText
            label={"Último Login"}
            name={"fechaLimite"}
            value={form.ultimoLogin && dayjs(form?.ultimoLogin).format('DD/MM/YYYY')}
            readOnly={true}
          />
          
        </Col>
      </Row>
      <Row >
        <Col >
          <Button onClick={()=>setOpenModal(true)}>
            Editar Datos
          </Button>
        </Col>
        <Col >
          <Button >
            Eliminar Alumno
          </Button>
        </Col>
      </Row>
      <ModalEditar open={openModal} setOpen={setOpenModal} formulario={formulario}/>
    </>
  )
}
