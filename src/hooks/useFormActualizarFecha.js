import { useState } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { startActualizarDatosGrafica } from '../store/slices/dashboard/thunks';

const initialData = {
  fechaActual: dayjs(),
};

export const useFormActualizarFecha = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialData);
  
  const onChangeDate = ({name, value}) => {
    setForm({...form, [name]:value});
  };

  const handleSubmit = () => {
    const {fechaActual} = form;
    const [dia,mes, anio] = dayjs(fechaActual).format('DD/MM/YYYY').split('/');
    dispatch(startActualizarDatosGrafica({mes,anio}));
  };

  return {
    form,
    setForm,
    handleSubmit,
    onChangeDate,

  }
}