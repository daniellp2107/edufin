import { Card, Divider } from 'antd';
import { EditarAlumno } from './editarAlumno/EditarAlumno';

export const DetalleUsuario = () => {

  return (
    <Card title='Detalles de Usuario'>
      <EditarAlumno />
      <Divider />
    </Card>
  )
}
