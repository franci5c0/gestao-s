import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    //funciona como HTML
    <>
      <div className="div-primaria">
        <h1 className="text-yellow-500">TESTANDO O REACT</h1>
      </div>
    </>
  );
}

export default App;
