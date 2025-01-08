import { fetch } from "../../../api/api";
import { URL_BASE } from "../../../const/url";
import { storeUsuarios } from "./usuariosSlice";


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


