import "./App.css";
// import Parent from "./Components/Parent";
// for counter app
// import Counter from "./Components Buttons/Counter";
import Counter1 from "./Conuter App/Counter1";

function App() {
  let Sampledata = {
    color: "red",
    title: "Learn React Js",
    width: "20",
  };
  let Sampledata1 = ["1", "2", "3", "4"];
  let Sampledata2 = "sample string";
  let Sampledata3 = 10;
  return (
    <div className="App">
      {/* <Parent></Parent> */}
      {/* <Counter
        Sampledata={Sampledata}
        Sampledata1={Sampledata1}
        Sampledata2={Sampledata2}
        Sampledata3={Sampledata3}
      ></Counter> */}
      <Counter1></Counter1>
    </div>
  );
}

export default App;
