import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {

  const [counter, setCounter] = useState(20);

  const incrementCounter = () => {
    const newValue = counter + 3;
    setCounter(newValue)
  }
  
  return (
    <>
      <h1>Hello Devstructors</h1>
      <h2>Welcome to patata project</h2>

      <Navbar />

      <section className="box counter-container">
        <h2>Number of clicks: {counter}</h2>
        <button onClick={incrementCounter}>Click me</button>
      </section>
    </>
  );
}

export default App;
