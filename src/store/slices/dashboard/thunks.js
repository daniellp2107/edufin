import { fetch } from "../../../api/api";
import { URL_BASE } from "../../../const/url";
import { storeDashboard } from "./dashboardSlice";

export const startCargaDashboard =(body)=>{
  return async (dispatch) => {
    try {
      const res = await fetch('post', `${URL_BASE}/api/dashboard`, body);
      if (res.ok) {
        dispatch(storeDashboard(res.data));
      };
    } catch (error) {
      console.log(error);
    };
  };
};