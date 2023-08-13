import CustomCheckInput from "./CustomCheckInput";
import styles from "./OtherDiagnositcDependants.module.css";





export default function OtherDiagnositicDependant(props) {
  const { riskData, type, selectOptionChange } = props;

  return (
    <div className={styles.mainContainer}>
      <hr />
      <h4>Risk Factors:</h4>
      <div className={styles.symptomList}>
        {riskData.map(r => {
          return (
            <>
              <div className={styles.innerSymptomList}>
                <label>
                  {r.name}
                  <CustomCheckInput
                    className={styles.symptomDiv}
                    type={type}
                    name={r.inputValue}
                    onChange={selectOptionChange}
                    value={r.value}
                  />
                </label>
              </div>
            </>
          );
        })}
       
     
      </div>
    </div>
  );
}
