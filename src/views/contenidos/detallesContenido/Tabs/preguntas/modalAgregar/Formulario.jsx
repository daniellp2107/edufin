import { Checkbox, Col, Row } from "antd";
import { InputText } from "../../../../../../components/input/InputText";
import { colores } from "../../../../../../const/colores";

export const Formulario = ({
  form,
  formValidation,
  onChangeCheck,
  onChangeNombre,
  onChangeRespuesta,
  messageError
}) => {
  return (
    <>
      <Row>
        <Col>
          <InputText
            name="nombre"
            label="Pregunta"
            onChange={onChangeNombre}
            value={form.nombre}
            err={formValidation?.nombreValid && messageError}
          />
          {messageError && (
            <p style={{ fontSize: 12, color:colores.error }}>{formValidation?.nombreValid}</p>
          )}
        </Col>
      </Row>
      {form.respuestas.map((r, i) => {
        const label = `Respuesta ${i + 1}`;
        return (
          <Row key={i}>
            <Col span={16}>
              <InputText
                label={label}
                name="nombre"
                value={r.nombre}
                onChange={(e) => onChangeRespuesta(e, i)}
              />
            </Col>
            <Col style={{ marginLeft: 15, marginTop: 26 }}>
              <Checkbox
                checked={r.esCorrecta}
                onChange={(value) => {
                  let target = {
                    name: "esCorrecta",
                    value: value.target.checked,
                  };
                  onChangeCheck(target, i);
                }}
              >
                Es correcta {i + 1}
              </Checkbox>
            </Col>
          </Row>
        );
      })}
      {messageError && (<p style={{ fontSize: 12, color:colores.error }}>{formValidation?.respuestasValid}</p>)}
    </>
  );
};
