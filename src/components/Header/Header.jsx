import React, { useState } from "react";
import style from "./Header.module.scss";
import flag from "../image/flag.png";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [check, setCheck] = useState(false);

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.box}>
          <input
            className={style.checkBox}
            type="checkbox"
            id="check"
            checked={check}
          />
          <div className={style.headerTop}>
            <Link className={style.logo} to={"/"}>
              <img src={logo} width={150} height={44} alt="site logo" />
            </Link>
            <div className={style.search}>
              <input type="search" placeholder="Izlash..." />
              <button>Qidiruv</button>
            </div>
            <Link className={style.singin} to={"/login"}>
              <button>Ro'yxatdan o'tish</button>
            </Link>
            <div className={style.singinBox}>
              <label
                className={style.hamburger}
                for={"check"}
                onClick={() => {
                  check ? setCheck(false) : setCheck(true);
                }}
              >
                <div>
                  <span className={style.line}></span>
                  <span className={style.line}></span>
                  <span className={style.line}></span>
                </div>
              </label>
            </div>
          </div>
          <div className={style.hero}>
            <div className={style.heroTop}>
              <img src={flag} width={600} height={229} alt="flag logo" />
              <div>
                <h1 className={style.title}>
                  13 - Sonli Bolalar <br /> Musiqa va San'at Maktabi
                </h1>
              </div>
            </div>
            <div className={style.heroBottom}>
              <Link to={"/"}>Bosh sahifa</Link>
              <Link to={"school"}>Maktab haqida</Link>
              <Link to={"students"}>O'quvchilarga</Link>
              <Link to={"teachers"}>O'qituvchilarga</Link>
              <Link to={"gallery"}>Fotogalelerya</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
