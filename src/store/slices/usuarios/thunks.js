import { fetch } from "../../../api/api";
import { URL_BASE } from "../../../const/url";


export const startCargaUsuarios =()=>{
  return async dispatch =>{
    try {
      const res = await fetch('get', `${URL_BASE}/api/usuarios`);
      if (res.ok) {
        console.log(res.data);
        console.log('Usuarios cargados');
      };
    } catch (error) {
      console.log(error);
    };
  };
};

