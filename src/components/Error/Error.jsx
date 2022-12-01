import React from "react";
import styles from "./Error.module.scss"
import {Link} from "react-router-dom";

const Error = () => {
  return (
    <div className={styles.error__img}>
      <div className={styles.error__text}>
        <div className={styles.error__box}>
          <div class={styles.liquid}>
            <h2 data-text="404">404</h2>
          </div>
          <p data-text="Page not found" className={styles.error__massage}>
            Page not found
          </p>

          
          <Link className={styles.btn} to={"/"}>Bosh sahifa</Link>
        </div>
      </div>
    </div>
  )
};

export default Error;
