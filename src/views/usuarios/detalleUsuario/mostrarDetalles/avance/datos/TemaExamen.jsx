import React from "react";
import { colores } from "../../../../../../const/colores";
import { Col, Progress } from "antd";

export const TemaExamen = ({ actividad }) => {
  const { preguntasCorrectas, preguntasTotales } = actividad;

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <p style={{ color: colores.label, fontWeight: 500 }}>Calificación</p>
      <Progress
        strokeColor={colores.strokeColorCircle}
        type="circle"
        percent={(preguntasCorrectas / preguntasTotales) * 100}
        format={() => (preguntasCorrectas / preguntasTotales) * 100 + "%"}
      />
    </div>
  );
};
