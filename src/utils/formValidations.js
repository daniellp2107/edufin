import dayjs from "dayjs";
import { esEmailValido } from "./esEmailValido";

export const checkForm = (dataInput, formValidations) => {
  const formCheckedValues = {};

  for (const formField of Object.keys(formValidations)) {
    const [fn, errorMessage] = formValidations[formField];

    formCheckedValues[`${formField}Valid`] = fn(dataInput[formField])
      ? null
      : errorMessage;
  }
  return formCheckedValues;
};

export const isFormValid = (formValidation) => {
  for (const formValue of Object.keys(formValidation)) {
    if (formValidation[formValue] !== null) return false;
  }
  return true;
};

export const formValidationsNuevoTema = {
  nombre: [
    (value) =>
      value !== "" &&
      value !== null &&
      value !== undefined &&
      value.length >= 3,
    "Mínimo 3 caracteres",
  ],
  tiempoMaxMinutos: [(value) => value >= 5, "Tiempo mínimo es de 5 minutos"],
};

export const formValidationsAgregarPregunta = {
  nombre: [
    (value) =>
      value !== "" &&
      value !== null &&
      value !== undefined &&
      value.length >= 5,
    "Mínimo 5 caracteres",
  ],
  respuestas: [
    (respuestas) => {
      // Contamos cuántos nombres no están vacíos
      const nombresNoVacios = respuestas.filter(
        (respuesta) => respuesta.nombre !== ""
      ).length;

      // Verificamos si al menos una respuesta es correcta
      const hayRespuestaCorrecta = respuestas.some(
        (respuesta) => respuesta.esCorrecta === true
      );

      // Verificamos las condiciones
      return nombresNoVacios === 4 && hayRespuestaCorrecta;
    },
    "Necesito almenos 4 respuestas y una correcta",
  ],
};

export const formValidationsEditarPregunta = {
  nombre: [
    (value) =>
      value !== "" &&
      value !== null &&
      value !== undefined &&
      value.length >= 5,
    "Mínimo 5 caracteres",
  ],
  respuestasFull: [
    (respuestas) => {
      const nombresVacios = respuestas.filter(respuesta => respuesta.nombre !== "").length;
      const hayRespuestaCorrecta = respuestas.some(respuesta => respuesta.esCorrecta === true);
      return nombresVacios === 4 && hayRespuestaCorrecta;
    },
    "Necesito 4 respuestas y una correcta",
  ],
};

export const formValidationsAgregarUsuario = {
  nombre: [(value) => value.length > 3, "Mínimo 3 caracteres"],
  email: [value => esEmailValido(value), 'Este campo es necesario'],
  password: [value => value.trim().length > 5 && value.trim() !== '', 'Mínimo 5 caracteres'],
  confirmPassword: [value => value.trim().length > 5 && value.trim() !== '', 'Verifica tu contraseña'],
  fechaLimite: [value => (dayjs(value).format('DD/MM/YYYY') > dayjs().format('DD/MM/YYYY')) && dayjs(value).isValid() && (dayjs(value).format('DD/MM/YYYY') !== dayjs().format('DD/MM/YYYY')), 'Necesito una fecha valida'],
  esAlumno: [value => typeof(value)==='boolean', 'Elige una opción'],
  esAdmin: [value => typeof(value)==='boolean', 'Elige una opción'],
};
export const formValidationsAgregarLamina = {
  file: [value => value !== null && value !== undefined , "Carga un archivo válido"],
  temaID: [value => value !== 0, 'Elige un tema'],
  posicion: [value => typeof(value)==='number' && value >=0 , 'Elige una posicíon para la lamina'],
};

export const formValidationsActualizarUsuario = {
  nombre: [(value) => value.length > 3, "Mínimo 3 caracteres"],
  email: [value => esEmailValido(value), 'Elige un tema'],
  fechaLimite: [value => (dayjs(value).format('DD/MM/YYYY') > dayjs().format('DD/MM/YYYY')) && dayjs(value).isValid() && (dayjs(value).format('DD/MM/YYYY') !== dayjs().format('DD/MM/YYYY')), 'Necesito una fecha valida'],
  password: [value => value.trim().length > 5 && value.trim() !== '', 'Mínimo 5 caracteres'],
  confirmPassword: [value => value.trim().length > 5 && value.trim() !== '', 'Verifica tu contraseña'],
  ultimoLogin:[value => dayjs(value).isValid(), 'Necesito una fecha válida'],
  esAlumno: [value => typeof(value)==='boolean', 'Elige una opción'],
  esAdmin: [value => typeof(value)==='boolean', 'Elige una opción'],
};


