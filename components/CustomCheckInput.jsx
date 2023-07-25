
export default function CustomCheckInput(props) {
  return (
    <div  className={props.className}>
      <input
        className={props.className}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
