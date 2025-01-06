import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startAgregarLamina, startPostAgregarLamina } from "../store/slices/contenidos/thunks";
import { formValidationsAgregarLamina } from "../utils/formValidations";

export const useFormAgregarLamina = (lamina, laminaActual) => {
  const dispatch = useDispatch();
  
  const { agregarLamina } = useSelector((state) => state.contenidosReducer);
  const [form, setForm] = useState({
    file:lamina.file,
    formData:lamina.formData,
    temaID:lamina.temaID,
    posicion:laminaActual
  });
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    checkForm();
  }, [form, lamina]);

  const onChangeVal = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    const {file, formData, temaID, posicion} = agregarLamina;
    dispatch(startPostAgregarLamina({file, formData, temaID, posicion}));
  };

  const onChangeId =(id)=>{
    setForm({...form, ['temaID']:id});
  };

  const handleReset = () => {
    setForm({
      file:lamina.file,
      formData:lamina.formData,
      temaID:lamina.temaID,
      posicion:laminaActual
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
      if (formValidation[formValue] !== null) return false;
    }
    return true;
  };

  return {
    form,
    formValidation,
    isFormValid,
    handleReset,
    handleSubmit,
    onChangeId,
    onChangeVal,
    setForm,
  };
};
