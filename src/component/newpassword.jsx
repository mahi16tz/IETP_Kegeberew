import React from "react";
import "../style/newpassword.css";
import { Link } from "react-router-dom";
export const NewPassword = () => {
  //   state = {};
  return (
    <div className="container-n">
      <h4>Enter your new password</h4>
      <input type="password" placeholder="**************" required />
      <h4>Confirm your new password</h4>
      <input type="password" placeholder="***************" required />
      <button>
        <Link to="/login">Change password</Link>
      </button>
    </div>
  );
};

export default NewPassword;
