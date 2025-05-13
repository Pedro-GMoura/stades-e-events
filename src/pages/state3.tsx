import { useState } from "react";

export const StatePage = () => {

    const [dados, setDados] = useState('')

  function handleClick() {
    alert(dados)
  }

  return (
    <div className="w-screen h-screen flex-col flex justify-center items-center">
      <input 
      type="text" 
      className="border border-amber-200"
      value={dados}
      placeholder="Digite seus dados"
      onChange={(event) => setDados(event.target.value)}
      
      />

      <button className="bg-blue-300 p-2 rounded-2xl" onClick={handleClick}>
        Mostrar conteúdo digitado
      </button>
    </div>
  );
};

export default StatePage;
