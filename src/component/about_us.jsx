import React from "react";
import "../style/aboutUs.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
export const AboutUs = () => {
  //   state = {};
  const history = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="whole-cs">
        <button className="back" onClick={() => history(-1)}>
          <BsFillArrowLeftCircleFill size="20px" />
        </button>
        <h1>About us</h1>
        <div className="container-cs">
          <p>
            This project incorporates prior research publications' results and
            finds a technology-based solution to reduce the loss.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
