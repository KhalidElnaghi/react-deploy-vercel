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
      <h1>i have just do some changes</h1>
      <button onClick={decreaseCount}>-</button>
      <p className="count">{count}</p>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}

export default App;
