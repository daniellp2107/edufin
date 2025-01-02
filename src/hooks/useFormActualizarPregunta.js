import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formValidationsEditarPregunta } from "../utils/formValidations";

export const useFormActualizarPregunta = (pregunta) => {
  const data = {
    id: pregunta.id,
    temaID: pregunta.temaID,
    nombre: pregunta.nombre,
    respuestas: pregunta.respuestasFull,
  };
  const [formValidation, setFormValidation] = useState();
  const [form, setForm] = useState(data);

  useEffect(() => {
    setForm(data);
  }, [pregunta]);

  const onChangeRespuesta = ({ target }, index) => {
    setForm((state) => {
      const newRespuestas = [...state.respuestas];
      newRespuestas[index] = {
        ...newRespuestas[index],
        [target.name]: target.value,
      };
      return { ...state, respuestas: newRespuestas };
    });
  };

  const onChangeNombre = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const onChangeCheck = (target, index) => {
    setForm((state) => {
      const newRespuestas = [...state.respuestas];
      newRespuestas[index] = {
        ...newRespuestas[index],
        [target.name]: target.value,
      };
      return { ...state, respuestas: newRespuestas };
    });
  };

  const handleReset = () => setForm(data);

  const handleSubmit = () => {
    console.log("Actualizando temas", { id, nombre, tiempoMaxMinutos });
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
