import CustomCheckInput from "./CustomCheckInput";
import styles from "./SymptonSection.module.css";



export const SymptonSection = (props) => {
  const {data, className, type, onChange} = props;

  return (
    <>
      <h4>Symptoms:</h4>
      <div className={styles.symptomList}>
        {data.map((s) => {
          return (
            <>
              <div className={className}>
                <label>
                     {s.name}
                  <CustomCheckInput
                    className={styles.symptomStyles}
                    type={type}
                    name={s.inputValue}
                    onChange={onChange}
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
