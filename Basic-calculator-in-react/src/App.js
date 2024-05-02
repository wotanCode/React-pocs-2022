import "./App.css";
import React, { useState } from "react";



function App() {
  //Manejadores de estado
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");
  const [result, setResult] = useState(0);

  //Asignar operacion
  const clickNumber = (val) => {
    if (currentOperation === "") {
      setNumber1(number1 + val);
    } else {
      setNumber2(number2 + val);
    }
  }

  //Asignar Operando
  const clickOperation = (val) => {
    setCurrentOperation(val)
  }

  //Resultado
  function getResult() {
    switch (currentOperation) {
      case "+":
        setResult(Number(number1) + Number(number2));
        break;
      case "-":
        setResult(Number(number1) - Number(number2));
        break;
      case "x":
        setResult(Number(number1) * Number(number2));
        break;
      case "÷":
        setResult(Number(number1) / Number(number2));
        break;
      default:
        console.log("error al enviar el resultado");
    }
  }
  //Limpiando todos los datos
  const allClear = () => {
    setNumber1("");
    setNumber2("");
    setCurrentOperation("");
    setResult("");
  }

  //Limpiando El dato actual
  const deleteNumber = () => {
    if (number2 === "") {
      setNumber1("")
    } else if (number2 !== "") {
      setNumber2("")
    }
  }

  return (
    <div className="App">
      <header className="">Calculadora wotanMaxpro-3000</header>
      {/* calculadora */}
      <main className="calculator-grid">
        <div className="output">
          <div className="previous-operand">{currentOperation ? (number1 + currentOperation + number2) : ""}</div>
          <div className="current-operand">{result ? result : (!currentOperation ? number1 : number2)}</div>
        </div>
        <button onClick={allClear} className="span-two">AC</button>
        <button onClick={deleteNumber}>DEL</button>
        <button onClick={() => { clickOperation("÷") }}>÷</button>
        <button onClick={() => { clickNumber(7) }}>7</button>
        <button onClick={() => { clickNumber(8) }}>8</button>
        <button onClick={() => { clickNumber(9) }}>9</button>
        <button onClick={() => { clickOperation("x") }}>x</button>
        <button onClick={() => { clickNumber(4) }}>4</button>
        <button onClick={() => { clickNumber(5) }}>5</button>
        <button onClick={() => { clickNumber(6) }}>6</button>
        <button onClick={() => { clickOperation("+") }}>+</button>
        <button onClick={() => { clickNumber(1) }}>1</button>
        <button onClick={() => { clickNumber(2) }}>2</button>
        <button onClick={() => { clickNumber(3) }}>3</button>
        <button onClick={() => { clickOperation("-") }}>-</button>
        <button onClick={() => { clickNumber(".") }}>.</button>
        <button onClick={() => { clickNumber(0) }}>0</button>
        <button onClick={getResult} className="span-two">=</button>
      </main>
    </div>
  );
}

export default App;
