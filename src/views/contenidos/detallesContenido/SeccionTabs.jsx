import { Tabs } from "antd";
import { Preguntas } from "./Tabs/preguntas/Preguntas";
import { Laminas } from "./Tabs/laminas/Laminas";


export const SeccionTabs = () => {

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
