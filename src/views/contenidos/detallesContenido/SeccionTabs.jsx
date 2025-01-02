import { Tabs } from "antd";
import { Preguntas } from "./Tabs/preguntas/Preguntas";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCargarPreguntas } from "../../../store/slices/contenidos/thunks";


export const SeccionTabs = () => {
  const dispatch = useDispatch();
  const {tema} = useSelector(state => state.contenidosReducer);

  useEffect(() => {
    dispatch(startCargarPreguntas(tema.id));
  }, []);
  

  const onChange = (key) => {
    console.log(key);
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
      children: 'Content of Tab Pane 2',
    }
  ];
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
}
