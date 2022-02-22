import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
  };

  return (
    <div className="App">
      <p>{advice}</p>
    </div>
  );
}

export default App;
