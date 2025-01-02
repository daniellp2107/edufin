import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Col, Row, Space, Tooltip } from "antd";
import React from "react";
import { dateFromString } from "../../utils/dateFromString";
import { ExtIcon } from "../extIcon/ExtIcon";

export const DocuentosItem = ({ doc, onClick, showDelete, deleteClick }) => {
  //
  return (
    <Row gutter={[10, 10]} className="rowCats">
      <Col span={2}>
        <ExtIcon ExtIcon={doc.ext} />
      </Col>
      <Col span={6}>{doc.nombre}</Col>
      <Col span={5}>{doc.usuarioCarga}</Col>
      <Col span={5}>{dateFromString(doc.fechaCarga).f1}</Col>
      <Col>
        <Space>
          <Tooltip title={`Ver ${doc.nombre}`}>
            <EyeOutlined
              onClick={() => onClick(doc)}
              style={{ color: "orange", marginRight: 15, fontSize: 20 }}
              className="eyeIcon"
            />
          </Tooltip>
          {showDelete && (
            <Tooltip title={`Eliminar ${doc.nombre}`}>
              <DeleteOutlined
                onClick={() => deleteClick(doc)}
                style={{ color: "orange", marginRight: 15, fontSize: 20 }}
                className="eyeIcon"
              />
            </Tooltip>
          )}
        </Space>
      </Col>
    </Row>
  );
};
