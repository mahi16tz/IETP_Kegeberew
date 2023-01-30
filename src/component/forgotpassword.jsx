import React from "react";
import "../style/forgotpassword.css";
import { Link } from "react-router-dom";
export const ForgotPassword = () => {
  //   state = {};
  return (
    <div className="container-f">
      <h4>Enter your Phone number</h4>
      <input
        type="Number"
        className="reset"
        placeholder="+251********"
        required
      />
      <button className="send">
        <Link to="/verifypass">Send</Link>
      </button>
    </div>
  );
};
export default ForgotPassword;
