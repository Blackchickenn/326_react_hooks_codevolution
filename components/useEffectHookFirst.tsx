import { useEffect, useState } from "react";

type UseEffectHookFirstProps = {
  move: boolean;
};

const UseEffectHookFirst: React.FC<UseEffectHookFirstProps> = ({ move }) => {
  const [value, setValue] = useState<number>(0);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    document.title = `Counter is ${value}`;
    console.log("useEffect");
  }, [value]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setValue(value + 1)}>Plus</button>
      <p>{value}</p>
    </div>
  );
};

export default UseEffectHookFirst;
