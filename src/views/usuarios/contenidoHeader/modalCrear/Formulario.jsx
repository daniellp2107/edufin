import { Button, Checkbox, Col, Row } from "antd";
import { InputText } from "../../../../components/input/InputText";
import { InputDatePicker } from "../../../../components/input/InputDatePicker";
import { generatePassword } from "../../../../utils/generatePassword";
import InputPassword from "../../../../components/input/InputPassword";

export const Formulario = ({
  confirmPass,
  confirmRol,
  form,
  formValidation,
  onClickGenPass,
  onChangeDate,
  onChangeText,
  onChangeVal,
  messageError,
}) => {

  return (
    <Row gutter={[16, 8]}>
      <Col md={12} sm={24}>
        <InputText
          name={"nombre"}
          label={"Nombre"}
          value={form.nombre}
          onChange={onChangeText}
          err={formValidation?.nombreValid && messageError}
        />
        {messageError && <p>{formValidation.nombreValid}</p>}
      </Col>
      <Col md={12} sm={24}>
        <InputText
          name={"email"}
          label={"Correo"}
          value={form.email}
          onChange={(value) => onChangeText(value)}
          err={formValidation?.emailValid && messageError}
        />
        {messageError && <p>{formValidation.emailValid}</p>}
      </Col>
      <Col md={12} sm={24}>
        <InputPassword
          name={"password"}
          label={"Contraseña"}
          value={form.password}
          onChange={(value) => onChangeText(value)}
          err={formValidation?.passwordValid && messageError}
        />
        {messageError && <span>{formValidation.passwordValid}</span>}

      </Col>
      <Col md={12} sm={24}>
        <InputPassword
          name={"confirmPassword"}
          label={"Confirmar Contraseña"}
          onChange={(value) => onChangeText(value)}
          value={form.confirmPassword}
          err={formValidation?.confirmPasswordValid && messageError}
        />
        {messageError && <span>{formValidation.confirmPasswordValid}</span>}
        {confirmPass && <span >{confirmPass}</span>}
      </Col>
      <Col md={12} sm={24}>
        <InputDatePicker
          label={"Inicio de labores"}
          name={"fechaLimite"}
          onChange={(value, value2) => {
            let target = { name: "fechaLimite", value: value2 };
            onChangeDate(target);
          }}
          err={formValidation?.fechaLimiteValid && messageError}
        />
        {messageError && <p>{formValidation.fechaLimiteValid}</p>}
        
      </Col>
      <Col>
        <Button style={{ marginTop: 22 }} onClick={() => onClickGenPass()}>
          generar password
        </Button>
      </Col>
      <Col >
        <Checkbox
          name="esAdmin"
          checked={form.esAdmin}
          label='Admin'
          onChange={(e) => {
            const target = { name: 'esAdmin', value: e.target.checked }
            onChangeVal(target);
          }}
        >
          Admin
        </Checkbox>
        {confirmRol && <p>{confirmRol}</p>}
      </Col >
      <Col >
        <Checkbox
          name="esAlumno"
          checked={form.esAlumno}
          label='Alumno'
          onChange={(e) => {
            const target = { name: 'esAlumno', value: e.target.checked }
            onChangeVal(target);
          }}
        >
          Alumno
        </Checkbox>
      </Col>
    </Row>
  );
};
