import React from "react";
import style from "./Footer.module.scss";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  const scrollTop = () => {
    document.getElementById("root").scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.boxTop}>
          <Link className={style.logo} to={"/"} onClick={scrollTop}>
            <img src={logo} width={150} height={44} alt="logo img" />
          </Link>
          <div className={style.right}>
            <Link to={"/"} onClick={scrollTop}>
              Bosh sahifa
            </Link>
            <Link to={"school"}>Maktab haqida</Link>
            <Link to={"/students"}>O'quvchilarga</Link>
            <Link to={"/teachers"}>O'qituvchilarga</Link>
            <Link to={"/gallery"}>Fotogalelerya</Link>
          </div>
        </div>
        <div className={style.boxBottom}>
          <p className={style.year}>Barcha huquqlar himoyalangan, 2022-2024</p>
          <p>
            Sayt{" "}
            <a
              href="https://www.instagram.com/jaloliddin_zokirovv/"
              target="_blank"
              rel="noreferrer"
            >
              Jaloliddin Zokirov
            </a>{" "}
            tomonidan 2022 yil ishlab chiqilgan
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
