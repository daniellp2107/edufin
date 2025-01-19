import { fetch } from "../../../api/api";
import { URL_BASE } from "../../../const/url";
import { creaNotificacion } from "../../../utils/creaNotificacion";
import { setNotificacion } from "../notificacion/notificacionSlice";
import { storeUsuario, storeUsuarios } from "./usuariosSlice";


export const startCargaUsuarios =()=>{
  return async dispatch =>{
    try {
      const res = await fetch('get', `${URL_BASE}/api/usuarios`);
      if (res.ok) {
        console.log('Usuarios cargados');
        dispatch(storeUsuarios(res.data));
      };
    } catch (error) {
      console.log(error);
    };
  };
};

export const startAgregarUsuario =(body)=>{
  return async dispatch => {
    try {
      const res = await fetch('post', `${URL_BASE}/api/usuarios`, body);
      if (res.ok) {
        dispatch(startCargaUsuarios());
      };
    } catch (error) {
      console.log(error);
    };
  };
};

export const startSetUsuarioActual = (usuario)=>{
  return async (dispatch) => {
    try {
      const res = await fetch('get', `${URL_BASE}/api/usuarios/GetUsuarioFull/${usuario}`);
      if (res.ok) {
        dispatch(storeUsuario(res.data));
      };
    } catch (error) {
      console.log(error);
    };
  };
};

export const startActualizarUsuario =(body)=>{
  return async (dispatch) => {
    try {
      const res = await fetch('put', `${URL_BASE}/api/usuarios`, body);
      if (res.ok) {
        setNotificacion(setNotificacion(creaNotificacion('success', 'Usuario Actualizado')));
        dispatch(startCargaUsuarios());
      }else{
        setNotificacion(setNotificacion(creaNotificacion('error', 'Usuario no Actualizado')));
      }
    } catch (error) {
      console.log(error);
    };
  };
};


