import React from "react";
import { Alert } from "../../medication/components/Alert";
import { MedicationCard } from "../../medication/components/MedicationCard";
import styles from "../styles/Home.module.css";

export const Home = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1>Today</h1>
      </header>
      <div>
        <Alert />
      </div>
      <div>
        <MedicationCard />
      </div>
    </div>
  );
};
