import React from "react";
import "../style/verifypass.css";
import { Link } from "react-router-dom";
export const VerifyPass = () => {
  //   state = {};
  return (
    <div className="container-v">
      <h4>Enter the verification code here</h4>
      <div className="inputs">
        <input className="code" required />
        <input className="code" required />
        <input className="code" required />
        <input className="code" required />
        <input className="code" required />
      </div>
      <button className="verify">
        <Link to="/newpassword">Verify</Link>
      </button>
    </div>
  );
};

export default VerifyPass;
