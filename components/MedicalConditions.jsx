import CustomOptionInput from "./CustomOptionInput";
import comorbidData from "../data/comorbiditiesData";
import styles from "./MedicalConditions.module.css";

export default function MedicalCondition(props) {
  const { comorbidityNum, name, patientData, handleInputChange } = props;
  return (
    <div>
      <label>
        Comorbidities {comorbidityNum}:
        <select
          name={name}
          className={styles.selectStyles}
          value={patientData}
          onChange={handleInputChange}
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
