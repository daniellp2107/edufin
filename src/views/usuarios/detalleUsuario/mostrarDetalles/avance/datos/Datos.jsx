import { useEffect } from 'react';
import { Col, Divider, Row } from 'antd';
import { TemaAvance } from './TemaAvance';
import { TemaExamen } from './TemaExamen';

export const Datos = ({actividad}) => {
  
  useEffect(() => {
    
  }, [actividad]);

  return (
    <Row >
      <Col sm={24} md={12}>
        <TemaAvance actividad={actividad}/>
      </Col>
      <Col sm={24} md={6}>
        <TemaExamen actividad={actividad}/>
      </Col>

      <Divider />
    </Row>
  )
}
