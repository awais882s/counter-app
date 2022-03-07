
// import Parent from "./Components/Parent";
// for counter app
import Button from "./Button";

function Counter(props) {
  return (
    <div className="App">
      {/* <Parent></Parent> */}
      <Button data={props.Sampledata}></Button>
      <Button data={props.Sampledata1}></Button>
      <Button data={props.Sampledata2}></Button>
      <Button data={props.Sampledata3}></Button>
    </div>
  );
}

export default Counter;
