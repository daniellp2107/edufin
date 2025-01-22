import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { generatePassword } from '../utils/generatePassword';
import { startActualizarUsuario } from '../store/slices/usuarios/thunks';

export const userFormActualizarUsuario = (usuario) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({...usuario, confirmPassword:'', password:''});

  useEffect(() => {
    setForm(form);
  }, [usuario]);


  const onChangeText = ({ target }) =>
    setForm({ ...form, [target.name]: target.value });

  const onChangeVal = ({ name, value }) => {
    setForm({ ...form, [name]: value })
  };


  const onChangeDate = ({ name, value }) => {
    setForm(({ ...form, [name]: value }));
  };

  const onClickGenPass = () => {
    const genPass = generatePassword();
    setForm({ ...form, ['password']: genPass, ['confirmPassword']: genPass });
  };

  const handleSubmit = () => {
    dispatch(startActualizarUsuario(form));
  };

  const handleReset = () => {
    setForm(initialData);
  };

  return {
    form,
    setForm,
    onClickGenPass,
    onChangeDate,
    onChangeText,
    onChangeVal,
    handleSubmit,
    handleReset,
  };
}
