import { fetch, fetchSinToken } from "../../../api/api";
import {
  setLoginErr,
  setLoadingLogin,
  storeUser,
  setLogged,
} from "./userSlice";
import parseJwt from "../../../utils/parseJwt";
import { consLogged } from "../../../const/consLogged";
import { _URL } from "../../../const/url";

export const startLogin = (body) => {
  return async (dispatch) => {
    dispatch(setLoginErr(null));
    dispatch(setLoadingLogin());

    const r = await fetchSinToken("post", `${_URL}/login`, {
      portal: "ADMIN",
      ...body,
    });
    if (r.ok) {
      localStorage.setItem("token", r.data.data);
      dispatch(storeUser(parseJwt(r.data.data)));
    } else {
      console.log({ r });
      if (!r.response || r.response.status == 500)
        dispatch(setLoginErr("Error en servidor"));
      if (r.response.status == 400) dispatch(setLoginErr(r.response.data));
    }
  };
};

export const startRefreshToken = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(setLogged(consLogged.NOTLOGGED));
      return;
    } else {
      dispatch(storeUser(parseJwt(token)));
      dispatch(setLogged(consLogged.LOGGED));
    }

    return;

    const r = await fetchSinToken("post", `${_URL}/Refresh`, {
      token,
      app: "AppAdmin",
    });

    if (r.ok) {
      localStorage.setItem("token", r.data.data);
      dispatch(storeUser(parseJwt(r.data.data)));
      dispatch(setLogged(consLogged.LOGGED));
    } else {
      dispatch(setLogged(consLogged.NOTLOGGED));
      const token = localStorage.removeItem("token");
      if (!r.response || r.response.status == 500)
        dispatch(setLoginErr("Error en servidor"));
      if (r.response.status == 400) dispatch(setLoginErr(r.response.data));
    }
  };
};
