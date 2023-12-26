import React from "react";
import "../styles/LoginForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

function LoginForm() {
  return (
    <div className="utama">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input_box">
            <input type="text" placeholder="Username" required />
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>
          <div className="input_box">
            <input type="password" placeholder="Password" required />
            <FontAwesomeIcon icon={faLock} className="icon" />
          </div>
          <div className="remember_forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="/">Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          {/* <div className="register-link">
            <p>
              Don't have an account? <a href="/">Register</a>
            </p>
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
