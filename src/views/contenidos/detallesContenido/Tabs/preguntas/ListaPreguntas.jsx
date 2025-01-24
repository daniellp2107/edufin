import React from "react";
import { useSelector } from "react-redux";
import { Pregunta } from "./preguntaItem/PreguntaItem";

export const ListaPreguntas = () => {
  const { preguntas, buscarPregunta } = useSelector((state) => state.contenidosReducer);

  const quitarAcentos = (texto) => {
    return texto
      .toLocaleLowerCase('es')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  if (preguntas.length === 0) return <p>Sin preguntas</p>;
  if (buscarPregunta === "") return preguntas.map((p, i) => <Pregunta pregunta={p} key={i} />);
  return (
    <>
      {preguntas
        .filter((p) =>quitarAcentos(p.nombre.toLowerCase()).includes(quitarAcentos(buscarPregunta.toLowerCase())))
        .map((p, i) => (
          <Pregunta pregunta={p} key={i} />
        ))}
    </>
  );
};
