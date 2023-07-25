import React, { useEffect, useState } from "react";
import styles from "./HeadComponent.module.css";
import MedicalCondition from "./MedicalConditions";
import OtherDiagnositicDependant from "./OtherDiagnositcDependants";
import MedicalInfo from "../data/medicalInformation.json";
import CustomOptionInput from "./CustomOptionInput";
import { SymptonSection } from "./SymptonSection";
import cls from 'classnames';
import Link from "next/link";




function HealthOddsCalculator(props) {
  const initialState = {
    stroke: false,
    strokeValue: 0,
    tbi: false,
    ortho: false,
    neuro: false,
    cardiac: false,
    pulmonary: false,
    burns: false,
    motorFunctionStroke: 0,
    motorFunctionTbi: 0,
    motorFunctionNeuro: 0,
    motorFunctionOrtho: 0,
    motorFunctionCardiac: 0,
    motorFunctionBurns: 0,
    comorbiditiesCardiac: 0,
    comorbiditiesCardiac2: 0,
    comorbiditiesCardiac3: 0,
    comorbiditiesStroke: 0,
    comorbiditiesStroke2: 0,
    comorbiditiesStroke3: 0,
    comorbiditiesTbi: 0,
    comorbiditiesTbi2: 0,
    comorbiditiesTbi3: 0,
    comorbiditiesNeuro: 0,
    comorbiditiesNeuro2: 0,
    comorbiditiesNeuro3: 0,
    comorbiditiesOrtho: 0,
    comorbiditiesOrtho2: 0,
    comorbiditiesOrtho3: 0,
    comorbiditiesBurns: 0,
    comorbiditiesBurns2: 0,
    comorbiditiesBurns3: 0,
    secondaryDiagnosisStroke: 0,
    strokeNumbnessOrLossOfSensationValue: 0,
    strokeParalysisOrWeaknessValue: 0,
    strokeSpeechDifficultiesValue: 0,
    strokeVisionProblemsValue: 0,
    strokeCoordinationValue: 0,
    strokeCognitiveChangesValue: 0,
    strokeFatigueAndWeaknessValue: 0,
    strokeRiskSmokingValue: 0,
    strokeRiskHighCholesterolValue: 0,
    strokeRiskObesityValue: 0,
    strokeRiskExcessiveAlcoholValue: 0,
    strokeRiskUseOfDrugsValue: 0,
    strokeRiskPreviousStrokeValue: 0,
    strokeRiskPreviousAdmissionValue: 0,
    strokeRiskHyperTensionValue: 0,
    strokeRiskHyperTrachValue: 0,
  };

  const [patientData, setPatientData] = useState(initialState);
  const [improvementOdds, setImprovementOdds] = useState(0);
  const [acuityMessage, setAcuityMessage] = useState("");
  const [alertStyles, setAlertStyles] = useState("");
  const [alertText, setAlertText] = useState("");
  const [marginBottom, setMarginBottom] = useState("")
  const [percentage, setPercentage] = useState(0)

  let disable =
    patientData.stroke === false &&
    patientData.burns === false &&
    patientData.tbi === false &&
    patientData.neuro === false &&
    patientData.ortho === false &&
    patientData.cardiac === false &&
    (patientData.pulmonary === false) === true;

  
  
  const calculateHealthOdds = (props) => {
    const numbers = Object.values(patientData)
      .filter((value) => typeof value === "string")
      .reduce((sum, value) => sum + parseInt(value), 0);
    calculateTheProbability(numbers)
  

    if (numbers > 0 && numbers <= 80) {
      setAcuityMessage("this is a great patient for rehab at pam");
      setAlertText("Good Rehab Candidate");
      setAlertStyles("greenFlagAlert");
    } else if (numbers > 80 && numbers <= 150) {
      setAcuityMessage(
        "this is a risky patient.discuss with team for furthur instructions."
      );
      setAlertText("Yellow Flag Alert");
      setAlertStyles("yellowFlagAlert");
    } else if (numbers > 150) {
      setAcuityMessage(
        "this is a red flag patient. Please procced with caution and commincate with CEO and Dr. Marrington"
      );
      setAlertText("Red Flag Alert");
      setAlertStyles("redFlagAlert");
    } else {
      setAcuityMessage("");
    }
    setImprovementOdds(numbers);
  };

  const calculateTheProbability = (points) => {
    const percentage = Math.floor((points / 250) * 100);
    setPercentage(percentage)
  };


  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    let inputValue;

    if (type === "checkbox") {
      inputValue = checked;
    } else if (type === "number") {
      inputValue = parseInt(value);
    } else {
      inputValue = value;
    }

    setPatientData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const selectOptionChange = (event) => {
    const { name, value, type, checked } = event.target;
    let optionValue;
    if (type === "checkbox") {
      optionValue = checked && value;
    } else {
      optionValue = value;
    }

    setPatientData((prevData) => ({
      ...prevData,
      [name]: optionValue,
    }));

    if (type === "checkbox" && !checked) {
      setPatientData((prevData) => ({
        ...prevData,
        [name]: 0,
      }));
    }
  };
  const ResetOdds = () => {
    setPatientData(initialState);
    setImprovementOdds(0);
    setAcuityMessage("");
  };


  useEffect(() => {
    if (patientData.stroke === true ) {
      setMarginBottom("strokeContainerMargin");
    } else if (patientData.tbi === true) {
       setMarginBottom("strokeContainerMargin");
    } else if (patientData.burns === true) {
      setMarginBottom("strokeContainerMargin")
    } else if (patientData.ortho === true) {
      setMarginBottom("strokeContainerMargin")
    } else if (patientData.neuro === true) {
      setMarginBottom("strokeContainerMargin")
    } else if (patientData.cardiac === true) {
      setMarginBottom("strokeContainerMargin")
    } else if (patientData.pulmonary === true) {
      setMarginBottom("strokeContainerMargin")
    } else {
      setMarginBottom("");
    }
   
  }, [marginBottom, patientData])
 
  return (
    <div className={styles["health-odds-calculator"]}>
      <div className={styles.textGuide}>
        <small>Calculates Scores from (0-250): </small>
        <br />
        <small>Higher the number, higher the risk! </small>
      </div>

      <h2 className={styles["health-odds-calculator-title"]}>
        Primary Diagnosis
      </h2>
      <div>
        {/* --------stroke Category--------- */}
        <div className={cls(styles.strokeContainer, styles[marginBottom])}>
          {patientData.tbi === false &&
            patientData.burns === false &&
            patientData.ortho === false &&
            patientData.neuro === false &&
            patientData.pulmonary === false &&
            patientData.cardiac === false && (
              <>
                <label>Stroke: </label>
                <input
                  type="checkbox"
                  value={patientData.comorbiditiesStroke}
                  name={"stroke"}
                  disabled={
                    patientData.tbi === true ||
                    patientData.burns === true ||
                    patientData.ortho === true ||
                    patientData.neuro === true ||
                    patientData.pulmonary === true ||
                    patientData.cardiac === true
                  }
                  onChange={handleInputChange}
                />
              </>
            )}
        </div>
        {patientData.stroke === true && (
          <div>
            <div>
              <div>
                <label>Motor Function: </label>
                <select
                  className={styles.selectStyles}
                  name="motorFunctionStroke"
                  value={patientData.motorFunctionStroke}
                  onChange={handleInputChange}
                >
                  
                  {MedicalInfo[0].motorFunctions.map((motor) => {
                    return (
                      <CustomOptionInput
                        key={motor.id}
                        id={motor.id}
                        value={motor.value}
                        name={motor.name}
                      />
                    );
                  })}
                </select>
              </div>
          
              <MedicalCondition
                name="comorbiditiesStroke"
                comorbidityNum="1"
                patientData={patientData.comorbiditiesStroke}
                handleInputChange={handleInputChange}
              />
              <MedicalCondition
                name="comorbiditiesStroke2"
                comorbidityNum="2"
                patientData={patientData.comorbiditiesStroke2}
                handleInputChange={handleInputChange}
              />
              <MedicalCondition
                name="comorbiditiesStroke3"
                comorbidityNum="3"
                patientData={patientData.comorbiditiesStroke3}
                handleInputChange={handleInputChange}
              />
            </div>
            <div className={styles.mainContainer}>
              <SymptonSection
                type="checkbox"
                name="strokeFatigueAndWeaknessValue"
                onChange={selectOptionChange}
              />
            </div>
            <OtherDiagnositicDependant
              name={patientData}
              handleInputChange={handleInputChange}
              selectOptionChange={selectOptionChange}
              patientData={patientData}
              value="10"
            />
            <div className={styles.buttonInfoContainer}>
              <Link href={`../disease-info/${props.diseaseInfo[0].id}`}>
                <button>stroke info</button>
              </Link>
            </div>
            <hr />
          </div>
        )}
      </div>
      <div>
        {/* This is the TBI section */}
        <div className={cls(styles.strokeContainer, styles[marginBottom])}>
          {patientData.stroke === false &&
            patientData.burns === false &&
            patientData.ortho === false &&
            patientData.neuro === false &&
            patientData.pulmonary === false &&
            patientData.cardiac === false && (
              <>
                <label>TBI: </label>
                <input
                  type="checkbox"
                  name="tbi"
                  disabled={
                    patientData.stroke === true ||
                    patientData.burns === true ||
                    patientData.neuro === true ||
                    patientData.ortho === true ||
                    patientData.cardiac === true ||
                    patientData.pulmonary === true
                  }
                  onChange={handleInputChange}
                />
              </>
            )}
        </div>

        {patientData.tbi === true && (
          <div>
            <div>
              <label>
                Motor Function:
                <select
                  className={styles.selectStyles}
                  name="motorFunctionTbi"
                  value={patientData.motorFunctionTbi}
                  onChange={handleInputChange}
                >
                  {MedicalInfo[0].motorFunctions.map((motor) => {
                    return (
                      <CustomOptionInput
                        key={motor.id}
                        id={motor.id}
                        value={motor.value}
                        name={motor.name}
                      />
                    );
                  })}
                </select>
              </label>
            </div>
            <MedicalCondition
              name="comorbiditiesTbi"
              comorbidityNum="1"
              patientData={patientData.comorbiditiesTbi}
              handleInputChange={handleInputChange}
            />
            <MedicalCondition
              name="comorbiditiesTbi2"
              comorbidityNum="2"
              patientData={patientData.comorbiditiesTbi2}
              handleInputChange={handleInputChange}
            />
            <MedicalCondition
              name="comorbiditiesTbi3"
              comorbidityNum="3"
              patientData={patientData.comorbiditiesTbi3}
              handleInputChange={handleInputChange}
            />
            <div className={styles.mainContainer}>
              <SymptonSection
                type="checkbox"
                name="strokeFatigueAndWeaknessValue"
                onChange={selectOptionChange}
              />
            </div>
            <OtherDiagnositicDependant
              name={patientData}
              handleInputChange={handleInputChange}
              selectOptionChange={selectOptionChange}
              patientData={patientData}
              value="10"
            />
            <div className={styles.buttonInfoContainer}>
              <Link href={`../disease-info/${props.diseaseInfo[1].id}`}>
                <button>TBI info</button>
              </Link>
            </div>
            <hr />
          </div>
        )}
      </div>
      <div>
        {/* This is the Nuero section */}
        <div className={cls(styles.strokeContainer, styles[marginBottom])}>
          {patientData.stroke === false &&
            patientData.burns === false &&
            patientData.ortho === false &&
            patientData.tbi === false &&
            patientData.pulmonary === false &&
            patientData.cardiac === false && (
              <>
                <label>Neuro: </label>
                <input
                  type="checkbox"
                  name="neuro"
                  disabled={
                    patientData.stroke === true ||
                    patientData.burns === true ||
                    patientData.tbi === true ||
                    patientData.cardiac === true ||
                    patientData.pulmonary === true ||
                    patientData.ortho === true
                  }
                  onChange={handleInputChange}
                />
              </>
            )}
        </div>

        {patientData.neuro === true && (
          <div>
            <div>
              <label>
                Motor Function:
                <select
                  className={styles.selectStyles}
                  name="motorFunctionNeuro"
                  value={patientData.motorFunctionNeuro}
                  onChange={handleInputChange}
                >
                  {MedicalInfo[0].motorFunctions.map((motor) => {
                    return (
                      <CustomOptionInput
                        key={motor.id}
                        id={motor.id}
                        value={motor.value}
                        name={motor.name}
                      />
                    );
                  })}
                </select>
              </label>
            </div>
            <MedicalCondition
              name="comorbiditiesNeuro"
              comorbidityNum="1"
              patientData={patientData.comorbiditiesNeuro}
              handleInputChange={handleInputChange}
            />
            <MedicalCondition
              name="comorbiditiesNeuro2"
              comorbidityNum="2"
              patientData={patientData.comorbiditiesNeuro2}
              handleInputChange={handleInputChange}
            />
            <MedicalCondition
              name="comorbiditiesNeuro3"
              comorbidityNum="3"
              patientData={patientData.comorbiditiesNeuro3}
              handleInputChange={handleInputChange}
            />
            <div className={styles.mainContainer}>
              <SymptonSection
                type="checkbox"
                name="strokeFatigueAndWeaknessValue"
                onChange={selectOptionChange}
              />
            </div>
            <OtherDiagnositicDependant
              name={patientData}
              handleInputChange={handleInputChange}
              selectOptionChange={selectOptionChange}
              patientData={patientData}
              value="10"
            />
            <div className={styles.buttonInfoContainer}>
              <Link href={`../disease-info/${props.diseaseInfo[2].id}`}>
                <button>Nuero Info</button>
              </Link>
            </div>
            <hr />
          </div>
        )}
      </div>
      <div>
        {/* This is the Ortho section */}
        <div className={cls(styles.strokeContainer, styles[marginBottom])}>
          {patientData.stroke === false &&
            patientData.burns === false &&
            patientData.neuro === false &&
            patientData.tbi === false &&
            patientData.pulmonary === false &&
            patientData.cardiac === false && (
              <>
                <label> Ortho: </label>
                <input
                  type="checkbox"
                  name="ortho"
                  disabled={
                    patientData.stroke === true ||
                    patientData.burns === true ||
                    patientData.tbi === true ||
                    patientData.neuro === true ||
                    patientData.cardiac === true ||
                    patientData.pulmonary == true
                  }
                  onChange={handleInputChange}
                />
              </>
            )}
        </div>
        {patientData.ortho === true && (
          <div>
            <div>
              <label>
                Motor Function:
                <select
                  className={styles.selectStyles}
                  name="motorFunctionOrtho"
                  value={patientData.motorFunctionOrtho}
                  onChange={handleInputChange}
                >
                  {MedicalInfo[0].motorFunctions.map((motor) => {
                    return (
                      <CustomOptionInput
                        key={motor.id}
                        id={motor.id}
                        value={motor.value}
                        name={motor.name}
                      />
                    );
                  })}
                </select>
              </label>
            </div>
            <MedicalCondition
              name="comorbiditiesOrtho"
              comorbidityNum="1"
              patientData={patientData.comorbiditiesOrtho}
              handleInputChange={handleInputChange}
            />
            <MedicalCondition
              name="comorbiditiesOrtho2"
              comorbidityNum="2"
              patientData={patientData.comorbiditiesOrtho2}
              handleInputChange={handleInputChange}
            />
            <MedicalCondition
              name="comorbiditiesOrtho2"
              comorbidityNum="3"
              patientData={patientData.comorbiditiesOrtho2}
              handleInputChange={handleInputChange}
            />
            <div className={styles.mainContainer}>
              <SymptonSection
                type="checkbox"
                name="strokeFatigueAndWeaknessValue"
                onChange={selectOptionChange}
              />
            </div>
            <OtherDiagnositicDependant
              name={patientData}
              handleInputChange={handleInputChange}
              selectOptionChange={selectOptionChange}
              patientData={patientData}
              value="10"
            />
            <div className={styles.buttonInfoContainer}>
              <Link href={`../disease-info/${props.diseaseInfo[3].id}`}>
                <button>Ortho Info</button>
              </Link>
            </div>
            <hr />
          </div>
        )}
      </div>
      <div>
        {/* this is the cardiac section */}
        <div className={cls(styles.strokeContainer, styles[marginBottom])}>
          {patientData.stroke === false &&
            patientData.burns === false &&
            patientData.neuro === false &&
            patientData.tbi === false &&
            patientData.pulmonary === false &&
            patientData.ortho === false && (
              <>
                <label> Cardiac: </label>
                <input
                  type="checkbox"
                  name="cardiac"
                  disabled={
                    patientData.stroke === true ||
                    patientData.burns === true ||
                    patientData.tbi === true ||
                    patientData.neuro === true ||
                    patientData.pulmonary === true ||
                    patientData.ortho === true
                  }
                  onChange={handleInputChange}
                />
              </>
            )}
        </div>
        {patientData.cardiac === true && (
          <div>
            <div>
              <label>
                Motor Function:
                <select
                  className={styles.selectStyles}
                  name="motorFunctionCardiac"
                  value={patientData.motorFunctionCardiac}
                  onChange={handleInputChange}
                >
                  {MedicalInfo[0].motorFunctions.map((motor) => {
                    return (
                      <CustomOptionInput
                        key={motor.id}
                        id={motor.id}
                        value={motor.value}
                        name={motor.name}
                      />
                    );
                  })}
                </select>
              </label>
            </div>
            <MedicalCondition
              name="comorbiditiesCardiac"
              comorbidityNum="1"
              patientData={patientData.comorbiditiesCardiac}
              handleInputChange={handleInputChange}
            />
            <MedicalCondition
              name="comorbiditiesCardiac2"
              comorbidityNum="2"
              patientData={patientData.comorbiditiesCardiac2}
              handleInputChange={handleInputChange}
            />
            <MedicalCondition
              name="comorbiditiesCardiac2"
              comorbidityNum="3"
              patientData={patientData.comorbiditiesCardiac2}
              handleInputChange={handleInputChange}
            />
            <div className={styles.mainContainer}>
              <SymptonSection
                type="checkbox"
                name="strokeFatigueAndWeaknessValue"
                onChange={selectOptionChange}
              />
            </div>
            <OtherDiagnositicDependant
              name={patientData}
              handleInputChange={handleInputChange}
              selectOptionChange={selectOptionChange}
              patientData={patientData}
              value="10"
            />
            <div className={styles.buttonInfoContainer}>
              <Link href={`../disease-info/${props.diseaseInfo[4].id}`}>
                <button>Cardiac Info</button>
              </Link>
            </div>
            <hr />
          </div>
        )}
      </div>
      <div>
        {/* this is the pulmonary section */}
        <div className={cls(styles.strokeContainer, styles[marginBottom])}>
          {patientData.stroke === false &&
            patientData.burns === false &&
            patientData.neuro === false &&
            patientData.tbi === false &&
            patientData.cardiac === false &&
            patientData.ortho === false && (
              <>
                <label>Pulmonary:</label>
                <input
                  type="checkbox"
                  name="pulmonary"
                  disabled={
                    patientData.stroke === true ||
                    patientData.burns === true ||
                    patientData.tbi === true ||
                    patientData.neuro === true ||
                    patientData.ortho === true ||
                    patientData.cardiac === true
                  }
                  onChange={handleInputChange}
                />
              </>
            )}
        </div>
        {patientData.pulmonary === true && (
          <div>
            <div>
              <label>
                Motor Function:
                <select
                  className={styles.selectStyles}
                  name="motorFunctionPulmonary"
                  value={patientData.motorFunctionPulmonary}
                  onChange={handleInputChange}
                >
                  {MedicalInfo[0].motorFunctions.map((motor) => {
                    return (
                      <CustomOptionInput
                        key={motor.id}
                        id={motor.id}
                        value={motor.value}
                        name={motor.name}
                      />
                    );
                  })}
                </select>
              </label>
            </div>
            <MedicalCondition
              name="comorbiditiesPulmonary"
              comorbidityNum="1"
              patientData={patientData.comorbiditiesPulmonary}
              handleInputChange={handleInputChange}
            />
            <MedicalCondition
              name="comorbiditiesPulmonary2"
              comorbidityNum="2"
              patientData={patientData.comorbiditiesPulmonary2}
              handleInputChange={handleInputChange}
            />
            <MedicalCondition
              name="comorbiditiesPulmonary3"
              comorbidityNum="3"
              patientData={patientData.comorbiditiesPulmonary3}
              handleInputChange={handleInputChange}
            />
            <div className={styles.mainContainer}>
              <SymptonSection
                type="checkbox"
                name="strokeFatigueAndWeaknessValue"
                onChange={selectOptionChange}
              />
            </div>
            <OtherDiagnositicDependant
              name={patientData}
              handleInputChange={handleInputChange}
              selectOptionChange={selectOptionChange}
              patientData={patientData}
              value="10"
            />
            <div className={styles.buttonInfoContainer}>
              <Link href={`../disease-info/${props.diseaseInfo[5].id}`}>
                <button>Pulmonary Info</button>
              </Link>
            </div>
            <hr />
          </div>
        )}
      </div>
      <div>
        {/* This is the burn section */}
        <div className={cls(styles.strokeContainer, styles[marginBottom])}>
          {patientData.stroke === false &&
            patientData.pulmonary === false &&
            patientData.neuro === false &&
            patientData.tbi === false &&
            patientData.cardiac === false &&
            patientData.ortho === false && (
              <>
                <label>Burns:</label>
                <input
                  type="checkbox"
                  name="burns"
                  disabled={
                    patientData.stroke === true ||
                    patientData.tbi === true ||
                    patientData.neuro === true ||
                    patientData.ortho === true ||
                    patientData.pulmonary === true ||
                    patientData.cardiac === true
                  }
                  onChange={handleInputChange}
                />
              </>
            )}
        </div>
        {patientData.burns === true && (
          <div>
            <div>
              <label>
                Motor Function:
                <select
                  className={styles.selectStyles}
                  name="motorFunctionBurns"
                  value={patientData.motorFunctionBurns}
                  onChange={handleInputChange}
                >
                  {MedicalInfo[0].motorFunctions.map((motor) => {
                    return (
                      <CustomOptionInput
                        key={motor.id}
                        id={motor.id}
                        value={motor.value}
                        name={motor.name}
                      />
                    );
                  })}
                </select>
              </label>
            </div>
            <MedicalCondition
              name="comorbiditiesBurns"
              comorbidityNum="1"
              patientData={patientData.comorbiditiesBurns}
              handleInputChange={handleInputChange}
            />
            <MedicalCondition
              name="comorbiditiesBurns2"
              comorbidityNum="2"
              patientData={patientData.comorbiditiesBurns2}
              handleInputChange={handleInputChange}
            />
            <MedicalCondition
              name="comorbiditiesBurns3"
              comorbidityNum="3"
              patientData={patientData.comorbiditiesBurns3}
              handleInputChange={handleInputChange}
            />
            <div className={styles.mainContainer}>
              <SymptonSection
                type="checkbox"
                name="strokeFatigueAndWeaknessValue"
                onChange={selectOptionChange}
              />
            </div>
            <OtherDiagnositicDependant
              name={patientData}
              handleInputChange={handleInputChange}
              selectOptionChange={selectOptionChange}
              patientData={patientData}
              value="10"
            />
            <div className={styles.buttonInfoContainer}>
              <Link href={`../disease-info/${props.diseaseInfo[6].id}`}>
                <button>Burns Info</button>
              </Link>
            </div>
            <hr />
          </div>
        )}
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={cls(disable && styles.disabledBtn,!disable && styles.calculateBtn)}
          onClick={calculateHealthOdds}
          disabled={disable}
        >
          Calculate Odds
        </button>
        <button onClick={ResetOdds}>Reset</button>
      </div>

      {improvementOdds > 0 && (
        <>
          <div className={styles[alertStyles]}>
            <p>{alertText}</p>
          </div>
          <div className={styles["odds-results"]}>
            <p>Rehab Assessment score: {`${improvementOdds}`}</p>
            <p>Chance of failure: {`${percentage}%`} </p>
            <p>{acuityMessage}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default HealthOddsCalculator;
