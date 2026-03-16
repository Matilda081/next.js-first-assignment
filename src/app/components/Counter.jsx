"use client";

import {useState} from "react";

export default function Counter () {
  const [count, setCount] = useState(0);

  function increase () {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function decrease () {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="counter">
      <h2>Counter</h2>
      <span className="count">{count}</span>
      <button onClick={decrease}>Reduce</button>
      <button onClick={increase}>Increase</button>
    </div>
  );
}