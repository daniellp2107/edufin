import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formValidationsAgregarPregunta } from "../utils/formValidations";
import { startAgregarPregunta } from "../store/slices/contenidos/thunks";

const datosIniciales = {
  nombre: "",
  respuestas: [
    {
      nombre: "",
      esCorrecta: true,
    },
    {
      nombre: "",
      esCorrecta: false,
    },
    {
      nombre: "",
      esCorrecta: false,
    },
    {
      nombre: "",
      esCorrecta: false,
    },
  ],
};

export const useFormAgregarPregunta = ({id}) => {
  const [formValidation, setFormValidation] = useState();
  const [form, setForm] = useState(datosIniciales);
  const dispatch = useDispatch();

  useEffect(() => {
    checkForm();
  }, [form]);

  const onChangeRespuesta = ({ target }, index) => {
    setForm(state => {
      const newRespuestas = [...state.respuestas];
      newRespuestas[index] = { ...newRespuestas[index], [target.name]: target.value };
      return {...state, respuestas:newRespuestas};
    });
  };

  const onChangeNombre = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const onChangeCheck = (target,index) => {
    setForm(state => {
      const newRespuestas = [...state.respuestas];
      newRespuestas[index] = { ...newRespuestas[index], [target.name]: target.value };
      return {...state, respuestas:newRespuestas};
    })
  };

  const handleReset = () => setForm(datosIniciales);

  const handleSubmit = () => {
    console.log("agregando preguntas");
    const body = {
      temaID:id,
      nombre:form.nombre,
      respuestas:form.respuestas
    };
    dispatch(startAgregarPregunta(body));
  };

  const checkForm = () => {
    const formCheckedValues = {};

    for (const formField of Object.keys(formValidationsAgregarPregunta)) {
      const [fn, errorMessage] = formValidationsAgregarPregunta[formField];
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
    onChangeCheck,
    onChangeNombre,
    onChangeRespuesta,
    handleReset,
    handleSubmit,
  };
};
