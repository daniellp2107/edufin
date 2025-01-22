import dayjs from 'dayjs';
import { Button, Checkbox, Col, Row } from 'antd';
import { InputText } from '../../../../../components/input/InputText';
import InputPassword from '../../../../../components/input/InputPassword';
import { InputDatePicker } from '../../../../../components/input/InputDatePicker';
import { colores } from '../../../../../const/colores';

export const Formulario = ({form, formValidation,onClickGenPass, onChangeDate, onChangeText, onChangeVal, messageError, confirmPass, confirmRol}) => {

  return (
    <Row gutter={[10, 10]}>
      <Col md={12} sm={24}>
        <InputText
          name={"nombre"}
          label={"Nombre"}
          value={form.nombre}
          onChange={onChangeText}
          err={formValidation?.nombreValid && messageError}
        />
        {messageError && <span style={{color:colores.rojo}}>{formValidation?.nombreValid}</span>}
      </Col>
      <Col md={12} sm={24}>
        <InputText
          name={"email"}
          label={"Correo"}
          value={form.email}
          onChange={(value) => onChangeText(value)}
          err={formValidation?.emailValid && messageError}
        />
        {messageError && <span style={{color:colores.rojo}}>{formValidation?.emailValid}</span>}
      </Col>
      <Col md={12} sm={24}>
        <InputPassword
          name={"password"}
          label={"Contraseña"}
          value={form?.password}
          onChange={(value) => onChangeText(value)}
          err={formValidation?.passwordValid && messageError}
        />
        {messageError && <span style={{color:colores.rojo}}>{formValidation?.passwordValid}</span>}

      </Col>
      <Col md={12} sm={24}>
        <InputPassword
          name={"confirmPassword"}
          label={"Confirmar Contraseña"}
          onChange={(value) => onChangeText(value)}
          value={form?.confirmPassword}
          err={formValidation?.confirmPasswordValid && messageError}
        />
        {messageError && <span style={{color:colores.rojo}}>{formValidation?.confirmPasswordValid}</span>}
        {confirmPass && <span style={{color:colores.rojo}}>{confirmPass}</span>}
      </Col>
      <Col md={12} sm={24}>
        <InputDatePicker
          label={"Fecha Limite"}
          name={"fechaLimite"}
          value={form.fechaLimite && dayjs(form?.fechaLimite)}
          onChange={(value, value2) => {
            let target = { name: "fechaLimite", value: value2 };
            onChangeDate(target);
          }}
          err={formValidation?.fechaLimiteValid && messageError}
        />
        {messageError && <span style={{color:colores.rojo}}>{formValidation?.fechaLimiteValid}</span>}
        
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
        >Admin
        </Checkbox>
        {confirmRol && <p style={{color:colores.rojo}}>{confirmRol}</p>}
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
        >Alumno
        </Checkbox>
      </Col>
    </Row>
  )
}
