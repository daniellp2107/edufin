import { Button, Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { InputText } from "../../../components/input/InputText";
import { useFormActualizarTema } from "../../../hooks/useFormActualizarTema";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { InputNum } from "../../../components/input/InputNum";
import { startEliminarTema } from "../../../store/slices/contenidos/thunks";

export const ActualizarDatos = () => {
  const dispatch = useDispatch();
  const { tema } = useSelector((state) => state.contenidosReducer);
  const [messageError, setMessageError] = useState(false);
  const { id, nombre, tiempoMaxMinutos } = tema;
  const {
    form,
    formValidation,
    handleSubmit,
    handleReset,
    isFormValid,
    onChangeText,
    onChangeVal,
  } = useFormActualizarTema({ id, nombre, tiempoMaxMinutos });

  const handleActualizarTema = () => {
    if (!isFormValid()) {
      setMessageError(true);
      return;
    }
    setMessageError(false);
    handleSubmit();
  };

  const handleEliminarTema = () => {
    console.log(id);
    dispatch(startEliminarTema(id));
  };

  return (
    <Row gutter={[16, 8]}>
      <Col  md={8} sm={24}>
        <InputText
          name={"nombre"}
          label={"Nombre"}
          value={form.nombre}
          onChange={onChangeText}
          err={formValidation?.nombre && messageError}
        />
        {messageError && (
          <span style={{ fontSize: 12 }}> {formValidation?.nombreValid} </span>
        )}
      </Col>
      <Col  md={4} sm={24}>
        <InputNum
          name={"tiempoMaxMinutos"}
          label={"Tiempo Màximo Examen"}
          value={form.tiempoMaxMinutos}
          onChange={(value) => {
            let target = { name: "tiempoMaxMinutos", value: value };
            onChangeVal(target);
          }}
          err={formValidation?.tiempoMaxMinutos && messageError}
        />
        {messageError && (
          <span style={{ fontSize: 12 }}>
            {" "}
            {formValidation?.tiempoMaxMinutosValid}{" "}
          </span>
        )}
      </Col>
      <Col>
        <Button style={{ marginTop: 19 }} onClick={handleActualizarTema}>
          Actualizar Tema
        </Button>
      </Col>
      <Col>
        <Button style={{ marginTop: 19 }} onClick={handleEliminarTema}>
          Eliminar Tema
        </Button>
      </Col>
    </Row>
  );
};
