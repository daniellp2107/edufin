import React from 'react'
import { Button, message, Popconfirm } from 'antd';
import { useSelector } from 'react-redux';

export const Eliminar = () => {
  const { laminaActual } = useSelector(state => state.contenidosReducer);
  const confirm = (e) => {
    console.log(e);
    message.success('Click on Yes');
  };
  const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
  };
  return (
    <Popconfirm
      title="Delete the task"
      description="Are you sure to delete this task?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <Button danger>Eliminar Lámina {laminaActual}</Button>
    </Popconfirm>
  )
}
