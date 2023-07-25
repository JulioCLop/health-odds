import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import detailInfo from "../../data/disease-information-pages.json";
import styles from "../../components/DynamicPage.module.css";
import Image from "next/image";

export function getStaticProps(staticProps) {
  const params = staticProps.params;

  return {
    props: {
      diseaseInfo: detailInfo.find((detail) => {
        return detail.id === params.id;
      }),
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: "stroke" } }, { params: { id: "tbi" } }],
    fallback: true,
  };
}

export default function DiseaseInfo(props) {
  const router = useRouter();
  const query = router.query.id;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{query}</title>
      </Head>
      <div className={styles.mainContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.backBtnContainer}>
            <Link href="/" legacyBehavior>
              <a>
                <span>⬅</span> Back to app
              </a>
            </Link>
          </div>
          <div className={styles.headerContainer}>
            <h1>{router.query.id.toUpperCase()}</h1>
          </div>
          <div className={styles.mainGridContainer}>
            <div>
              <Image
                src={props.diseaseInfo.image}
                width={300}
                height={300}
                alt={props.diseaseInfo.id}
              />
            </div>
            <div>
              <h2>Assessment:</h2>
              <p>{props.diseaseInfo.assess}</p>
            </div>
          </div>

          <div className={styles.rehabDetailContainer}>
            <p>{props.diseaseInfo.detail}</p>
          </div>
        </div>
      </div>
    </>
  );
}
