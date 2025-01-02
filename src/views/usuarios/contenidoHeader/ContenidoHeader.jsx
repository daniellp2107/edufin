import { useState } from "react";
import { Button } from "antd";
import { ModalCrear } from "./modalCrear/ModalCrear";
import { PlusCircleOutlined } from "@ant-design/icons";

export const ContenidoHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{width:'100%', minWidth:'350px' , display:'flex', justifyContent:'flex-end', alignItems:'center', marginBottom:5}}>
      <Button
        style={{ width: 'fit-content', marginBottom: 5 }}
        type="primary"
        onClick={() => setOpen(true)}
      >
        Nuevo Tema
        <PlusCircleOutlined />
      </Button>
      <ModalCrear open={open} setOpen={setOpen} />
    </div>
  );
};
