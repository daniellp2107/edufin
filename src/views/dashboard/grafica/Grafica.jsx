import { Button, Col, Row } from "antd";
import dayjs from "dayjs";
import { useFormActualizarFecha } from "../../../hooks/useFormActualizarFecha";
import { InputDatePicker } from "../../../components/input/InputDatePicker";
import { MostrarGrafica } from "./MostrarGrafica";
import { useSelector } from "react-redux";

export const Grafica = () => {
  const { accesosPorDiaEnElMes } = useSelector((state) => state.dashboardReducer);
  const { form, setForm, handleSubmit, onChangeDate } = useFormActualizarFecha();
  return (
    <>
      <Row gutter={[16,8]} justify={'start'} style={{marginBottom:10, backgroundColor:'ButtonFace'}} align={'bottom '}>
        <Col sm={24} md={6}>
          <InputDatePicker
            label={"Elige un mes"}
            name={"fechaActual"}
            onChange={(value, value2) => {
              const [anio, mes] = value2.split("-");
              let target = {
                name: "fechaActual",
                value: dayjs(`${mes}/01/${anio}`),
              };
              onChangeDate(target);
            }}
            value={form.fechaActual}
            picker={"month"}
          />
        </Col>
        <Col >
          <Button 
            
            onClick={handleSubmit}
          >
            Actualizar
          </Button>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col sm={24} md={20}>
          <MostrarGrafica
            form={form}
            setForm={setForm}
            accesosPorDiaEnElMes={accesosPorDiaEnElMes}
          />
        </Col>
      </Row>
    </>
  );
};
