import { Divider } from 'antd';
import { useSelector } from 'react-redux';
import { colores } from '../../../../../const/colores';

export const HistorialExamenes = () => {
  const {examenesFinal} = useSelector(state => state.usuariosReducer);

  if (examenesFinal.length === 0) return <p>Sin datos para mostrar</p>

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      {examenesFinal.map(ex =>(
        <>
          <table style={{textAlign:'center', color:colores.label}}>
            <tr>
              <th>Fecha</th>
              <th>Preguntas Correctas</th>
              <th>Preguntas Totales</th>
            </tr>
            <tr>
              <td>{ex.fecha}</td>
              <td>{ex.preguntasCorrectas}</td>
              <td>{ex.preguntasTotales}</td>
            </tr>
          </table>
          <Divider />
        </>
      ))}
    </div>
  )
}
