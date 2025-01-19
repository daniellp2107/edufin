import { Card, Divider } from 'antd';
import { EditarUsuario } from './editarUsuario/EditarUsuario';
import { MostrarDetalles } from './mostrarDetalles/MostrarDetalles';

export const DetalleUsuario = () => {

  return (
    <Card title='Detalles de Usuario'>
      <EditarUsuario />
      <Divider />
      <MostrarDetalles />
    </Card>
  )
}
