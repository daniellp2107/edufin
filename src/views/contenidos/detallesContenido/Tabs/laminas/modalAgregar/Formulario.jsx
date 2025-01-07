import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import { InputNum } from "../../../../../../components/input/InputNum";
import { useEffect } from "react";


export const Formulario = ({form, onChangeFormData, onChangeVal}) => {
  const props = {
    beforeUpload: (file) => {
      onChangeFormData(file);
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
          onChangeVal(target,);
        }}
      />
    </>
  );
};
