import { useState } from "react";

export const StatePage = () => {

    const [showArea, setShowArea] = useState(false)

  function handleClick() {
    setShowArea(!showArea)
  }

  return (
    <div className="w-screen h-screen flex-col flex justify-center items-center">

      <button className="bg-blue-300 p-2 rounded-2xl" onClick={handleClick}>
        {showArea ? 'Ocultar' : 'Mostrar'}
      </button>
      {showArea &&
        <div className="bg-amber-400">ÁREA SECRETA</div>
      }
    </div>

  );
};

export default StatePage;
