import { Spin } from "antd";
import { DocuentosItem } from "./DocuentosItem";

export const ListaDocumentos = ({
  documentos,
  onClick,
  loading,
  showDelete,
  deleteClick,
}) => {
  if (documentos.length === 0) return <div>Sin documentos</div>

  return (
    <div>
      <div style={{ textAlign: "center" }}>{loading && <Spin />}</div>

      {documentos.map((a, i) => (
        <DocuentosItem
          onClick={onClick}
          key={i}
          doc={a}
          showDelete={showDelete}
          deleteClick={deleteClick}
        />
      ))}
    </div>
  );
};
