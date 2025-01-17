import React from 'react';
import { Flex, Progress } from 'antd';
export const Circulo = () => (
  <Flex gap="small" justify='space-evenly'>
    <div className='circle-name'>
      Alumnos Activos
      <Progress type="circle" percent={100} format={() => '8'} />
    </div>
    <div className='circle-name'>
      Accesos este mes
      <Progress type="circle" percent={100} format={() => '8'} />
    </div>
  </Flex>
);