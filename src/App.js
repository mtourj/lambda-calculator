import React, { useState } from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [a, setA] = useState(null);
  const [b, setB] = useState(null);
  const [operator, setOperator] = useState(null);
  const [displayValue, setDisplayValue] = useState(0);

  const calculate = () => {
    if (a !== null) {
      if (b !== null) {
        switch (operator) {
          case "/":
            setA(a / b);
            setDisplayValue(a / b);
            setB(null);
            setOperator(null);
            break;
          case "x":
            setA(a * b);
            setDisplayValue(a * b);
            setB(null);
            setOperator(null);
            break;
          case "-":
            setA(a - b);
            setDisplayValue(a - b);
            setB(null);
            setOperator(null);
            break;
          case "+":
            setA(a + b);
            setDisplayValue(a + b);
            setB(null);
            setOperator(null);
            break;
        }
      } else {
        setDisplayValue(a);
      }
    }
    console.log("A:", a);
    console.log("B:", b);
    console.log("current operator:", operator);
  };

  const operatorPressed = async op => {
    if (b != null) {
      calculate();
    }
    // setDisplayValue(a); Pretty sure this line is unneccessary
    await setOperator(op);
    console.log("A:", a);
    console.log("B:", b);
    console.log("current operator:", operator);
  };

  const numPressed = num => {
    const input = parseInt(`${displayValue}${num}`);

    if (b === null && operator && operator !== "=") {
      setDisplayValue(num);
      setB(parseInt(num));
    } else if (operator) {
      setB(parseInt(input));
      setDisplayValue(input.toString());
    } else {
      setA(parseInt(input));
      setDisplayValue(input.toString());
    }

    console.log("A:", a);
    console.log("B:", b);
    console.log("current operator:", operator);
  };

  const clear = () => {
    setA(null);
    setB(null);
    setOperator(null);
    setDisplayValue("0");
    console.log("A:", a);
    console.log("B:", b);
    console.log("current operator:", operator);
  };

  return (
    <div className="container">
      <Logo />
      <Display val={displayValue} />
      <div className="App">
        <div className="left">
          <Specials clear={clear} />
          <Numbers click={numPressed} />
        </div>
        <div className="right">
          <Operators click={operatorPressed} calc={calculate} />
        </div>
      </div>
    </div>
  );
}

export default App;
