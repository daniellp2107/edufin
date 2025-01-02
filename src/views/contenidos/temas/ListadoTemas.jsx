import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Table} from 'antd';
import { startLoadTemas } from '../../../store/slices/contenidos/thunks';
import { useColumn } from './useColumn';

export const ListadoTemas = () => {
  const dispatch = useDispatch();
  const {columnas} = useColumn();
  const {temas} = useSelector(state => state.contenidosReducer);

  useEffect(() => {
    dispatch(startLoadTemas());
  }, []);
  
  return <Table 
    dataSource={temas}
    columns={columnas}
    rowKey={(record)=>record.id}
  />
};
