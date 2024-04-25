import React from "react";
import style from "./Default.module.scss";
import musicPiano from "../image/piano.jpg";
import musicMicrofon from "../image/microfon.jpg";
import { Link } from "react-router-dom";

const Default = () => {
  const scroolTop = () => {
    document.querySelector(".main").scrollTo({ top: 0, behavior: "smooth" });
  };

  alert("Do you want to change the world? If you say yes, you get 1, if you don't, you get 0")
  return (
    <section className={style.default}>
      <div className={style.container}>
        <div className={style.boxTop}>
          <div
            id="carouselExampleControls"
            className={`${"carousel slide"} ${style.boxLeft}`}
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className={`${"carousel-item active"} ${style.imageBox}`}>
                <img
                  src="https://picsum.photos/1312/439"
                  width={"1312"}
                  height={"439px"}
                  className="d-block w-100"
                  alt="school image"
                />
              </div>
              <div className={`${"carousel-item"} ${style.imageBox}`}>
                <img
                  src={musicPiano}
                  width={"1312"}
                  height={"439px"}
                  className="d-block w-100"
                  alt="piano image"
                />
              </div>
              <div className={`${"carousel-item"} ${style.imageBox}`}>
                <img
                  src={musicMicrofon}
                  width={"1312"}
                  height={"439px"}
                  className="d-block w-100"
                  alt="microfon image"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className={style.boxRight}>
            <div className={style.reklama}>
              Shu yerda sizning reklamangiz bo'lishi mumkin edi
            </div>
          </div>
        </div>
        <div className={style.boxBottom}>
          <div className={style.titleBox}>
            <h2>
              MAKTABIMIZ <span>YO'NALISHLARI</span>
            </h2>
          </div>
          <ul className={style.list}>
            <li className={style.item}>
              <span className={style.imgBox}>
                <img
                  src="https://picsum.photos/150"
                  width={"150px"}
                  height={"120px"}
                  alt="image"
                />
              </span>
              <div className={style.content}>
                <p>Title</p>
                <Link to={"detail"} onClick={() => scroolTop()}>
                  <p className={style.text}>Batafsil</p>
                  <div className={style.wave}></div>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Default;
