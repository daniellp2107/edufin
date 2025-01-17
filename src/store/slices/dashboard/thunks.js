import { fetch } from "../../../api/api";
import { URL_BASE } from "../../../const/url";
import { creaNotificacion } from "../../../utils/creaNotificacion";
import { setNotificacion } from "../notificacion/notificacionSlice";
import { storeDashboard } from "./dashboardSlice";

export const startCargaDashboard =(body)=>{
  return async (dispatch) => {
    try {
      const res = await fetch('post', `${URL_BASE}/api/dashboard`, body);
      if (res.ok) {
        dispatch(setNotificacion(creaNotificacion('success','Datos cargados')));
        console.log(res.data);
        dispatch(storeDashboard(res.data));
      }
    } catch (error) {
      console.log(error);
    };
  };
};