import styles from "./AlertComponent.module.css";

const AlertComponent = ({toggleScreen,title, detail}) => {
   
  return (
    <div className={styles.mainContainer}>
      <div className={styles.highAlert}><h3>High Alert</h3></div>
      <div className={styles.headerContainer}>
        <h2>{title}</h2>
      </div>
      <div className={styles.detailContainer}>
        <h3>{detail}</h3>
      </div>
      <div className={styles.buttonWrapper}>
        <button onClick={toggleScreen}>Close</button>
      </div>
    </div>
  );
};

export default AlertComponent;
