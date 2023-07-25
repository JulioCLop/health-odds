import CustomCheckInput from "./CustomCheckInput";
import styles from "./OtherDiagnositcDependants.module.css";





export default function OtherDiagnositicDependant(props) {

  return (
    <div className={styles.mainContainer}>
      <hr />
      <h4>Risk Factors:</h4>
      <div className={styles.symptomList}>
        <div>
          <label>
            hypertension
            <CustomCheckInput
              className={styles.symptomDiv}
              type="checkbox"
              name="strokeRiskHyperTensionValue"
              onChange={props.selectOptionChange}
              value="10"
            />
          </label>
        </div>
        <div>
          <label>
            Smoking
            <CustomCheckInput
              className={styles.symptomDiv}
              type="checkbox"
              name="strokeRiskSmokingValue"
              onChange={props.selectOptionChange}
              value="10"
            />
          </label>
        </div>
        <div>
          <label>
            Trach
            <CustomCheckInput
              className={styles.symptomDiv}
              type="checkbox"
              name="strokeRiskTrachValue"
              onChange={props.selectOptionChange}
              value="10"
            />
          </label>
        </div>
        <div>
          <label>
            High cholesterol
            <CustomCheckInput
              className={styles.symptomDiv}
              type="checkbox"
              name="strokeRiskHighCholesterolValue"
              value="10"
              onChange={props.selectOptionChange}
            />
          </label>
        </div>

        <div>
          <label>
            Excessive alcohol <br /> consumption
            <CustomCheckInput
              className={styles.symptomDiv}
              type="checkbox"
              name="strokeRiskExcessiveAlcoholValue"
              onChange={props.selectOptionChange}
              value="10"
            />
          </label>
        </div>
        <div>
          <label>
            Use of illicit drugs
            <CustomCheckInput
              className={styles.symptomDiv}
              type="checkbox"
              name="strokeRiskUseOfDrugsValue"
              onChange={props.selectOptionChange}
              value="10"
            />
          </label>
        </div>
        <div>
          <label>
            Previous stroke
            <CustomCheckInput
              className={styles.symptomDiv}
              type="checkbox"
              name="strokeRiskPreviousStrokeValue"
              onChange={props.selectOptionChange}
              value="10"
            />
          </label>
        </div>
        <div>
          <label>
            Previous admission <br /> {`(within 1 yr)`}
            <CustomCheckInput
              className={styles.symptomDiv}
              type="checkbox"
              name="strokeRiskPreviousAdmissionValue"
              onChange={props.selectOptionChange}
              value="10"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
