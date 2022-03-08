function Counter1() {
  let counter = 0;
  const incrementHandler = () => {
    counter++;
    alert("Increment" + counter);
  };
  const decrementHandler = () => {
    counter--;
    alert("Decrement" + counter);
  };
  return (
    <div style={{ padding: 50 }}>
      <button onClick={decrementHandler}>-</button>
      <span style={{ padding: 20 }}>Counter is : {counter}</span>
      <button onClick={incrementHandler}>+</button>
    </div>
  );
}
export default Counter1;
