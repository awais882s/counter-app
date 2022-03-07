function Button(props) {
  console.log("Props:", props);
  let some = "button created";
  return (
    <div>
      <button data={some} style={{ color: props.color }}>
        {props.title}
      </button>
    </div>
  );
}
export default Button;
