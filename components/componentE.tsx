import ComponentF from "./componentF";
import { emailContext } from "../pages";
import { useContext } from "react";

const ComponentE = () => {
  const email = useContext(emailContext);
  return (
    <div>
      <ComponentF />
      <p>And my email is {email}</p>
    </div>
  );
};

export default ComponentE;
