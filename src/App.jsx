import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter)
  };

  const remove = () =>{
    counter = counter-1
    setCounter(counter)
  }

  return (
    <>
      <h1>The Count {counter}</h1>
      <button onClick={addValue}>Increment</button>
      <button onClick={remove}>Decrement</button>
    </>
  );
}

export default App;
