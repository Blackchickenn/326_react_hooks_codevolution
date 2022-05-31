import { userContext } from "../pages";
import { useContext } from "react";

const ComponentF = () => {
  const user = useContext(userContext);

  return <div>{user}</div>;
};

export default ComponentF;
