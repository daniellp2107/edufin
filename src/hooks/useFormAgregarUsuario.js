import React, { useEffect, useState } from "react";
import { formValidationsAgregarUsuario } from "../utils/formValidations";

const initialData = {
  email: "",
  nombre: "",
  password: "",
  fechaLimite: "",
  esAlumno: false,
  esAdmin: false,
};

export const useFormAgregarUsuario = () => {
  const [form, setForm] = useState(initialData);
  const [formValidation, setFormValidation] = useState();

  useEffect(() => {
    checkForm()
  }, [form]);
  

  const onChangeText = ({ target }) =>
    setForm({ ...form, [target.name]: target.value });

  const onChangeVal = ({ name, value }) => setForm({ ...form, [name]: value });

  
  const onChangeDate =({name, value})=>{
    setForm(({...form, [name]: value}));
  };

  const handleSubmit =()=>{
    console.log('submit');
  };

  const handleReset =()=>{
    console.log('handleReset');
  };

  const checkForm = () => {
      const formCheckedValues = {};
  
      for (const formField of Object.keys(formValidationsAgregarUsuario)) {
        const [fn, errorMessage] = formValidationsAgregarUsuario[formField];
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
    onChangeDate,
    onChangeText,
    onChangeVal,
    handleSubmit,
    handleReset,
  };
};
