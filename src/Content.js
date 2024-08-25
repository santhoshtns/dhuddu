import React from "react";
import { useState } from "react";

const Content = () => {

  function handleNameChange() {
    const names = ["Earn", "Grow", "Give"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  function namee() {
    return console.log('Visit santhosh')
  }

  const [count, setCount] = useState(99)
  const [name, setName] = useState(() => namee())

  const incrementFunction = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const decrementFunction = () => {
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <main>
      <p > Lets Earn Money </p>
      <button> Subscribe </button>
      <button onClick={decrementFunction}>-</button>
      <span>{count}</span>
      <button onClick={incrementFunction}>+</button>
    </main>
  )
}

export default Content;
