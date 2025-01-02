import { useDispatch, useSelector } from "react-redux";
import { postFile } from "../../../../../api/api";
import { useParams } from "react-router-dom";
import { URL_ARTICULOS } from "../../../../../const/url";
import { errorHandler } from "../../../../../store/slices/auth/thunks";
import { setGlobalMessage } from "../../../../../store/slices/auth/userSlice";
import { startGetArticuloDocumentos } from "../../../../../store/slices/articulos/thunksDocumentos";

export const useFormData = (tipo) => {
  const dispatch = useDispatch();
  const { articuloID } = useParams();
  const { usuarioID } = useSelector((state) => state.userReducer.user);

  //
  const submit = async (body) => {
    // form data
    let formdata = new FormData();
    formdata.append("file", body.file);
    formdata.append("filename", "file");
    formdata.append("mimetype", "application/pdf");
    formdata.append("nombre", body.nombre);
    formdata.append("articuloID", articuloID);
    formdata.append("usuarioID", usuarioID);
    formdata.append("tipo", tipo);

    // post
    const url = `${URL_ARTICULOS}/PostDocumentoArticulo/`;
    const r = await postFile(url, formdata);

    if (r.ok) {
      dispatch(setGlobalMessage({ message: r.data, type: "success" }));
      dispatch(startGetArticuloDocumentos(articuloID));
      return true;
    } else dispatch(errorHandler(r));
  };

  return { submit };
};
