import { ambiente, nameProject, ver } from "../const/url";
import { useSelector } from "react-redux";

export const Ver = () => {
  const { backendVer } = useSelector((state) => state.userReducer);
  return (
    <div
      style={{
        textAlign: "center",

        fontSize: 11,
        color: "#001628",
      }}
    >
      {nameProject} {ver} {ambiente} | B {backendVer}
    </div>
  );
};
