import { Col, Progress } from "antd";
import { colores } from "../../../../../../const/colores";

export const TemaAvance = ({ actividad }) => {
  const { temaNombre, laminasTotales, laminasVistas, ultimoExamen } = actividad;
  return (
    <>
      <div style={{ color: colores.label, fontSize: 20, fontWeight: 500 }}>
        {temaNombre}
      </div>
      <div>
        Progreso
        <Progress
          strokeColor={colores.strokeColorBar}
          percent={(laminasVistas / laminasTotales).toPrecision(2) * 100}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <span style={{ color: colores.label, fontWeight: 500 }}>
          Ultimo Examen:
        </span>{" "}
        {ultimoExamen ? ultimoExamen : "01/01/0000"}
      </div>
    </>
  );
};
