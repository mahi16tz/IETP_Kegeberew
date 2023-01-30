import React from "react";
import "../style/contact.css";
import Navbar from "./navbar";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
export const Contactus = () => {
  //   state {};
  const history = useNavigate();
  return (
    <div>
      <Navbar />
      <button className="back" onClick={() => history(-1)}>
        <BsFillArrowLeftCircleFill size="20px" />
      </button>
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">tuludimtu,Oromia</div>
              <div className="text-two">something 06</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+0098 9893 5647</div>
              <div className="text-two">+0096 3434 5678</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">something@gmail.com</div>
              <div className="text-two">info.codinglab@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">CONTACT US</div>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="number" placeholder="Enter your phone number" />
              </div>
              <div className="input-box message-box">
                <textarea placeholder="Enter your message"></textarea>
              </div>
              <div className="button">
                <input type="button" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
