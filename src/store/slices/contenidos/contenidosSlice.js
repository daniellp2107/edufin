import { createSlice } from "@reduxjs/toolkit";

export const contenidosSlice = createSlice({
  name: "contenidos",
  initialState: {
    alumnos:[],
    temas:[],
    laminas:[],
    preguntas:[],
    alumnosStats:[],
    tema:{},
    pregunta:{},
    laminaActual:0,
    agregarLamina:{
      file: null,
      formData:null,
      temaID:null,
      posicion:null
    }
  },
  reducers: {
    storeTemas: (state, {payload})=>{
      state.temas = payload;
    },
    storeTema: (state, {payload})=>{
      state.tema = payload;
    },
    storePreguntas: (state, {payload})=>{
      state.preguntas = payload;
    },
    storePregunta:(state, {payload})=>{
      state.pregunta = payload;
    },
    storeLaminas:(state, {payload})=>{
      state.laminas = payload;
    },
    storeLaminaActual:(state, {payload})=>{
      state.laminaActual = payload;
    },
    storeAgregarLamina:(state, {payload})=>{
      state.agregarLamina = payload;
    }
  },
});

export const {
  storeAgregarLamina,
  storeLaminas,
  storeLaminaActual,
  storeTemas,
  storeTema,
  storePregunta,
  storePreguntas,
} = contenidosSlice.actions;