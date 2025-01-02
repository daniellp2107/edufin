import { fetch } from "../../../api/api"
import { URL_BASE } from "../../../const/url"
import { storePregunta, storePreguntas, storeTema, storeTemas } from "./contenidosSlice";


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
      console.log(res);
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
      dispatch(storePregunta(pregunta));
    } catch (error) {
      console.log(error);
    }
  }
}
