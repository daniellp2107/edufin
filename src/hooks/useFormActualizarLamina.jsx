import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useFormActualizarLamina = (posicion, temaID) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ posicion: posicion });

  useEffect(() => {
    setForm({posicion:posicion});
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
