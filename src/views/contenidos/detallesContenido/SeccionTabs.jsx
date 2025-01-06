import { Tabs } from "antd";
import { Preguntas } from "./Tabs/preguntas/Preguntas";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCargarLaminas, startCargarPreguntas } from "../../../store/slices/contenidos/thunks";
import { Laminas } from "./Tabs/laminas/Laminas";


export const SeccionTabs = () => {
  const dispatch = useDispatch();
  // const {tema} = useSelector(state => state.contenidosReducer);

  useEffect(() => {
    // dispatch(startCargarPreguntas(tema.id));
    // dispatch(startCargarLaminas(tema.id));
  }, []);
  

  const onChange = (key) => {
    
  };
  const items = [
    {
      key: '1',
      label: 'Preguntas',
      children: <Preguntas />,
    },
    {
      key: '2',
      label: 'Láminas',
      children: <Laminas />,
    }
  ];
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
}
