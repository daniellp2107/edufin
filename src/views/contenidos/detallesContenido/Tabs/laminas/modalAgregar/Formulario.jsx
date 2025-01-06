  import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import { InputNum } from "../../../../../../components/input/InputNum";
import { useDispatch, useSelector } from "react-redux";
import { startAgregarLamina, startPostAgregarLamina } from "../../../../../../store/slices/contenidos/thunks";

export const Formulario = ({
  form,
  formValidations,
  onChangeVal,
  onChangeId,
  messageError,
}) => {
  const dispatch = useDispatch();
  const { tema } = useSelector((state) => state.contenidosReducer);

  const props = {
    beforeUpload: async (file) => {
      const formData = new FormData();
      formData.append("temaID", tema.id);
      formData.append("file", file);
      formData.append("posicion", form.posicion);
      dispatch(startAgregarLamina({
        file,
        formData,
        temaID:tema.id,
        posicion:form?.posicion
      }));
      return false;
    },
  };

  return (
    <>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
        {messageError && <p>{formValidations?.fileValid}</p>}
      </Upload>
      <InputNum
        label={"Posición"}
        name={"posicion"}
        value={form?.posicion}
        onChange={(e) => {
          const target = { name: "posicion", value: e, temaID:tema.id };
          onChangeVal(target);
        }}
        err={formValidations.posicionValid && messageError}
      />
      {messageError && <p>{formValidations.posicionValid}</p>}
    </>
  );
};
