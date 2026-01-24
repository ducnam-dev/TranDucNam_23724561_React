import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>

      <h2 style={{ color: count > 10 ? "red" : "black" }}>
        {count}
      </h2>

      <button onClick={increase}>+</button>
      <button onClick={decrease} style={{ margin: "0 10px" }}>
        -
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
