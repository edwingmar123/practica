import React, { useState } from "react";

export function Estudio() {
  const [numero, setNum] = useState(0); 
  const [array, setArray] = useState([]); 

  
  const multiplicar = () => {
    if (numero % 2 === 0) {
      return numero * 2;
    } else {
      return numero * 3;
    }
  };

  
  const handleInputChange = (e) => {
    setNum(Number(e.target.value)); 
  };

  
  const calcular = () => {
    const resultado = multiplicar(); 
    console.log("Resultado de la operación:", resultado);

    setArray((prevArray) => [...prevArray, numero]); 
  };

  return (
    <div>
      <h1>Estudio</h1>

     
      <input
        value={numero}
        type="number"
        onChange={handleInputChange} 
      />
      <button onClick={calcular}>Calcular</button>

      
      <ul>
        {array.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>

      <ul>
        {array.map((num, index) => (
          <li key={index}>{multiplicar(num)}</li>
        ))}
      </ul>
    </div>
  );
}
