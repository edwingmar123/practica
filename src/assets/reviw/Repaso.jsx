import React from "react";
import { useState } from "react";

export function Repaso() {
  const [sumar, setSumar] = useState(0);
  const [array, setArray] = useState([]);
  const [arr, setArr] = useState([]);

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const evaluaA = (e) => {
    setA(Number(e.target.value));
  };

  const evaluaB = (e) => {
    setB(Number(e.target.value));
  };

  const sumarClick = () => {
    const resul = a + b;
    setSumar(resul);

    console.log(resul);

    setArray([...array, resul]);

    setArr([...array, resul]);
    console.log(array);
  };

  const multiplicar = () => {
    const newArray = arr.map((num) => (num % 2 === 0 ? num * 2 : num * 3));
    setArr(newArray);

    console.log(arr);
  };

  return (
    <div>
      <h1>Repaso</h1>
      <input type="number" name="a" onChange={evaluaA} value={a} />
      <input type="number" name="b" onChange={evaluaB} value={b} />
      <button onClick={sumarClick}>Sumar</button>
      <p>{sumar}</p>
      {array.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <button onClick={multiplicar}>Multiplicar</button>
      {arr.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
