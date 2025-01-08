import { UploadOutlined } from "@ant-design/icons";
import { Alert, Button, message, Upload } from "antd";
import { InputNum } from "../../../../../../components/input/InputNum";


export const Formulario = ({form, formValidation, onChangeFormData, onChangeVal, messageError}) => {
  const props = {
    beforeUpload: (file) => {
      const formData = new FormData();
      formData.append("temaID", tema.id);
      formData.append("file", file);
      formData.append("posicion", form.posicion);
      onChangeFormData(file, formData);
      return false;
    },
  };

  return (
    <>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
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
