import { Col, Row } from "antd";
import {InputText} from "../../../components/input/InputText";
import {InputNum} from "../../../components/input/InputNum";

export const Formulario = ({form, onChangeText, onChangeVal, formValidation, messageError}) => {
  return (
    <Row gutter={[16, 8]}>
      <Col span={20} md={24}>
        <InputText
          name={"nombre"}
          label={"Nombre"}
          value={form.nombre}
          onChange={onChangeText}
          err={formValidation.nombre && messageError}
        />
        {messageError && (
          <span style={{ fontSize: 12 }}> {formValidation.nombreValid} </span>
        )}
      </Col>
      <Col span={20} md={24}>
        <InputNum
          name={"tiempoMaxMinutos"}
          label={"Tiempo Máximo Examen"}
          onChange={(value) => {
            let target = { name: "tiempoMaxMinutos", value: value };
            onChangeVal(target);
          }}
          err={formValidation.tiempoMaxMinutosValid && messageError}
        />
        {messageError && (
          <span style={{ fontSize: 12 }}> {formValidation.tiempoMaxMinutosValid} </span>
        )}
      </Col>
    </Row>
  );
};
