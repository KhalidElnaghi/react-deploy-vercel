import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount((count) => count + 1);
  }
  function decreaseCount() {
    setCount((count) => count - 1);
  }
  return (
    <div className="app">
      <h1> counter</h1>
      <div className="calculator">
        <button onClick={decreaseCount}>-</button>
        <p className="count">{count}</p>
        <button onClick={increaseCount}>+</button>
      </div>
    </div>
  );
}

export default App;
