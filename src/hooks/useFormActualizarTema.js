import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formValidationsNuevoTema } from "../utils/formValidations";
import { startActualizarTema } from "../store/slices/contenidos/thunks";

export const useFormActualizarTema = (data) => {
  const [formValidation, setFormValidation] = useState();
  const [form, setForm] = useState(data);
  const dispatch = useDispatch();

  useEffect(() => {
    checkForm();
  }, [form]);

  const onChangeText = ({ target }) =>
    setForm({ ...form, [target.name]: target.value });

  const onChangeVal = ({ name, value }) => setForm({ ...form, [name]: value });

  const handleReset = () => setForm(data);

  const handleSubmit = () => {
    dispatch(startActualizarTema(form));
  };

  const checkForm = () => {
    const formCheckedValues = {};

    for (const formField of Object.keys(formValidationsNuevoTema)) {
      const [fn, errorMessage] = formValidationsNuevoTema[formField];
      formCheckedValues[`${formField}Valid`] = fn(form[formField])
        ? null
        : errorMessage;
    }
    setFormValidation(formCheckedValues);
  };
  const isFormValid = () => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    };
    return true;
  };

  return {
    form,
    formValidation,
    isFormValid,
    onChangeText,
    onChangeVal,
    handleReset,
    handleSubmit,
  };
};
