import React from 'react'
import style from './Register.module.scss'
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className={style.box}>
            <div class={style.box__inner}>
                <h2>Register</h2>
                <input type="text" required />
                <label for="text"><span>Name</span></label>
                <input type="text" required />
                <label for="text"><span>User Name</span></label>
                <input type="text" required />
                <label for="text"><span>Email</span></label>
                <input type="password" name="" id="" required />
                <label for="password"><span>Password</span></label>
                <button type="submit">Login</button>
                <p>Do you have an account? <Link className={style.a} to={'.Login'}>Login</Link></p>
            </div>
        </div>
    )
}

export default Register