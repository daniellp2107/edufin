import { CheckCircleOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";

export const Respuestas = ({ respuesta }) => {
  const { id, nombre, esCorrecta } = respuesta;
  
  return (
    <Row>
      <Col span={1}>
        {esCorrecta && <CheckCircleOutlined style={{ color: "orange" }} />}
      </Col>
      <Col span={23}>{nombre}</Col>
    </Row>
  );
};
