import axios from 'axios';
import { fetch } from "../../../api/api";
import { URL_BASE } from "../../../const/url";
import { storeAgregarLamina, storeLaminaActual, storeLaminas, storePregunta, storePreguntas, storeTema, storeTemas } from "./contenidosSlice";


export const startLoadTemas = ()=>{
  return async (dispatch) =>{
    try {
      const res = await fetch('get', `${URL_BASE}/api/temas`);
      if (res.ok) {
        dispatch(storeTemas(res.data));
      };
    } catch (error) {
      console.log(error);
    };
  };
};

export const startAgregarTema =(body)=>{
  return async dispatch =>{
    try {
      const res = await fetch('post', `${URL_BASE}/api/temas`, body);
      if (res.ok) {
        console.log('Tema agregado');
        dispatch( startLoadTemas() );
      };
    } catch (error) {
      console.log(error);
    };
  };
};

export const startEditarTema =(tema)=>{
  return async dispatch =>{
    try {
      dispatch(storeTema(tema));
    } catch (error) {
      console.log(error);
    };
  };
};

export const startActualizarTema =(body)=>{
  return async dispatch =>{
    try {
      const res = await fetch('put', `${URL_BASE}/api/temas`,body);
      if (res.ok) {
        console.log('Tema actualizado');
        dispatch(startLoadTemas());
      };
    } catch (error) {
      console.log(error);
    };
  };
};

export const startEliminarTema =(id)=>{
  return async dispatch =>{
    try {
      const res = await fetch('delete',`${URL_BASE}/api/temas/${id}`);
      if (res.ok) {
        console.log('tema borrado');
      };
    } catch (error) {
      console.log(error);
    };
  };
};

export const startCargarPreguntas =(id)=>{
  return async dispatch =>{
    try {
      const res = await fetch('get', `${URL_BASE}/api/preguntas/${id}`);
      if (res.ok) {
        console.log('preguntas cargadas');
        dispatch(storePreguntas(res.data));
      };
    } catch (error) {
      console.log(error);
    };
  };
};

export const startAgregarPregunta =(body)=>{
  const {temaID} = body;
  return async dispatch =>{
    try {
      const res = await fetch('post', `${URL_BASE}/api/preguntas`,body);
      if (res.ok) {
        console.log('pregunta agregada');
        dispatch(startCargarPreguntas(temaID));
      };
    } catch (error) {
      console.log(error);
    };
  };
};

export const startEditarPregunta =(pregunta)=>{
  return async dispatch => {
    try {
      const res = await fetch('put', `${URL_BASE}/api/preguntas`, pregunta);
      if (res.ok) {
        dispatch(startCargarPreguntas(pregunta.temaID))
      }
    } catch (error) {
      console.log(error);
    };
  };
};

export const startEliminarPregunta =(pregunta)=>{
  return async dispatch =>{
    try {
      console.log('Elemento pendiente por eliminar: ', pregunta);
      // const res = await fetch('delete',`${URL_BASE}/api/preguntas/`);
      // if (res.ok) {
      //   console.log('Elemento pendiente por eliminar: ', pregunta);
      // }
    } catch (error) {
      console.log(error);
    };
  };
};

//Laminas
export const startCargarLaminas =(id)=>{
  return async dispatch =>{
    try {
      const res = await fetch('get', `${URL_BASE}/api/laminas/${id}`);
      if (res.ok) {
        console.log('laminas cargadas');
        dispatch(storeLaminas(res.data));
      };
    } catch (error) {
      console.log(error);
    };
  };
};

export const startSetLaminaActual =(numLamina)=>{
  return async dispatch =>{
    try {
      dispatch(storeLaminaActual(numLamina));
      console.log('lamina actual: ', numLamina);
    } catch (error) {
      console.log(error);
    };
  };
};

export const startAgregarLamina =(file)=>{
  return async dispatch =>{
    try {
      dispatch(storeAgregarLamina(file));
    } catch (error) {
      console.log(error);
    };
  };
};

export const startPostAgregarLamina =(formData)=> {
  return async dispatch =>{
    try {
      console.log(formData);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const res = await axios.post(`${URL_BASE}/api/laminas`,formData, config);
      console.log(res);
     
    } catch (error) {
      console.log(object);
    };
  };
};