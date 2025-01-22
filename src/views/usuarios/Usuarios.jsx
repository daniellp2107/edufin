import React, { useEffect } from "react";
import CardPage from "../../layout/CardPage";
import { useDispatch } from "react-redux";
import { startCargaUsuarios, startSetUsuarioActual } from "../../store/slices/usuarios/thunks";
import { ListaUsuarios } from "./listaUsuarios/ListaUsuarios";
import { UsuariosHeader } from "./usuariosHeader/UsuariosHeader";

export const Usuarios = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startCargaUsuarios());
  },[]);

  return( 
    <CardPage titulo="Usuarios">
      <UsuariosHeader />
      <ListaUsuarios />
    </CardPage>
  )
};
