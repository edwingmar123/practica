import React from "react";
import { useState, useEffect } from "react";

export function SimulaApi() {
 const url = "";

 const fetchApi = async () => {
    const [datos , setDatos] = useState([]);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    setDatos(data);
  };
 useEffect (() => {
    fetchApi();
  }, []);

    return (
        <div>
            <h1>SimulaApi</h1>
            <ul>
        {!datos ? "carrgado...":
        datos.map((item) => {
            return (
                
                    <li>{item.name}</li>
                
            );
        })}
            </ul>
        </div>
    );
}