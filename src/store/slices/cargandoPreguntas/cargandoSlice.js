import { createSlice } from "@reduxjs/toolkit";

export const cargandoSlice = createSlice({
  name: "cargando",
  initialState: {
    loading:false,
  },
  reducers: {
    storeLoading: (state, {payload})=>{
      state.loading = payload;
    },
  },
});

export const {
  storeLoading,
} = cargandoSlice.actions;