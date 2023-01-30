import React from "react";
import "../style/profile.css";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Navbar from "./navbar";
export const Profile = () => {
  //   state = {};
  const history = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="whole-p">
        <div className="container-p">
          <button className="back" onClick={() => history(-1)}>
            <BsFillArrowLeftCircleFill size="20px" /> Back
          </button>
          <h3>Customer identity Details</h3>
          <form>
            <div className="input">
              <label>First Name</label>
              <input type="text" value="" />
            </div>
            <div className="input">
              <label>Last Name</label>
              <input type="text" value="" />
            </div>
            <div className="input">
              <label>Username</label>
              <input type="text" value="" />
            </div>
            <div className="input">
              <label>Phonenumber</label>
              <input type="tel" value="" />
            </div>
            <div className="input">
              <label>Current Balance: </label>
              <label>3000</label>
            </div>
            <button className="edit">Edit</button>
          </form>
        </div>
        <input type="image" className="image" alt="customer" />
      </div>
    </div>
  );
};

export default Profile;
