import { fetch } from "../../../api/api";
import { URL_BASE } from "../../../const/url";
import { storeAccesosPorMes, storeDashboard } from "./dashboardSlice";

export const startCargaDashboard =(body)=>{
  return async (dispatch) => {
    try {
      const [mes,anio] = body.split('/')
      const res = await fetch('post', `${URL_BASE}/api/dashboard`, {mes,anio});
      if (res.ok) {
        dispatch(storeDashboard(res.data));
      };
    } catch (error) {
      console.log(error);
    };
  };
};

export const startActualizarDatosGrafica = (body)=>{
  return async (dispatch) => {
    try {
      const res = await fetch('post', `${URL_BASE}/api/dashboard`, body);
      if (res.ok) {
        dispatch(storeAccesosPorMes(res.data.accesosPorDiaEnElMes));
      };
    } catch (error) {
      console.log(error);
    };
  };
};