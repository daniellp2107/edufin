import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startAgregarLamina, startPostAgregarLamina } from "../store/slices/contenidos/thunks";
import { formValidationsAgregarLamina } from "../utils/formValidations";

export const useFormActualizarLamina = (lamina) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ posicion: lamina });
  const { agregarLamina } = useSelector((state) => state.contenidosReducer);

  useEffect(() => {
    setForm({posicion:lamina});
  }, [form]);

  const onChangeVal = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {

  };

  const handleReset = () => {
    
  };

  return {
    form,
    handleReset,
    handleSubmit,
    onChangeVal,
    setForm,
  };
};
