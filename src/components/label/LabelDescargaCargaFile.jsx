import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

export const LabelDescargaCargaFile = ({
  label,
  punteado,
  onClickCarga,
  onClickDescarga,
}) => {
  return (
    <>
      <div className="label">
        <span style={punteado && { borderBottom: "2px dotted orange" }}>
          {label}
        </span>
      </div>
      <div className="valor">
        <Button onClick={onClickDescarga} size="small" type="link">
          <DownloadOutlined /> Descargar
        </Button>
        <Button onClick={onClickCarga} size="small" type="link">
          <UploadOutlined /> Volver a Subir
        </Button>
      </div>
    </>
  );
};
