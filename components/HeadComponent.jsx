import React, { useEffect, useState } from "react";
import styles from "./HeadComponent.module.css";
import MedicalCondition from "./MedicalConditions";
import OtherDiagnositicDependant from "./OtherDiagnositcDependants";
import MedicalInfo from "../data/medicalInformation.json";
import CustomOptionInput from "./CustomOptionInput";
import symptomData from "../data/DiagnosisData.json";
import { SymptonSection } from "./SymptonSection";
import cls from "classnames";
import Link from "next/link";

function HealthOddsCalculator(props) {
  const originalList = [];
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
    strokeParalysisValue: 0,
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
    pulmonaRiskHyperTrachValue: 0,
    pulmonarySymptomDailyBipapUse: 0,
    pulmonarySymptomDyspnea: 0,
    pulmonarySymptomHomecpap: 0,
    pulmonarySymptomExerciseIntolerance: 0,
    pulmonarySymptomFluidRetention: 0,
    pulmonarySymptomFrequentExacerbations: 0,
    pulmonarySymptomIncreasedHospitalizations: 0,
    pulmonarySymptomCognitiveChanges: 0,
    pulmonarySymptomPoorPrognosis: 0,
    pulmonarySymptomOxygenUseLess: 0,
    pulmonarySymptomOxygenUseHigh: 0,
    pulmonarySymptomOxygenUseMax: 0,
    pulmonarySymptomExerciseIntoleranceWithAmbulation: 0,
    pulmonaryRiskLungFunction: 0,
    pulmonaryRiskCardiacArrest: 0,
    pulmonaryRiskMedicationInteraction: 0,
    pulmonaryRiskPyscChallenges: 0,
    tbiSymptomLossOfConsciousness: 0,
    tbiSymptomSevereHeadaches: 0,
    tbiSymptomNauseaVomiting: 0,
    tbiSymptomConfusion: 0,
    tbiSymptomDizzinessBalance: 0,
    tbiSymptomFatigueDrowsiness: 0,
    tbiSymptomSensory: 0,
    tbiSymptomMoodChanges: 0,
    tbiSymptomSeizures: 0,
    tbiSymptomSlurredSpeech: 0,
    tbiSymptomWeaknessExtremities: 0,
    tbiSymptomCoordinationProblems: 0,
    tbiSymptomPoorMentalStatus: 0,
    tbiRiskHighRiskFall: 0,
    tbiRiskSleepDistubances: 0,
    tbiRiskMemoryProblems: 0,
    tbiRiskProcessingSpeed: 0,
    tbiRiskImpulsivity: 0,
    tbiRiskAgitationRestless: 0,
    nueroSymptomHeadache: 0,
    nueroSymptomSeizures: 0,
    nueroSymptomWeaknessOrParalysis: 0,
    nueroSymptomSensoryChanges: 0,
    nueroSymptomBalanceCoordination: 0,
    nueroSymptomCognitiveImpairment: 0,
    nueroSymptomChangesInVision: 0,
    nueroSymptomSpeechLanguageDifficulties: 0,
    neuroSymptomTremorsMovementDisorder: 0,
    neuroSymptomMemoryLoss: 0,
    neuroSymptomDysphagia: 0,
    neuroSymptomUrinaryBowlDysfunction: 0,
    neuroSymptomSleepDisturbances: 0,
    neuroSymptomAutonomicDysfunction: 0,
    neuroRiskHighFallRisk: 0,
    neuroRiskSleepDistubances: 0,
    neuroRiskMemoryProblems: 0,
    neuroRiskProcessingSpeed: 0,
    neuroRiskImpulsivity: 0,
    neuroRiskAgitationRestless: 0,
    orthoSymptomPain: 0,
    orthoSymptomSwelling: 0,
    orthoSymptomStiffness: 0,
    orthoSymptomInstability: 0,
    orthoSymptomWeakness: 0,
    orthoSymptomLimitedMobility: 0,
    orthoSymptomClickingPopping: 0,
    orthoSymptomNumbnessTingling: 0,
    orthoSymptomReducedFunction: 0,
    orthoRiskHighFallRisk: 0,
    orthoRiskObesity: 0,
    orthoRiskPreviousInjury: 0,
    orthoRiskBonesDensity: 0,
    orthoRiskAutoimmune: 0,
    orthoRiskAutoimmune: 0,
    cardiacSymptomChestPain: 0,
    cardiacSymptomSOB: 0,
    cardiacSymptomPalpitations: 0,
    cardiacSymptomFatigue: 0,
    cardiacSymptomDizziness: 0,
    cardiacSymptomPeripheralEdema: 0,
    cardiacSymptomColdSweat: 0,
    cardiacSypmtomNauseaIndigestion: 0,
    cardiacSymptomJawNeckArmPain: 0,
    cardiacSymptomUnexplainedWeakness: 0,
    cardiacRiskAgeRisk: 0,
    cardiacRiskHighBloodPressure: 0,
    cardiacRiskHighCholesterol: 0,
    cardiacRiskSmoking: 0,
    cardiacRiskDiabetes: 0,
    cardiacRiskObesity: 0,
    cardiacRiskUnhealthyDiet: 0,
    cardiacRiskAlcoholDrugAbuse: 0,
    cardiacRiskSleepDisorder: 0,
    burnsSymptomRednessPain: 0,
    burnsSymptomBlisters: 0,
    burnsSymptomWhiteCharred: 0,
    burnsSymptomDifficultyBreathing: 0,
    burnsSymptomSwelling: 0,
    burnsSymptomPeelingSkin: 0,
    burnsSymptomShock: 0,
    burnsRiskInfection: 0,
    burnsRiskHypovolemia: 0,
    burnsRiskInhalationInjury: 0,
    burnsRiskEmotional: 0,
  };

  const [patientData, setPatientData] = useState(initialState);
  const [improvementOdds, setImprovementOdds] = useState(0);
  const [acuityMessage, setAcuityMessage] = useState("");
  const [alertStyles, setAlertStyles] = useState("");
  const [alertText, setAlertText] = useState("");
  const [marginBottom, setMarginBottom] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [listDisease, setListDisease] = useState(originalList);
  const { alertDataValue, alertDetail, diseaseInfo } = props;

  let disable =
    patientData.stroke === false &&
    patientData.burns === false &&
    patientData.tbi === false &&
    patientData.neuro === false &&
    patientData.ortho === false &&
    patientData.cardiac === false &&
    (patientData.pulmonary === false) === true;

  const calculateHealthOdds = () => {
    const numbers = Object.values(patientData)
      .filter((value) => typeof value === "string")
      .reduce((sum, value) => sum + parseInt(value), 0);
    calculateTheProbability(numbers);

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

  const highAlert = () => {
    const updatedNumArray = listDisease.map((str) => Number(str));
    const removeDoubles = Array.from(new Set(updatedNumArray));
    const sum = removeDoubles.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    if (sum == 130.01) {
      alertDataValue((prevData) => !prevData);
      alertDetail(
        "Severe COPD Morbidities",
        "A patient with severe COPD and heart failure with an ejection fraction of < 40% may experience severe shortness of breath, exercise intolerance, and fluid retention, leading to frequent exacerbations and increased hospitalizations. The combination of these conditions can result in a poor prognosis, with a higher mortality rate compared to having each condition separately. Management involves a comprehensive approach, including medications to optimize heart function and manage COPD symptoms, pulmonary rehabilitation, lifestyle modifications, and close monitoring by healthcare professionals."
      );
    } else if (sum == 60.03) {
      alertDataValue((prevData) => !prevData);
      alertDetail(
        "Severe Diabetes and Chronic Kidney Disease",
        "Uncontrolled diabetes can lead to kidney damage, and when both conditions are severe, it can result in significant complications like kidney failure and cardiovascular issues."
      );
    } else if (sum == 95.02) {
      alertDataValue((prevData) => !prevData);
      alertDetail(
        "Cancer with Severe Malnutrition",
        "Severe malnutrition can worsen the prognosis and treatment outcomes for individuals with advanced cancer, leading to further health deterioration and increased vulnerability to infections."
      );
    } else if (sum == 105.00999999999999) {
      alertDataValue((prevData) => !prevData);
      alertDetail(
        "End-Stage Heart Failure and Pulmonary Hypertension",
        "The combination of severe heart failure and pulmonary hypertension creates a challenging situation where the heart struggles to pump blood effectively, and the blood pressure in the lungs is abnormally high, leading to severe breathing difficulties and limited physical capacity."
      );
    } else if (sum == 152.03) {
      alertDataValue((prevData) => !prevData);
      alertDetail(
        "Severe Alzheimer's Disease and Parkinson's Disease",
        "Coexistence of severe Alzheimer's and Parkinson's can result in significant cognitive impairment, motor difficulties, and a higher risk of falls and injuries."
      );
    } else if (sum == 136.05) {
      alertDataValue((prevData) => !prevData);
      alertDetail(
        "Severe Mental Illness and Cardiovascular Disease",
        "Individuals with severe mental illnesses like schizophrenia or bipolar disorder have a higher risk of cardiovascular problems due to lifestyle factors, side effects of medications, and increased stress"
      );
    } else if (sum == 95.01) {
      alertDataValue((prevData) => !prevData);
      alertDetail(
        "End-Stage Chronic Obstructive Pulmonary Disease (COPD) and Coronary Artery Disease",
        "Severe COPD and coronary artery disease can create a detrimental cycle, where poor lung function strains the heart, and reduced blood flow to the heart further impairs lung function."
      );
    } else if (sum === 30.09) {
      alertDataValue((prevData) => !prevData);
      alertDetail(
        "Oxygen Use To High",
        "please check with with appropriate team to verify admission qualification."
      );
    }
  };
  const calculateTheProbability = (points) => {
    const percentage = Math.floor((points / 250) * 100);
    setPercentage(percentage);
    highAlert();
  };

  function qualifyingValueHelper(
    list,
    value,
    qualify1 = 0,
    qualify2,
    qaulify3
  ) {
    if (value === qualify1) {
      list.push(value);
    } else if (value === qualify2) {
      list.push(value);
    } else if (value === qaulify3) {
      list.push(value);
    }
  }

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    let inputValue;
    // End-stage COPD and Heart failure (ejection fraction <= 40%)
    qualifyingValueHelper(listDisease, value, "65", "65.01");
    // Severe Diabetes and Chronic Kidney Disease
    qualifyingValueHelper(listDisease, value, "20", "40.03");
    // Cancer with Severe Malnutrition
     qualifyingValueHelper(listDisease, value, "20.02", "75");
    //End-Stage Heart Failure and Pulmonary Hypertension
     qualifyingValueHelper(listDisease, value, "40", "65");
    // Severe Alzheimer's Disease and Parkinson's Disease
     qualifyingValueHelper(listDisease, value, "76", "76.03");
    // Severe Mental Illness and Cardiovascular Disease
     qualifyingValueHelper(listDisease, value, "60", "76.05");
    // End-Stage Chronic Obstructive Pulmonary Disease (COPD) and Coronary Artery Disease
    qualifyingValueHelper(listDisease, value, "30", "65.01");
     qualifyingValueHelper(listDisease, value, "0", "30.09");
    // oxygen use to high Alert
    if (value === "0") {
      listDisease.push(value);
    } else if (value === "30.09") {
      listDisease.push(value);
    }
    // ----------------End-----------------
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
    setListDisease(originalList);
  };

  useEffect(() => {
    if (patientData.stroke === true) {
      setMarginBottom("strokeContainerMargin");
    } else if (patientData.tbi === true) {
      setMarginBottom("strokeContainerMargin");
    } else if (patientData.burns === true) {
      setMarginBottom("strokeContainerMargin");
    } else if (patientData.ortho === true) {
      setMarginBottom("strokeContainerMargin");
    } else if (patientData.neuro === true) {
      setMarginBottom("strokeContainerMargin");
    } else if (patientData.cardiac === true) {
      setMarginBottom("strokeContainerMargin");
    } else if (patientData.pulmonary === true) {
      setMarginBottom("strokeContainerMargin");
    } else {
      setMarginBottom("");
    }
  }, [marginBottom, patientData, listDisease]);

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
                className={styles.innerSymptomList}
                type="checkbox"
                data={symptomData[1].stroke.symptoms}
                onChange={selectOptionChange}
              />
            </div>
            <OtherDiagnositicDependant
              type="checkbox"
              handleInputChange={handleInputChange}
              selectOptionChange={selectOptionChange}
              riskData={symptomData[1].stroke.risk}
            />
            <div className={styles.buttonInfoContainer}>
              <Link href={`../disease-info/${diseaseInfo[0].id}`}>
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
                className={styles.innerSymptomList}
                type="checkbox"
                data={symptomData[2].tbi.symptoms}
                onChange={selectOptionChange}
              />
            </div>
            <OtherDiagnositicDependant
              type="checkbox"
              handleInputChange={handleInputChange}
              selectOptionChange={selectOptionChange}
              riskData={symptomData[2].tbi.risk}
            />
            <div className={styles.buttonInfoContainer}>
              <Link href={`../disease-info/${diseaseInfo[1].id}`}>
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
                className={styles.innerSymptomList}
                type="checkbox"
                data={symptomData[3].neuro.symptoms}
                onChange={selectOptionChange}
              />
            </div>
            <OtherDiagnositicDependant
              type="checkbox"
              handleInputChange={handleInputChange}
              selectOptionChange={selectOptionChange}
              riskData={symptomData[3].neuro.risk}
            />
            <div className={styles.buttonInfoContainer}>
              <Link href={`../disease-info/${diseaseInfo[2].id}`}>
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
                className={styles.innerSymptomList}
                type="checkbox"
                data={symptomData[4].ortho.symptoms}
                onChange={selectOptionChange}
              />
            </div>
            <OtherDiagnositicDependant
              type="checkbox"
              handleInputChange={handleInputChange}
              selectOptionChange={selectOptionChange}
              riskData={symptomData[4].ortho.risk}
            />
            <div className={styles.buttonInfoContainer}>
              <Link href={`../disease-info/${diseaseInfo[3].id}`}>
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
                className={styles.innerSymptomList}
                type="checkbox"
                data={symptomData[5].cardiac.symptoms}
                onChange={selectOptionChange}
              />
            </div>
            <OtherDiagnositicDependant
              type="checkbox"
              handleInputChange={handleInputChange}
              selectOptionChange={selectOptionChange}
              riskData={symptomData[5].cardiac.risk}
            />
            <div className={styles.buttonInfoContainer}>
              <Link href={`../disease-info/${diseaseInfo[4].id}`}>
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
                className={styles.innerSymptomList}
                type="checkbox"
                data={symptomData[0].pulmonary.symptoms}
                onChange={selectOptionChange}
              />
            </div>
            <OtherDiagnositicDependant
              type="checkbox"
              handleInputChange={handleInputChange}
              selectOptionChange={selectOptionChange}
              riskData={symptomData[0].pulmonary.risk}
            />
            <div className={styles.buttonInfoContainer}>
              <Link href={`../disease-info/${diseaseInfo[5].id}`}>
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
                className={styles.innerSymptomList}
                type="checkbox"
                data={symptomData[6].burns.symptoms}
                onChange={selectOptionChange}
              />
            </div>
            <OtherDiagnositicDependant
              type="checkbox"
              handleInputChange={handleInputChange}
              selectOptionChange={selectOptionChange}
              riskData={symptomData[6].burns.risk}
            />
            <div className={styles.buttonInfoContainer}>
              <Link href={`../disease-info/${diseaseInfo[6].id}`}>
                <button>Burns Info</button>
              </Link>
            </div>
            <hr />
          </div>
        )}
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={cls(
            disable && styles.disabledBtn,
            !disable && styles.calculateBtn
          )}
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
