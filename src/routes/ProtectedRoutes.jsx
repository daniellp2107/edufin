import { Navigate, Route, Routes } from "react-router-dom";

import { LayoutPage } from "../layout/LayoutPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startRefreshToken } from "../store/slices/auth/thunks";
import { Dashboard } from "../views/dashboard/Dashboard";
import { Conntenidos } from "../views/contenidos/Conntenidos";
import { Usuarios } from "../views/usuarios/Usuarios";
import { DetallesContenido } from "../views/contenidos/detallesContenido/DetallesContenido";

export const ProtectedRoutes = () => {
  const dispatch = useDispatch();
  // en caso de que desde back se quite el usuario
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(startRefreshToken());
    }, 30 * 60000); // 30 min

    return () => clearInterval(interval);
  }, []);

  return (
    <LayoutPage>
      <Routes>
        <Route path="/contenidos" element={<Conntenidos />} />
        <Route path="/contenidos/detalles/:id" element={<DetallesContenido />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/" element={<Dashboard/>} />
        
      </Routes>
    </LayoutPage>
  );
};
