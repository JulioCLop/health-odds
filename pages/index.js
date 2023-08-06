import Head from "next/head";
import { useState } from "react";
import HealthOddsCalculator from "../components/HeadComponent";
import styles from "../styles/Home.module.css";
import diseaseInfo from "../data/disease-information-pages.json";
import AlertComponent from "../components/AlertComponent";

export async function getStaticProps(context) {
  return {
    props: {
      diseaseInfo,
    },
  };
}

export default function Home(props) {
  const [alertScreen, setAlertScreen] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertDetails, setAlertDetails] = useState("")

  const handleDataValue = (value) => {
    setAlertScreen(value);
  };
  const toggleScreen = () => {
    setAlertScreen((prevState) => !prevState);
  };
  const alertDetail = (title, detail) => {
    setAlertTitle(title)
    setAlertDetails(detail)
  }
  // if (alertScreen == true) {
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.style.overflow = "auto";
  // }
  return (
    <div className={styles.container}>
      <Head>
        <title>Calculate Health Odds</title>
      </Head>
      {alertScreen && <AlertComponent detail={alertDetails} title={alertTitle} toggleScreen={toggleScreen} />}
      <main className={styles.main}>
        <h1>Calculate Health Odds</h1>
        <div>
          <HealthOddsCalculator
            alertDataValue={handleDataValue}
            diseaseInfo={props.diseaseInfo}
            alertDetail={alertDetail}
          />
        </div>
      </main>
    </div>
  );
}
