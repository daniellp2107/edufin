import { Button, Col, Row } from "antd";
import dayjs from "dayjs";
import { InputText } from "../../../../components/input/InputText";
import { InputDatePicker } from "../../../../components/input/InputDatePicker";
import { generatePassword } from "../../../../utils/generatePassword";
import { useState } from "react";

export const Formulario = ({
  form,
  onChangeText,
  onChangeVal,
  onChangeDate,
  formValidation,
  messageError,
}) => {
  const [genPass, setGenPass] = useState('');
  const crearPassword =()=>{
    const pass = generatePassword();
  }
  return (
    <Row gutter={[16, 8]}>
      <Col span={20} md={24}>
        <InputText
          name={"nombre"}
          label={"Nombre"}
          value={form.nombre}
          onChange={onChangeText}
        />
      </Col>
      <Col span={20} md={24}>
        <InputText
          name={"email"}
          label={"Correo"}
          onChange={(value) => console.log(value)}
        />
      </Col>
      <Col span={20} md={24}>
        <InputText
          name={"password"}
          label={"Contraseña"}
          onChange={(value) => console.log(value)}
        />
      </Col>
      <Col span={20} md={24}>
        <InputText
          name={"confirmPassword"}
          label={"Confirmar Contraseña"}
          onChange={(value) => console.log(value)}
        />
      </Col>
      <Col span={20} md={24}>
        <InputDatePicker
          label={"Inicio de labores"}
          name={"fechaInicioLaboral"}
          onChange={(value, value2) => {
            let target = { name: "fechaInicioLaboral", value: value2 };
            onChangeDate(target);
          }}
          value={dayjs(form.fechaInicioLaboral)}
          err={formValidation?.fechaInicioLaboralValid && messageError}
        />
      </Col>
      <Col>
        <Button style={{ marginTop: 22 }} onClick={generatePassword}>
          generar password
        </Button>
      </Col>
    </Row>
  );
};
