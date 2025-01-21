import { Button } from "antd";
import { EyeOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startEditarTema } from "../../../store/slices/contenidos/thunks";


export const useColumn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick =(record)=>{
    const {id, nombre, tiempoMaxMinutos, preguntasFinal} = record;
    dispatch(startEditarTema({id, nombre, tiempoMaxMinutos,preguntasFinal}));
    navigate(`/contenidos/detalles/${id}`);
  };

  const columnas = [
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Minutos Examen",
      dataIndex: "tiempoMaxMinutos",
      key: "tiempoMaxMinutos",
      align: "center",
      width: "15%",
    },
    {
      title: "Laminas",
      dataIndex: "laminas",
      key: "laminas",
      width: "10%",
      align: "center",
    },
    {
      title: "Preguntas",
      dataIndex: "preguntas",
      key: "preguntas",
      width: "10%",
      align: "center",
    },
    {
      title: "",
      key: "id",
      align: "center",
      render: (text, record, index) => (
        <Button
          style={{width:'fit-content'}}
          onClick={()=>handleClick(record) }
          type="primary"
          shape="circle"
          icon={<EyeOutlined />}
          size="small"
        />
      ),
    },
  ]

  return {
    columnas,
  }
}
