import { useSelector } from 'react-redux';
import { Flex, Progress } from 'antd';
export const Circulo = () => {
  const {alumnosActivos, accesosMes} = useSelector(state => state.dashboardReducer);

  return(
    <Flex gap="small" justify='space-evenly'>
      <div className='circle-name'>
        Alumnos Activos
        <Progress type="circle" percent={100} format={() => alumnosActivos} />
      </div>
      <div className='circle-name'>
        Accesos este mes
        <Progress type="circle" percent={100} format={() => accesosMes} />
      </div>
    </Flex>
  )
};