import { useEffect, useState } from "react";
import { Card, Modal } from "antd";
import { Respuestas } from "./Respuestas";
import { Controles } from "./Controles";
import { ModalEditar } from "./modalEditar/ModalEditar";
import { useDispatch, useSelector } from "react-redux";
import { startEditarPregunta } from "../../../../../../store/slices/contenidos/thunks";

export const Pregunta = ({ pregunta }) => {
  const dispatch = useDispatch();
  const {preguntas, pregunta:preguntaActual} = useSelector(state => state.contenidosReducer);
  const { id, nombre, temaID, temaNombre, respuestasCount, respuestasFull } = pregunta;
  const [open, setOpen] = useState(false);

  const handleActual =()=>{
    const act = preguntas.filter(t => t.id ===id);
    dispatch(startEditarPregunta(act));
  };

  useEffect(() => {
    
  }, []);
  

  return (
    <Card 
      title={nombre}
      extra={<Controles open={open} setOpen={setOpen} act={handleActual}/>}
    >
      {respuestasFull.length > 0 && (
        <>
          {respuestasFull.map((res, i) => (
            <Respuestas key={i} respuesta={res}/>
          ))}
        </>
      )}
      <ModalEditar open={open} setOpen={setOpen} pregunta={preguntaActual}/>
    </Card>
  );
};
