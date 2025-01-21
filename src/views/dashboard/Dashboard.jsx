import { useEffect } from "react";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { Card, Divider } from "antd";
import { NumAccesos } from "./numAccesos/NumAccesos";
import { startCargaDashboard } from "../../store/slices/dashboard/thunks";
import { Grafica } from "./grafica/Grafica";

export const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fecha = dayjs().format('MM/YYYY');
    dispatch(startCargaDashboard(fecha));
  }, []);
  console.log('dashboard');
  return (
    <>
      <Card title="Coontador de Accesos" style={{marginBottom:10}}>
        <NumAccesos />
      </Card>
      <Card title="Grafica de Accesos" >
        <Grafica />
      </Card>
    </>
  );
};
