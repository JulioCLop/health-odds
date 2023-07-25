import CustomOptionInput from "./CustomOptionInput";
import comorbidData from "../data/comorbiditiesData";
import styles from "./MedicalConditions.module.css";

export default function MedicalCondition(props) {
  return (
    <div>
      <label>
        Comorbidities {props.comorbidityNum}:
        <select
          name={props.name}
          className={styles.selectStyles}
          value={props.patientData}
          onChange={props.handleInputChange}
        >
          {comorbidData.map((comorbidity) => {
            return (
              <CustomOptionInput
                key={comorbidity.id}
                id={comorbidity.id}
                name={comorbidity.name}
                value={comorbidity.value}
             
              />
            );
          })}
        </select>
      </label>
    </div>
  );
}
