import React from 'react';
import { Link } from 'react-router-dom';
import style from './Login.module.scss'
import logoBlue from '../image/logo-blue.png'

const Login = () => {
  localStorage.setItem("user", 0)
  return (
    <div className={style.login}>
      <div className={style.container}>
        <Link className={style.logo} to={'/'}>
          <img src={logoBlue} width={150} height={23} alt="site logo" />
        </Link>
        <form className={style.form} method="post">
          <h2>Tizimga kirish</h2>
          <input type="text" placeholder='Ismingizni kiriting...' />
          <input type="password" placeholder='Parolingizni kiriting...' />
          <Link to={"/Register"}>Parolni unutdingizmi?</Link>
          <button className={style.button}>
            <p className={style.text}>Kirish</p>
            <div className={style.wave}></div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
