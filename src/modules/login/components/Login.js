import React from "react";
import styles from "../styles/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { registerPath } from "../../register/routes/RegisterRoute";
import { homePath } from "../../home/routes/HomeRoute";

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(homePath);
  };
  return (
    <div className={styles.container}>
      <img
        src="./images/kateryna-hliznitsova-Nqj2XWHy4K0-unsplash.jpg"
        alt="cupped hands holding two red gel pills"
        className={styles.img}
      />

      <div className={styles.heading}>
        <h1>
          <span>WELCOME TO</span>
          <br></br>
          Mediminder
        </h1>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          aria-label="email"
          name="email"
          className={styles.input}
          type="text"
          placeholder="Email"
          required
        />

        <input
          aria-label="password"
          name="password"
          className={styles.input}
          type="password"
          placeholder="Password"
          required
        />
        <button className={styles.forgotPasswordButton}>
          Forgot password?
        </button>

        <button className={styles.logInButton} type="submit">
          Log In
        </button>
      </form>

      <span className={styles.span}>{`Don't have an account?`}</span>
      <Link to={registerPath} className={styles.returnToRegisterButton}>
        Create new account
      </Link>
    </div>
  );
};
