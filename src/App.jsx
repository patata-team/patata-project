import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [counter, setCounter] = useState(10);

  const reduceCounter = () => {
    const newValue = counter - 1;
    setCounter(newValue);
  };

  return (
    <>
      <h1>Hello Devstructors</h1>
      <h2>Welcome to patata project</h2>

      <Navbar />

      <section className="box counter-container">
        <h2>Number of clicks: {counter}</h2>
        <button onClick={reduceCounter}>Click me</button>
      </section>
    </>
  );
}

export default App;
