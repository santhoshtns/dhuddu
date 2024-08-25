import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Earn");

  function subscribeFunction() {
    const names = ["Earn", "Grow", "Give"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int])
  }

  return (
    <main>
      <p> Lets {name} Money </p>
      <button onClick={subscribeFunction}> Subscribe </button>
    </main>
  );
};

export default Content;
