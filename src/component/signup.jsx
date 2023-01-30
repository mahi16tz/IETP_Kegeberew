import React from "react";
import { useState } from "react";
import "../style/signup.css";
import img from "../resource/beza1.jpg";

export const SignUp = (props) => {
  //state = {};
  const [fristname, setFristName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [pass, setPass] = useState("");
  const [confirmpass, setConfirmPass] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(phone);
  }

  return (
    <div className="whole-s">
      <div className="container-s">
        <form onSubmit={handleSubmit}>
          <h2 className="app-wrapper">Create account</h2>
          <div className="form-wrapper">
            <div className="input">
              <label>First Name</label>
              <input
                type="text"
                placeholder=""
                name="firstname"
                value={fristname}
                onChange={(e) => setFristName(e.target.value)}
                required
              />
            </div>
            <div className="input">
              <label>Last Name</label>
              <input
                type="text"
                placeholder=""
                name="lastname"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="input">
              <label>Phone</label>
              <input
                type="tel"
                placeholder="+2519********"
                name="phonenumber"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="input">
              <label>Select Role</label>
              <select
                defaultValue={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option selected value="1">
                  Farmer
                </option>
                <option value="2">Customer</option>
              </select>
            </div>
            <div className="input">
              <label>Password</label>
              <input
                type="password"
                placeholder="******************"
                name="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                required
              />
            </div>
            <div className="input">
              <label>Confirm password</label>
              <input
                type="password"
                placeholder="******************"
                name="confirmpassword"
                value={confirmpass}
                onChange={(e) => setConfirmPass(e.target.value)}
                required
              />
            </div>
            <div className="uploads-s">
              <button className="id" type="file">
                Upload id
              </button>
            </div>
            <div>
              <button className="signup">Sign up</button>
            </div>
            <div className="link">
              <p>Aready have an account?</p>
              <button
                onClick={() => props.onFormSwitch("login")}
                style={{ color: "blue" }}
              >
                sign in here!
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="image-s">
        <img src={img} alt="customer" />
      </div>
    </div>
  );
};

export default SignUp;
