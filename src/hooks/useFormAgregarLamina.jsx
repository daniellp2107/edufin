import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startAgregarLamina, startPostAgregarLamina } from "../store/slices/contenidos/thunks";
import { formValidationsAgregarLamina } from "../utils/formValidations";

export const useFormAgregarLamina = () => {
  const dispatch = useDispatch();
  const [formValidation, setFormValidation] = useState({});
  const [form, setForm] = useState({
    file:null,
    formData:null,
    posicion:null,
    temaID:null,
  }); 

  useEffect(() => {
    checkForm();
  }, [form]);

  const onChangeVal = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    // const {file, formData, temaID, posicion} = agregarLamina;
    // dispatch(startPostAgregarLamina({file, formData, temaID, posicion}));
  };

  const onChangeFormData = (file, formData) => {
    console.log(pos, file);
    setForm({ ...form, ['file']: file, ['formData']:formData});
  };

  const handleReset = () => {
    setForm({
    file:null,
    formData:null,
    posicion:null,
    temaID:null,
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
    onChangeVal,
    onChangeFormData,
    setForm,
  };
};
