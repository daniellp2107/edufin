import { useSelector } from "react-redux";
import { Col, Progress, Row } from "antd";

export const NumAccesos = () => {
  const {alumnosActivos, accesosMes} = useSelector(state => state.dashboardReducer);

  return (
    <Row justify={'space-evenly'}>
      <Col sm={24} lg={6}>
        <div className="circle-name">
          Alumnos Activos
          <Progress type="circle" percent={100} format={() => alumnosActivos} />
        </div>
      </Col>
      <Col sm={24} lg={6}>
        <div className="circle-name">
          Accesos este mes
          <Progress type="circle" percent={100} format={() => accesosMes} />
        </div>
      </Col> 
    </Row>
  );
};