import CustomCheckInput from "./CustomCheckInput";
import styles from "./SymptonSection.module.css";



export const SymptonSection = (props) => {
  
  return (
    <>
      <h4>Symptoms:</h4>
      <div className={styles.symptomList}>
        {props.data.map((s) => {
          return (
            <>
              <div className={props.className}>
                <label>
                     {s.name}
                  <CustomCheckInput
                    className={styles.symptomStyles}
                    type={props.type}
                    name={s.inputValue}
                    onChange={props.onChange}
                    value={s.value}
                  />
                </label>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
