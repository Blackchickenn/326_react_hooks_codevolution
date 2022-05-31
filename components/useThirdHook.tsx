import { useState } from "react";
const UseThirdHook = () => {
  const [name, setname] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setname({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setname({ ...name, lastName: e.target.value })}
      />
      <p>My first name is - {name.firstName}</p>
      <p>My last name is - {name.lastName}</p>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
};
export default UseThirdHook;
