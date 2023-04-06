import React from "react";
import styles from "../styles/Medication.module.css";

export const Medication = () => {
  return (
    <div className={styles.container}>
      <h1>Medication</h1>
      <div className={styles.search}>
        <input
          className={styles.input}
          placeholder="Search by medication"
          aria-label="Search by medication"
          type="text"
        />
      </div>
      <div className={styles.card}>
        <div className={styles.content}>
          <h1 className={styles.title}>Pradaxa</h1>
          <p className={styles.body}>6:00AM</p>
          <p className={styles.body}>1 capsule</p>
          <button className={styles.button}>Edit</button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.content}>
          <h1 className={styles.title}>Pradaxa</h1>
          <p className={styles.body}>6:00PM</p>
          <p className={styles.body}>1 capsule</p>
          <button className={styles.button}>Edit</button>
        </div>
      </div>
    </div>
  );
};
