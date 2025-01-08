import { Table } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux'
import { useColumns } from './useColumns';

export const ListaUsuarios = () => {
  const {usuarios} = useSelector(state => state.usuariosReducer);
  const {columnas} = useColumns();

  return <Table 
    dataSource={usuarios}
    columns={columnas}
    rowKey={(record)=>record.usuarioID}
  />
}
