import { Col, Row } from "antd";

import BotonDiv from "../components/boton/BotonDiv";

export default function CardPage({
  children,
  titulo,
  tituloBoton1,
  accionBoton1,
  tituloBoton2,
  accionBoton2,
}) {
  return (
    <div style={{ marginBottom: 15 }}>
      <Row>
        <Col span={18} className="card__titulo_container">
          <div className="card__titulo">{titulo}</div>
        </Col>
        <Col span={3} className="card__accion">
          {tituloBoton2 && (
            <BotonDiv onClick={accionBoton2} tituloBoton={tituloBoton2} />
          )}
        </Col>
        <Col span={3} className="card__accion">
          {tituloBoton1 && (
            <BotonDiv onClick={accionBoton1} tituloBoton={tituloBoton1} />
          )}
        </Col>
      </Row>

      <div className="card__contenido" style={{ minHeight: '80vh' }}>
        {children}
      </div>
    </div>
  );
}
