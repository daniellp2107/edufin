import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Switch } from 'antd'
import dayjs from 'dayjs'
import { CheckCircleOutlined, CloseCircleOutlined, EyeOutlined,  } from '@ant-design/icons'
import { startActualizarUsuario, startSetUsuarioActual } from '../../../store/slices/usuarios/thunks'
import { crearDatosActualizar } from '../../../utils/crearUsuarioActualizar'

export const useColumns = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleClick =(id)=>{
    dispatch(startSetUsuarioActual(id));
    navigate(`/usuarios/${id}`);
  };

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
      render:(text, record, index)=>(
        <span > {dayjs(record.fechaLimite).format('DD/MM/YYYY')} </span>
      )
    },
    {
      title: "Ultimo Acceso",
      dataIndex: "ultimoLogin",
      key: "ultimoLogin",
      width: "10%",
      align: "center",
      render:(text, record, index)=>(
        <span > {record.ultimoLogin ? dayjs(record.ultimoLogin).format('DD/MM/YYYY') : <>---</>} </span>
      )
    },
    {
      title: "Alumno",
      dataIndex: "esAlumno",
      width: "2%",
      align: "center",
      render: (text, record, index) => {
        const {esAlumnio} = record;
        return <span> 
        {
          esAlumnio 
            ? <CheckCircleOutlined style={{ color: "orange" }}/> 
            : <CloseCircleOutlined style={{ color: "red" }} />
        } 
        </span>
      },
    },
    {
      title: "Admin",
      dataIndex: "esAdmin",
      width: "2%",
      align: "center",
      render: (text, record, index) => {
        const {esAdmin} = record;
        return <span> 
        {
          esAdmin 
            ? <CheckCircleOutlined style={{ color: "orange" }}/> 
            : <CloseCircleOutlined style={{ color: "red" }} />
        } 
        </span>
      },
    },
    {
      title: 'Activo',
      dataIndex: 'estaActivo',
      width: "2%",
      align: "center",
      render:(text, record, index)=>{
        // console.log(text, record, index)
        return <Switch
                  size='small'
                  value={record.estaActivo}
                  onChange={(value) => {
                    let target = { name: 'estaActivo', value: value }
                    dispatch(startActualizarUsuario(crearDatosActualizar(target, record)));
                  }}
                />
      },
    },
    {
      title: "",
      key: "id",
      width: "2%",
      align: "center",
      render: (text, record, index) => (
        <span 
          style={{cursor:'pointer'}} 
          onClick={()=>handleClick(record.usuarioID) }
        ><EyeOutlined />
        </span>
      ),
    },

  ]
  return {
    columnas,
  }
}
