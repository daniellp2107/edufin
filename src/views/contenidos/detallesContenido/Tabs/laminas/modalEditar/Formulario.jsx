import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { InputNum } from "../../../../../../components/input/InputNum";
import { useParams } from "react-router-dom";


export const Formulario = ({form, onChangeFormData, onChangeVal}) => {
  const {id} = useParams();
  const props = {
    beforeUpload: (file) => {
      onChangeFormData(file);
      return false;
    },
  };

  return (
    <>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Elige una imagen para subir</Button>
      </Upload>
      <InputNum
        label={"Posición"}
        name={"posicion"}
        value={form.posicion}
        onChange={(e) => {
          const target = { name: "posicion", value: e};
          onChangeVal(target, id );
        }}
      />
    </>
  );
};
