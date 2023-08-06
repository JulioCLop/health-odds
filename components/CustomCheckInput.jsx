import styles from './CustomeOptionInput.module.css';
import cls from "classnames";


export default function CustomCheckInput(props) {
 

  return (
    <div  className={cls(styles.selectStyles,props.className)}>
      <input
        id={Math.random()}
        className={props.className}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
