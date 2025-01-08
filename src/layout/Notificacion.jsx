import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { message } from 'antd';

export const Notificacion = () => {
  const {notificacion} = useSelector(state => state.notificacionReducer)
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    if (notificacion.type === 'success') {
      messageApi.open({
        type: 'success',
        content: notificacion.content,
      });   
    }
    if (notificacion.type === 'error') {
      messageApi.open({
        type: 'error',
        content: notificacion.content,
      });      
    }
  }, [notificacion.date]);

    return (
      <>
        {contextHolder} 
      </>
    )
  }
