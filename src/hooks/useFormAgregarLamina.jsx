import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startAgregarLamina, startPostAgregarLamina } from "../store/slices/contenidos/thunks";
import { formValidationsAgregarLamina } from "../utils/formValidations";
import { creaNotificacion } from "../utils/creaNotificacion";
import { setNotificacion } from "../store/slices/notificacion/notificacionSlice";

export const useFormAgregarLamina = () => {
  const dispatch = useDispatch();
  const [formValidation, setFormValidation] = useState({});
  const [form, setForm] = useState({
    file:null,
    posicion:null,
    temaID:null,
    id:null,
  }); 

  useEffect(() => {
    checkForm();
  }, [form]);

  const onChangeVal = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(startPostAgregarLamina({...form}));
  };

  const onChangeFormData = (file) => {
    setForm({ ...form, ['file']: file});
  };

  const handleReset = () => {
    setForm({
    file:null,
    posicion:null,
    temaID:null,
    id:null,
    });
  };



  const checkForm = () => {
    const formCheckedValues = {};

    for (const formField of Object.keys(formValidationsAgregarLamina)) {
      const [fn, errorMessage] = formValidationsAgregarLamina[formField];
      formCheckedValues[`${formField}Valid`] = fn(form[formField])
        ? null
        : errorMessage;
    }
    setFormValidation(formCheckedValues);
  };
  const isFormValid = () => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) {
        dispatch(setNotificacion(creaNotificacion('error', formValidation[formValue])));
        return false;
      };
    }
    return true;
  };

  return {
    form,
    formValidation,
    isFormValid,
    handleReset,
    handleSubmit,
    onChangeVal,
    onChangeFormData,
    setForm,
  };
};
