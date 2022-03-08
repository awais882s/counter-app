import React, { useState } from "react";
function Counter1() {
  let counter = 0;
  const [counter2, setCounter] = useState(0);
  const [name, setName] = useState("Awais");
  const [age, setAge] = useState(18);
  const [price, setPrice] = useState(34.45);
  const incrementHandler = () => {
    counter++;
    // alert("Increment" + counter);
    setCounter(counter2 + 1);
  };
  const decrementHandler = () => {
    counter--;
    // alert("Decrement" + counter);
    setCounter(counter2 - 1);
  };
  console.log("Counter1", counter);
  console.log("Counter2>>", counter2);

  return (
    <div style={{ padding: 50 }}>
      Using Simple Variable:
      <button onClick={decrementHandler}>-</button>
      <span style={{ padding: 20 }}>Counter is : {counter}</span>
      <button onClick={incrementHandler}>+</button>
      <hr />
      Using React State:
      <button onClick={decrementHandler}>-</button>
      <span style={{ padding: 20 }}>Counter is : {counter2}</span>
      <button onClick={incrementHandler}>+</button>
    </div>
  );
}
export default Counter1;
