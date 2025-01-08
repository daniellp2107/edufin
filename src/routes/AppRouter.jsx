import { Route, Routes } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Login } from "../views/login/Login";
import { ProtectedRoutes } from "./ProtectedRoutes";
import Loading from "../components/loading/Loading";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { consLogged } from "../const/consLogged";
import { startRefreshToken } from "../store/slices/auth/thunks";
import { Notificacion } from "../layout/Notificacion";

export const AppRouter = () => {
  const { logged } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  // ejecuta la primra vez que carga la app
  useEffect(() => {
     dispatch(startRefreshToken());
  }, []);

  if (logged === consLogged.STARTING) return <Loading />;

  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <PublicRoute>
              <Routes>
                <Route path="/*" element={<Login />} />
              </Routes>
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <ProtectedRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
      <Notificacion />
    </>
  );
};
