import React from "react";
import styles from "../styles/MedicationCard.module.css";

export const MedicationCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          <h1 className={styles.title}>Pradaxa</h1>
          <p className={styles.body}>6:00AM</p>
          <p className={styles.body}>1 capsule</p>
          <button className={styles.button}>Confirm</button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.content}>
          <h1 className={styles.title}>Pradaxa</h1>
          <p className={styles.body}>6:00PM</p>
          <p className={styles.body}>1 capsule</p>
          <button className={styles.button}>Confirm</button>
        </div>
      </div>
    </div>
  );
};
