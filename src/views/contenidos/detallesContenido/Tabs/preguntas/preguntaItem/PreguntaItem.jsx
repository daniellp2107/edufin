import { useState } from "react";
import { Card } from "antd";
import { Respuestas } from "./Respuestas";
import { Controles } from "./Controles";
import { ModalEditar } from "./modalEditar/ModalEditar";
import { useDispatch, useSelector } from "react-redux";
import { startEliminarPregunta } from "../../../../../../store/slices/contenidos/thunks";
import { useParams } from "react-router-dom";

export const Pregunta = ({ pregunta }) => {
  const dispatch = useDispatch();
  const {id:temaID} = useParams();
  const [act, setAct] = useState();
  const [open, setOpen] = useState(false);
  const { loading } = useSelector((state) => state.cargandoReducer);
  const { preguntas } = useSelector((state) => state.contenidosReducer);
  const { id, nombre, respuestas } = pregunta;

  const handleActual = () => {
    const actual = preguntas.find((t) => t.id === id);
    setAct(actual);
    setOpen(true);
  };

  const handleEliminar = () => {
    dispatch(startEliminarPregunta(pregunta, temaID));
  };

  if (loading) return <p> </p>;
  return (
      <Card
        style={{marginBottom:10}}
        styles={{
          title: {
            height: "auto",
            textWrap: "wrap",
            fontStyle: "normal",
            fontWeight: "400",
          },
          header: { display: "flex", flexWrap: "wrap" },
        }}
        title={nombre}
        extra={
          <Controles
            open={open}
            setOpen={setOpen}
            preguntaActual={handleActual}
            eliminarActual={handleEliminar}
            act = {act}
          />
        }
      >
        {respuestas?.length > 0 && (
          <>
            {respuestas?.map((res) => (
              <Respuestas key={res.id} respuesta={res} />
            ))}
          </>
        )}
      </Card>
  );
};
