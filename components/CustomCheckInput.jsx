import styles from './CustomeOptionInput.module.css';
import cls from "classnames";


export default function CustomCheckInput(props) {
  const { className, type, name, value, onChange } = props;
 

  return (
    <div  className={cls(styles.selectStyles,className)}>
      <input
        id={Math.random()}
        className={className}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
