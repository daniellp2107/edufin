import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import { InputNum } from "../../../../../../components/input/InputNum";
import { useDispatch, useSelector } from "react-redux";
import { startAgregarLamina, startPostAgregarLamina } from "../../../../../../store/slices/contenidos/thunks";
import { useEffect } from "react";

export const Formulario = ({
  form,
  setForm,
  onChangeVal,
  messageError,
  tema,
  laminaActual,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
  
  }, [form]);
  
  const props = {
    beforeUpload: async (file) => {
      const formData = new FormData();
      formData.append("temaID", tema.id);
      formData.append("file", file);
      formData.append("posicion", form.posicion);
      dispatch(startAgregarLamina({formData: formData, temaID:tema.id, posicion:laminaActual}));
      
      return false;
    },
  };

  return (
    <>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
        {/* {messageError && <p>{formValidations?.fileValid}</p>} */}
      </Upload>
      <InputNum
        label={"Posición"}
        name={"posicion"}
        value={form?.posicion}
        onChange={(e) => {
          const target = { name: "posicion", value: e };
          onChangeVal(target);
        }}
        // err={formValidations.posicionValid && messageError}
      />
      {/* {messageError && <p>{formValidations.posicionValid}</p>} */}
    </>
  );
};