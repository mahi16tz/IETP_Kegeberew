import React, { useState } from "react";
import "../style/login.css";
import img from "../resource/1000-fertility-tomatoes.jpg";
export const Login = (props) => {
  //   state = {};
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phone);
  };
  return (
    <div className="whole-l">
      <div className="container-l">
        <form onSubmit={handleSubmit}>
          <div className="welcome">
            <h3>welcome back!</h3>
            <p>Please enter your details</p>
          </div>
          <div className="input">
            <label>Phone number </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="+251********"
              required
            />
          </div>
          <div className="input">
            <label>Password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="**************"
              required
            />
          </div>
          <div className="buttons-l">
            <input type="checkbox" />
            <label className="remember">Remember me?</label>
            <a href="/forgotpassword">Forgot Password</a>
          </div>

          <button className="signin" type="submit">
            Sign in
          </button>
          <p>Don't have an account?</p>
          <button
            onClick={() => props.onFormSwitch("SignUp")}
            style={{ color: "blue" }}
          >
            Sign up here!
          </button>
        </form>
      </div>
      <div className="image-l">
        <img src={img} alt="tomato species" />
      </div>
    </div>
  );
};

export default Login;
