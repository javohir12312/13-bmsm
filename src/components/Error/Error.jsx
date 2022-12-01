import React from "react";
import style from "./Error.module.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={style.error__img}>
      <div className={style.error__text}>
        <div className={style.error__box}>
          <div class={style.liquid}>
            <h2 data-text="404">404</h2>
          </div>
          <p data-text="Page not found" className={style.error__massage}>
            Page not found
          </p>

          <Link className={style.btn} to={"/"}>
            <p className={style.text}>Bosh sahifa</p>
            <div className={style.wave}></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
