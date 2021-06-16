/** @format */

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
// firebase importing
import { db, auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginFunction = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));

    // firebase login function
  };

  const registerFunction = (e) => {
    e.preventDefault();
    // firebse register function
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='Login'>
      <Link to='/'>
        <img
          className='login_logo'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdKtFqx-N6lZo6OjT9tkAY2x04r8Cvc81ZQ&usqp=CAU'
        />
      </Link>
      <div className='login_container'>
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(p) => {
              setPassword(p.target.value);
            }}
          />

          <button
            className='login_signinButton'
            type='submit'
            onClick={loginFunction}>
            Sign In
          </button>
        </form>
        <p>
          By Signing In you agree to amazon's condition's of use & Sale.Please
          see our privacy policy notice and cookie policy
        </p>
      </div>
      <button className='loginRegister_button' onClick={registerFunction}>
        Create Amaozn Account
      </button>
    </div>
  );
}

export default Login;
