import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, message, Popconfirm, Row } from "antd";
import { InputText } from "../../../components/input/InputText";
import { useFormActualizarTema } from "../../../hooks/useFormActualizarTema";
import { InputNum } from "../../../components/input/InputNum";
import { startEliminarTema } from "../../../store/slices/contenidos/thunks";
import { colores } from "../../../const/colores";

export const ActualizarDatos = () => {
  const dispatch = useDispatch();
  const { tema } = useSelector((state) => state.contenidosReducer);
  const [messageError, setMessageError] = useState(false);
  const { id, nombre, tiempoMaxMinutos, preguntasFinal } = tema;
  const {
    form,
    formValidation,
    handleSubmit,
    handleReset,
    isFormValid,
    onChangeText,
    onChangeVal,
  } = useFormActualizarTema({ id, nombre, tiempoMaxMinutos, preguntasFinal });

  const handleActualizarTema = () => {
    if (!isFormValid()) {
      setMessageError(true);
      return;
    }
    setMessageError(false);
    handleSubmit();
  };

  const handleEliminarTema = () => {
    dispatch(startEliminarTema(id));
  };

  const handleEliminarCancelar = (e) => {
    message.error("Cancelado");
  };

  return (
    <>
      <Row gutter={[16, 8]}>
        <Col md={8} xs={24}>
          <InputText
            name={"nombre"}
            label={"Nombre"}
            value={form.nombre}
            onChange={onChangeText}
            err={formValidation?.nombre && messageError}
          />
          {messageError && (
            <span style={{ fontSize: 12, color: colores.error }}>
              {" "}
              {formValidation?.nombreValid}{" "}
            </span>
          )}
        </Col>
        <Col md={4} xs={24}>
          <InputNum
            name={"tiempoMaxMinutos"}
            label={"T. Máximo Examen"}
            value={form.tiempoMaxMinutos}
            onChange={(value) => {
              let target = { name: "tiempoMaxMinutos", value: value };
              onChangeVal(target);
            }}
            err={formValidation?.tiempoMaxMinutos && messageError}
          />
          {messageError && (
            <span style={{ fontSize: 12, color: colores.error }}>
              {formValidation?.tiempoMaxMinutosValid}
            </span>
          )}
        </Col>
        <Col md={4} xs={24}>
          <InputNum
            name={"preguntasFinal"}
            label={"Preguntas"}
            value={form.preguntasFinal}
            onChange={(value) => {
              let target = { name: "preguntasFinal", value: value };
              onChangeVal(target);
            }}
            err={formValidation?.preguntasFinal && messageError}
          />
          {messageError && (
            <span style={{ fontSize: 12, color: colores.error }}>
              {" "}
              {formValidation?.preguntasFinalValid}{" "}
            </span>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            type="primary"
            style={{ marginTop: 19 }}
            onClick={handleActualizarTema}
          >
            Actualizar Tema
          </Button>
        </Col>
        <Col>
          <Popconfirm
            title="Eliminar lámina actual"
            description="¿Estás seguro que quieres eliminar esta lámina?"
            onConfirm={handleEliminarTema}
            onCancel={handleEliminarCancelar}
            okText="Eliminar"
            cancelText="No"
          >
            <Button danger style={{ marginTop: 19 }}>
              Eliminar Tema{" "}
            </Button>
          </Popconfirm>
        </Col>
      </Row>
    </>
  );
};
