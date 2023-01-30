import React from "react";
import pic1 from "../resource/beza1.jpg";
import pic2 from "../resource/beza2.jpg";
import pic3 from "../resource/tomato2.jpg";
import pic4 from "../resource/tomato6.jpg";
import Navbar from "./navbar";
import "../style/homepage.css";
// import { Link } from "react-router-dom";
export const HomePage = () => {
  function showDetail(object) {}

  let tomatoes = [
    {
      image: pic1,
      Location: "Asela",
      Date_planted: "15/03/2015",
      Date_harvest: "8/6/2015",
      farmer_name: "Abekebe Asela",
    },
    {
      image: pic2,
      Location: "Asela",
      Date_planted: "15/03/2015",
      Date_harvest: "8/6/2015",
      farmer_name: "Abekebe Asela",
    },
    {
      image: pic3,
      Location: "Asela",
      Date_planted: "15/03/2015",
      Date_harvest: "8/6/2015",
      farmer_name: "Abekebe Asela",
    },
    {
      image: pic4,
      Location: "Asela",
      Date_planted: "15/03/2015",
      Date_harvest: "8/6/2015",
      farmer_name: "Abekebe Asela",
    },
  ];

  //   state = {};
  return (
    <div>
      <Navbar />
      <div className="whole-home">
        <nav>
          <h3>New Arrival up coming fresh tomatoes with their location</h3>
        </nav>
        {tomatoes.map((index, value) => {
          return (
            <div className="home-slider">
              <div className="home-card">
                <button onClick={(e) => showDetail(index)}>
                  <img src={index.image} alt="" />
                  {/* <span>{value}</span> */}
                </button>
                <p> {index.Location} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
