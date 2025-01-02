import React from "react";

export default function LabelValor({ label, valor, punteado }) {
  return (
    <>
      <div className="label">
        <span style={punteado && { borderBottom: "2px dotted orange" }}>
          {label}
        </span>
      </div>
      <div className="valor">{valor}</div>
    </>
  );
}
