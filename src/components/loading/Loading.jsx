import { Spin } from "antd";
import React from "react";

export default function Loading() {
  return (
    <div style={{ textAlign: "center", paddingTop: 50 }}>
      <Spin size="large" />
    </div>
  );
}
