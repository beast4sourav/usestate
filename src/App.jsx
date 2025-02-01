import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const addCount = () => {
    setCounter(counter + 1);
  };

  const remove = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>The Counter {counter}</h1>
      <button onClick={addCount}>Increment</button>
      <button onClick={remove}>Decrement</button>
    </>
  );
}

export default App;
