import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formValidationsEditarPregunta } from "../utils/formValidations";
import { startEditarPregunta } from "../store/slices/contenidos/thunks";

export const useFormActualizarPregunta = (pregunta) => {
  const dispatch = useDispatch();
  const [formValidation, setFormValidation] = useState();
  const [form, setForm] = useState(pregunta);

  useEffect(() => {
    setForm(pregunta);
  }, [pregunta]);

  const onChangeRespuesta = ({ target }, index) => {
    setForm((state) => {
      const newRespuestas = [...state.respuestasFull];
      newRespuestas[index] = {
        ...newRespuestas[index],
        [target.name]: target.value,
      };
      return { ...state, respuestasFull: newRespuestas };
    });
  };

  const onChangeNombre = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const onChangeCheck = (target, index) => {
    setForm((state) => {
      const newRespuestas = [...state.respuestasFull];
      newRespuestas[index] = {
        ...newRespuestas[index],
        [target.name]: target.value,
      };
      return { ...state, respuestasFull: newRespuestas };
    });
  };

  const handleReset = () => setForm(pregunta);

  const handleSubmit = () => {
    const datos = {
      ...form,
      respuestas:form.respuestasFull
    };
    dispatch(startEditarPregunta(datos));
  };

  return {
    form,
    formValidation,
    onChangeCheck,
    onChangeNombre,
    onChangeRespuesta,
    handleReset,
    handleSubmit,
  };
};
