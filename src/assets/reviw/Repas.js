export function Repas() {

 const numero = []

 const multiṕlicarNumero = () => {
    return Array.map( num =>{
    if (numero % 2 === 0) {
      return numero * 2;
    } else {
      return numero * 3;
    }
  })
  };

  const resultado = multiṕlicarNumero(numero);
  console.log(resultado);




    return (
        <div>
            <h1>Repas</h1>
        </div>
    );
}

