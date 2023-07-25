import Head from "next/head";
import HealthOddsCalculator from "../components/HeadComponent";
import styles from "../styles/Home.module.css";
import diseaseInfo from '../data/disease-information-pages.json';

export async function getStaticProps(context) {
  return {
    props: {
      diseaseInfo,
    },
  };
}

export default function Home(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Calculate Health Odds</title>
      </Head>

      <main className={styles.main}>
        <h1>Calculate Health Odds</h1>
        <div>
          <HealthOddsCalculator diseaseInfo={props.diseaseInfo} />
        </div>
      </main>
    </div>
  );
}
