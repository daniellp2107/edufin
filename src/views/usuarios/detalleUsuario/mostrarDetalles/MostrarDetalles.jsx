import { Tabs } from "antd";
import { Avance } from "./avance/Avance";
import { HistorialExamenes } from "./historialExamenes/HistorialExamenes";

const items = [
  {
    key: "1",
    label: "Avance en Contenidos",
    children: <Avance />,
  },
  {
    key: "2",
    label: "Historial de Examen Final",
    children: <HistorialExamenes />,
  },
];
export const MostrarDetalles = () => {

  return <Tabs defaultActiveKey="1" items={items}/>;
};
