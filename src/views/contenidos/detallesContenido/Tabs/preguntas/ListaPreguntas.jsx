import React from 'react'
import { useSelector } from 'react-redux'
import { Pregunta } from './preguntaItem/PreguntaItem';

export const ListaPreguntas = () => {
  const {preguntas} = useSelector(state => state.contenidosReducer);

  if (preguntas.length === 0) return <p>Sin preguntas</p>
  return (
    <>
      {preguntas.map((p, i) => (
        <Pregunta pregunta={p} key={i}/>
      ))}
    </>
  )
}
