export default function CustomOptionInput(props) {
  const { value, name } = props;

  return (
    <>
      <option value={value} name={name}>
        {name}
      </option>
    </>
  );
}
