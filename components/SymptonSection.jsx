import CustomCheckInput from "./CustomCheckInput";
import styles from './SymptonSection.module.css';

export const SymptonSection = (props) => {
  return (
    <>
      <h4>Symptoms:</h4>
      <div className={styles.symptomList}>
        <div>
          <label>
            Paralysis or weakness
            <CustomCheckInput
              type={"checkbox"}
              name="strokeParalysisOrWeaknessValue"
              onChange={props.onChange}
              value="10"
            />
          </label>
        </div>
        <div>
          <label>
            Numbness or loss of sensation
            <CustomCheckInput
              type="checkbox"
              name="strokeNumbnessOrLossOfSensationValue"
              onChange={props.onChange}
              value="10"
            />
          </label>
        </div>
        <div>
          <label>
            Speech difficulties
            <CustomCheckInput
              type="checkbox"
              name="strokeSpeechDifficultiesValue"
              onChange={props.onChange}
              value="10"
            />
          </label>
        </div>
        <div>
          <label>
            Vision problems
            <CustomCheckInput
              type="checkbox"
              name="strokeVisionProblemsValue"
              onChange={props.onChange}
              value="10"
            />
          </label>
        </div>
        <div>
          <label>
            Coordination and balance issues
            <CustomCheckInput
              type="checkbox"
              name="strokeCoordinationValue"
              onChange={props.onChange}
              value="10"
            />
          </label>
        </div>
        <div>
          <label>
            Cognitive changes
            <CustomCheckInput
              type="checkbox"
              name="strokeCognitiveChangesValue"
              onChange={props.onChange}
              value="10"
            />
          </label>
        </div>
        <div>
          <label>
            Fatigue and weakness
            <CustomCheckInput
              type="checkbox"
              name="strokeFatigueAndWeaknessValue"
              onChange={props.onChange}
              value="10"
            />
          </label>
        </div>
      </div>
    </>
  );
}
