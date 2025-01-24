import React from "react";
import { useSelector } from "react-redux";
import { Pregunta } from "./preguntaItem/PreguntaItem";

export const ListaPreguntas = () => {
  const { preguntas, buscarPregunta } = useSelector((state) => state.contenidosReducer);

  if (preguntas.length === 0) return <p>Sin preguntas</p>;
  if (buscarPregunta === "") return preguntas.map((p, i) => <Pregunta pregunta={p} key={i} />);
  return (
    <>
      {preguntas
        .filter((p) => p.nombre.includes(buscarPregunta))
        .map((p, i) => (
          <Pregunta pregunta={p} key={i} />
        ))}
    </>
  );
};
