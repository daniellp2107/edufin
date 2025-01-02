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
    pregunta:{}
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
  },
});

export const {
  storeTemas,
  storeTema,
  storePregunta,
  storePreguntas,
} = contenidosSlice.actions;