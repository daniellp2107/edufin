import { useState } from "react";
import { Card } from "antd";
import { Respuestas } from "./Respuestas";
import { Controles } from "./Controles";
import { ModalEditar } from "./modalEditar/ModalEditar";
import { useDispatch, useSelector } from "react-redux";
import { startEliminarPregunta } from "../../../../../../store/slices/contenidos/thunks";

export const Pregunta = ({ pregunta }) => {
  const dispatch = useDispatch();
  const [act, setAct] = useState();
  const [open, setOpen] = useState(false);
  const { preguntas } = useSelector((state) => state.contenidosReducer);
  const { id, nombre, respuestasFull } = pregunta;

  const handleActual = () => {
    const actual = preguntas.find((t) => t.id === id);
    setAct(actual);
    setOpen(true);
  };

  const handleEliminar = () => {
    dispatch(startEliminarPregunta(pregunta));
  };

  return (
    <>
      <Card
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
          />
        }
      >
        {respuestasFull.length > 0 && (
          <>
            {respuestasFull.map((res, i) => (
              <Respuestas key={i} respuesta={res} />
            ))}
          </>
        )}
      </Card>
      <ModalEditar open={open} setOpen={setOpen} pregunta={act} />
    </>
  );
};
