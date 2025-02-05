import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import { formValidationsAgregarUsuario } from "../utils/formValidations";
import { generatePassword } from "../utils/generatePassword";
import { startAgregarUsuario } from "../store/slices/usuarios/thunks";

const initialData = {
  email: "",
  nombre: "",
  password: "",
  fechaLimite:dayjs().add(30,'day'),
  esAlumno: false,
  esAdmin: false,
  confirmPassword: "",
  tipoUsuario: [],
  passConfirm: { password: '', confirmPassword: '' }
};

export const useFormAgregarUsuario = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialData);
  const [formValidation, setFormValidation] = useState();

  useEffect(() => {
    checkForm();
  }, [form]);


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
    dispatch(startAgregarUsuario(form));
  };

  const handleReset = () => {
    setForm(initialData);
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
    isFormValid,
    onClickGenPass,
    onChangeDate,
    onChangeText,
    onChangeVal,
    handleSubmit,
    handleReset,
  };
};
