import React from "react";
import styles from "../styles/Navigation.module.css";
import { Link } from "react-router-dom";
import { homePath } from "../routes/HomeRoute";
import { medicationPath } from "../../medication/routes/MedicationRoute";

export const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <nav>
          <Link to={homePath}>Home</Link>
          <Link to={medicationPath}>My Medications</Link>
        </nav>
      </div>
    </div>
  );
};
