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
    lamina:{},
    agregarLamina:{},
    buscarPregunta:'',
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
    },
    storeLamina:(state, {payload})=>{
      state.lamina = payload;
    },
    storeBuscarPregunta:(state, {payload})=>{
      state.buscarPregunta = payload;
    }
  },
});

export const {
  storeAgregarLamina,
  storeBuscarPregunta,
  storeLamina,
  storeLaminas,
  storeLaminaActual,
  storeTemas,
  storeTema,
  storePregunta,
  storePreguntas,
} = contenidosSlice.actions;