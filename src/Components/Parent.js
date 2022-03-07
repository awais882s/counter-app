import Child from "./Child";
import Button from "./Button";
function Parent() {
  return (
    <div>
      This Is Parent Components
      <Child></Child>
      <Button color="red" title="HTML Tags"></Button>
    </div>
  );
}
export default Parent;
