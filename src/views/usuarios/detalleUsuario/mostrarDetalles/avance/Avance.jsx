import { useSelector } from "react-redux";
import { Datos } from "./datos/Datos";

export const Avance = () => {
  const { actividades} = useSelector(state => state.usuariosReducer);

  if (actividades.length === 0) return <p>Sin Avances para mostrar</p>;

  return (
    <>
      {actividades.map((act, index) => (
        <Datos actividad={act} key={`act_${act.temaId}_${index}`} />
      ))}
    </>
  );
};
