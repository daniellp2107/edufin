import { EyeOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const useColumns = () => {
  const navigate = useNavigate();
  const handleClick =(id)=>{

    navigate(`/usuarios/${id}`);
  }

  const columnas = [
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
      width: "15%",
    },
    {
      title: "Fecha Limite",
      dataIndex: "fechaLimite",
      key: "fechaLimite",
      width: "10%",
      align: "center",
    },
    {
      title: "Ultimo Acceso",
      dataIndex: "ultimoLogin",
      key: "ultimoLogin",
      width: "10%",
      align: "center",
    },
    {
      title: "Rol",
      key: "id",
      width: "2%",
      align: "center",
      render: (text, record, index) => {
        const {esAdmin,esAlumno} = record
        return <span> {esAdmin ? 'Admin' : 'Alumno'} </span>
      },
    },
    {
      title: "",
      key: "id",
      width: "2%",
      align: "center",
      render: (text, record, index) => (
        <Button
          onClick={()=>handleClick(record.usuarioID) }
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
