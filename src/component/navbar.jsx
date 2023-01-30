import React from "react";
import { Link } from "react-router-dom";
import img from "../resource/software girl.png";
import { AiOutlineBell } from "react-icons/ai";
import "../style/navbar.css";
export const Navbar = () => {
  //   state = {};

  return (
    <div className="nav">
      <div className="right">
        <Link to="/splash" className="links">
          <b>Kegeberew</b>
        </Link>
        <Link to="/contact" className="links">
          ContactUs
        </Link>
        <Link to="/about_us" className="links">
          AboutUs
        </Link>
        <Link to="/purchaseHis" className="links">
          purchase History
        </Link>
      </div>
      <div className="left">
        <input className="search" placeholder="search"></input>
        <Link to="/profile">
          <img src={img} alt="personal" />
        </Link>
        <Link to="/notification">
          <AiOutlineBell size="35px" color="white" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
