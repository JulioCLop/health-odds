import CustomCheckInput from "./CustomCheckInput";
import styles from "./OtherDiagnositcDependants.module.css";





export default function OtherDiagnositicDependant(props) {
  return (
    <div className={styles.mainContainer}>
      <hr />
      <h4>Risk Factors:</h4>
      <div className={styles.symptomList}>
        {props.riskData.map(r => {
          return (
            <>
              <div className={styles.innerSymptomList}>
                <label>
                  {r.name}
                  <CustomCheckInput
                    className={styles.symptomDiv}
                    type={props.type}
                    name={r.inputValue}
                    onChange={props.selectOptionChange}
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
