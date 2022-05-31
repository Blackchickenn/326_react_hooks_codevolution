import { useEffect, useState } from "react";

type useEffectHookSecondProps = {
  e: number;
};

const UseEffectHookSecond: React.FC<useEffectHookSecondProps> = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect Called");
    window.addEventListener("mousemove", logMousePosition);
  }, []);

  useEffect(() => {
    console.log("mouse event");
  }, []);
  return (
    <div>
      Hooks {x} : {y}
    </div>
  );
};

export default UseEffectHookSecond;
