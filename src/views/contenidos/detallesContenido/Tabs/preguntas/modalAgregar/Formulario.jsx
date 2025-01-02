import { Checkbox, Col, Row } from "antd";
import { InputText } from "../../../../../../components/input/InputText";

export const Formulario = ({form, formValidation,onChangeCheck, onChangeNombre, onChangeRespuesta}) => {
  
  return (
    <>
      <Row>
        <Col>
          <InputText
            name="nombre"
            label="Pregunta"
            onChange={onChangeNombre}
            value={form.nombre}
            error={null}
          />
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
                  let target = { name: 'esCorrecta', value: value.target.checked }
                  onChangeCheck(target, i)
                }}
              >
                Es correcta {i + 1}
              </Checkbox>
            </Col>
          </Row>
        );
      })}
    </>
  );
};
