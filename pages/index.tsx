import ComponentC from "../components/componentC";
import { createContext, useState } from "react";
import UseThirdHook from "../components/useThirdHook";
import UseEffectHookFirst from "../components/useEffectHookFirst";
import UseEffectHookSecond from "../components/useEffectHookSecond";

export const userContext = createContext("");
export const emailContext = createContext("");

const Home = () => {
  const [move, setMove] = useState<boolean>(false);

  return (
    <>
      <emailContext.Provider value={"marcel.madaj@gmail.com"}>
        <userContext.Provider value={"Marcel"}>
          <ComponentC />
        </userContext.Provider>
      </emailContext.Provider>
      <UseThirdHook />
      <UseEffectHookFirst move={move} />
      <UseEffectHookSecond />
    </>
  );
};

export default Home;
