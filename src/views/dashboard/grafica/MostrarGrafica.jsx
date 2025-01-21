import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import dayjs from "dayjs";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Dia: ${label} Visitas: ${payload[0].value}`}</p>
      </div>
    );
  };
  return null;
};

export const MostrarGrafica = ({form, accesosPorDiaEnElMes}) => {
  const [datos, setDatos] = useState();

  const construirDatos = () => {
    const dias = dayjs(form.fechaActual).daysInMonth();
    let arrDatos = [];
    for (let index = 0; index < dias; index++) {
      arrDatos[index] = {dia:index + 1, cantidad:0};
    };
    
    const updatedData = arrDatos.map((item) => {
      const nuevoItem = accesosPorDiaEnElMes.find((d) => d.dia === item.dia);
      return nuevoItem ? { ...item, cantidad: nuevoItem.cantidad } : item;
    });
    return updatedData;
  };

  useEffect(() => {
    const d = construirDatos();
    setDatos(d);
  }, [accesosPorDiaEnElMes]);
  
  if (accesosPorDiaEnElMes.length ===0) return <p style={{margin:15, textAlign:'center'}}>Sin datos para mostrar </p> 

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={datos}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="dia"
          label={{ value: "Dia", position: "left" }}
          tickLine={false}
          tickMargin={10}
          axisLine={true}
          tickFormatter={(value) => value}
        />
        <YAxis
          domain={[0, "auto"]}
          label={{ value: "visitas", angle: -90, position: "insideLeft" }}
          tick={true}
        />
        <Tooltip content={<CustomTooltip />}/>

        <Line
          type="monotone"
          dataKey="cantidad"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
