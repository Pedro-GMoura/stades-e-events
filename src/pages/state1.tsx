import { useState } from "react";

export const StatePage = () => {
  let [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="w-screen h-screen flex-col flex justify-center items-center">
      <h1 className="mb-5">{count}</h1>
      <button className="bg-blue-300 p-2 rounded-2xl" onClick={handleClick}>
        Adicionar
      </button>
    </div>
  );
};

export default StatePage;
