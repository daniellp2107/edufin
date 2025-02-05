import axios from 'axios';
import { fetch } from "../../../api/api";
import { URL_BASE } from "../../../const/url";
import { storeAgregarLamina, storeBuscarPregunta, storeLamina, storeLaminaActual, storeLaminas, storePreguntas, storeTema, storeTemas } from "./contenidosSlice";
import { setNotificacion } from '../notificacion/notificacionSlice';
import { creaNotificacion } from '../../../utils/creaNotificacion';
import { storeLoading } from '../cargandoPreguntas/cargandoSlice';


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
        dispatch( startLoadTemas() );
        dispatch(setNotificacion(creaNotificacion('success', 'Contenido creado')));
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
        dispatch(startLoadTemas());
        dispatch(setNotificacion(creaNotificacion('success', 'Contenido actualizado')));
      };
    } catch (error) {
      console.log(error);
    };
  };
};

export const startEliminarTema =(id)=>{
  return async dispatch =>{
    try {
      const res = await fetch('delete',`${URL_BASE}/api/temas/${id}`,{});
      if (res.ok) {
        dispatch(setNotificacion(creaNotificacion('success', 'Contenido Eliminado')));
      }else{
        dispatch(setNotificacion(creaNotificacion('error', 'Pendiente por eliminar')));
      };
    } catch (error) {
      console.log(error);
    };
  };
};

export const startCargarPreguntas =(id)=>{
  return async dispatch =>{
    try {
      dispatch(storeLoading(true));
      const res = await fetch('get', `${URL_BASE}/api/preguntas/${id}`);
      if (res.ok) {
        dispatch(storePreguntas(res.data));
      };
      dispatch(storeLoading(false));
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
        dispatch(startCargarPreguntas(temaID));
        dispatch(setNotificacion(creaNotificacion('success', 'Pregunta agregada')));
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
        dispatch(startCargarPreguntas(pregunta.temaID));
        dispatch(setNotificacion(creaNotificacion('success', 'Actualizado')));
      }
    } catch (error) {
      console.log(error);
    };
  };
};

export const startEliminarPregunta =(pregunta, temaID)=>{
  return async dispatch =>{
    try {
      const res = await fetch('delete',`${URL_BASE}/api/preguntas/${pregunta.id}`);
      if (res.ok) {
        dispatch(startCargarPreguntas(temaID));
        dispatch(setNotificacion(creaNotificacion('success', 'Pregunta eliminada')));
      }else{
        dispatch(setNotificacion(creaNotificacion('error', 'No se puedo eliminar pregunta')));
      };
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
        dispatch(storeLaminas(res.data));
        if (res.data.length > 0) {
          const currLam = res.data.find(l => l.posicion === 0);
          dispatch(startSetLamina(currLam));
        };
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
    } catch (error) {
      console.log(error);
    };
  };
};

export const startSetLamina =(lamina)=>{
  return async dispatch =>{
    try {
      dispatch(storeLamina(lamina));
    } catch (error) {
      console.log(error);
    };
  };
};

export const startAgregarLamina =(data)=>{
  return async dispatch =>{
    try {
      const {formData, posicion, temaID} = data;
      dispatch(storeAgregarLamina({formData, posicion, temaID}));
    } catch (error) {
      console.log(error);
    };
  };
};

export const startPostAgregarLamina =({file, posicion, temaID, id})=> {
  return async dispatch =>{
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('posicion', posicion + 1);
      formData.append('temaID', temaID);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      if (id) {
        formData.append('id', id);
        const res = await axios.put(`${URL_BASE}/api/laminas`,formData, config);
        dispatch(setNotificacion(creaNotificacion('success', 'actualizar')));
      }else{
        const res = await axios.post(`${URL_BASE}/api/laminas`,formData, config);
        dispatch(setNotificacion(creaNotificacion('success', 'agregar')));
      }
      dispatch(startCargarLaminas(temaID));
    } catch (error) {
      console.log(error);
    };
  };
};

export const startBuscarPregunta = (texto)=>{
  return async dispatch =>{
    try {
      dispatch(storeBuscarPregunta(texto));
    } catch (error) {
      console.log(error);
    };
  };
};