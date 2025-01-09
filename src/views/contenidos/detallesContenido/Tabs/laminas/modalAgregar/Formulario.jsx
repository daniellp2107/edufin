import { UploadOutlined } from "@ant-design/icons";
import { Alert, Button, message, Upload } from "antd";
import { InputNum } from "../../../../../../components/input/InputNum";


export const Formulario = ({form, formValidation, onChangeFormData, onChangeVal, messageError}) => {
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
          const target = { name: "posicion", value: e };
          onChangeVal(target);
        }}
      />
    </>
  );
};
