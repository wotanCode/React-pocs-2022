import { useState } from "react/cjs/react.development";
import "./App.css";

function App() {
  const [r1, setR1] = useState("");
  const [valid1, setValid1] = useState(false)

  //Boton para validar RUN/RUT
  const rut1 = (event) => {
    event.preventDefault();
    //RUN/RUT
    console.log("RUN/RUT Ingresado: "+r1);
    //Extraemos el ultimo valor del RUN/RUT
    let identificador = r1.slice(-1)
    //En caso de K, lo convertimos en k
    if (identificador === "K")  { identificador = "k"}
    //Capturamos el numero del rut sin el identificador
    let numero = r1.substring(0, r1.length - 2);

    //Verificamos en consola si esta okey
    console.log("El numero del R es: ", numero)
    console.log("El identificador es: ", identificador)

    //Se crean algunas variables auxiliares que se usaran posteriormente
    let multiplicador = 2;
		let ultimodigito = 0;
		let aux = numero;
		let suma = 0;

    //Empieza el ciclo invertido
		for (let i = numero.length; i > 0; i--) {
			ultimodigito = parseInt(aux.slice(-1));
			console.log("El ultimo digito es: " + ultimodigito + " se multiplica por " + multiplicador);
			suma = suma + ultimodigito * multiplicador;
			console.log("La suma es: " + suma);
			aux = aux.substring(0, aux.length - 1);
			console.log("Lo que queda es: " + aux);
			multiplicador++;
			if (multiplicador === 8) {
				multiplicador = 2;
			}
		}
		let modulo = 11 - (suma % 11);
		let resultado = "";
		if (modulo === 11) {
			resultado = "0";
		} else if (modulo === 10) {
			resultado = "K";
		} else {
			resultado = modulo.toString();
		}
		console.log("El validador es: " + modulo);
		if (resultado === identificador.toString()) {
			console.log("El validador es correcto");
			return setValid1(true);
		} else {
			console.log("El validador NO es correcto");
			return setValid1(false);
		}
    
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>RUN/RUT Validator</h1>
      </header>
      <main className="App-main">
        <h2>1° Metodo</h2>
        <form>
          <input
            className="inputs"
            placeholder="xxxxxxxxx-x"
            //Se desestructura el el evente "e" para solo guardar eso en el useState
            onChange={(e) => setR1(e.target.value)}
          ></input>
          <p className="legenda">
            Ingresa el rut bajo el siguiente formato: 11111111-1
          </p>
          <button onClick={(event) => rut1(event)} className="checks">
            Check
          </button>
          {
            valid1 === true ?
            <p>RUN/RUT Valido</p>
            :
            <p>RUN/RUT Invalido</p>
          }
          
        </form>
      </main>
    </div>
  );
}

export default App;
