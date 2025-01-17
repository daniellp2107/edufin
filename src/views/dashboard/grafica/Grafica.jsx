import { Button, Col, Row } from "antd";
import InputSelect from "../../../components/input/InputSelect";
import { useState } from "react";
import dayjs from "dayjs";
import { InputDatePicker } from "../../../components/input/InputDatePicker";
import { useDispatch } from "react-redux";
import { startCargaDashboard } from "../../../store/slices/dashboard/thunks";

const options = [
  { label: "Enero", value: 1 },
  { label: "Febrero", value: 2 },
  { label: "Marzo", value: 3 },
  { label: "Abril", value: 4 },
  { label: "Mayo", value: 5 },
  { label: "Junio", value: 6 },
  { label: "Julio", value: 7 },
  { label: "Agosto", value: 8 },
  { label: "Septiembre", value: 9 },
  { label: "Octubre", value: 10 },
  { label: "Noviembre", value: 11 },
  { label: "Diciembre", value: 12 },
];

export const Grafica = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    mes: dayjs().month() + 1,
    anio: dayjs().year(),
    fechaActual:dayjs().format('DD/MM/YYYY')
  });

  const onChangeDate = (e) => {
    setForm(e);
  };

  const handleSubmit =()=>{
    console.log(form);
    console.log('enviar datos');
    dispatch(startCargaDashboard(form));
  };

  return (
    <Row>
      <Col>
        <InputDatePicker
          label={"Elige un mes"}
          name={"mes"}
          onChange={(value, value2) => {
            const [anio,mes] = value2.split('-');
            let fecha = { mes: `${mes}`, anio: `${anio}` }
            onChangeDate(fecha);
          }}
          picker={'month'}
        />
      </Col>
      <Col>
        <Button onClick={handleSubmit} style={{marginTop:22}}>
          Actualizar
        </Button>
      </Col>
    </Row>
  );
};
