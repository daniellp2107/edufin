import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startPostAgregarLamina } from "../store/slices/contenidos/thunks";
import { formValidationsAgregarLamina } from "../utils/formValidations";
import { creaNotificacion } from "../utils/creaNotificacion";
import { setNotificacion } from "../store/slices/notificacion/notificacionSlice";

export const useFormActualizarLamina = (temaID, posicion, laminas ) => {
  const dispatch = useDispatch();
  const [formValidation, setFormValidation] = useState({});
  const [form, setForm] = useState({
    file:null,
    posicion:posicion,
    temaID:temaID,
    id: laminas && laminas[posicion].id,
  }); 

  useEffect(() => {
    checkForm();
  }, [form, posicion]);

  const onChangeVal = ({ name, value }, temaID) => {
    setForm({ ...form, [name]: value, ['temaID']:temaID });
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
      posicion:posicion,
      temaID:temaID,
      id: laminas[posicion - 1],
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
