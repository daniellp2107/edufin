import React, { useEffect } from "react";
import CardPage from "../../layout/CardPage";
import { useDispatch } from "react-redux";
import { startCargaUsuarios } from "../../store/slices/usuarios/thunks";
import { ContenidoHeader } from "./contenidoHeader/ContenidoHeader";

export const Usuarios = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startCargaUsuarios());
  },[]);

  return( 
    <CardPage titulo="Usuarios">
      <ContenidoHeader />
    </CardPage>
  )
};
