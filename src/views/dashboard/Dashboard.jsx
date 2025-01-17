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
    const body = {
      mes:dayjs().month() + 1,
      anio:dayjs().year()
    }
    dispatch(startCargaDashboard(body));
  }, [])
  
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
