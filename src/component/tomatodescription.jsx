import React from "react";
import Navbar from "./navbar";
import "../style/description.css";
export const TomatoDetails = () => {
  <div className="container">
    <Navbar />
    <div className="title">Detail About tomato</div>
    <div className="content">
      <div className="product-details">
        <div className="input-box">
          <span className="details">Farmer Name</span>
          <span>Abebe Kebede</span>
        </div>
        <div className="input-box">
          <span className="details">Amount planted in hectar</span>
          <span>150 </span>
        </div>
        <div className="input-box">
          <span className="details">Location</span>
          <span>Adama</span>
        </div>
        <div className="input-box">
          <span className="details">planted date</span>
          <span>15/2/2015</span>
        </div>
        <div className="input-box">
          <span className="details">Harvested Date</span>
          <span>3/5/2015</span>
        </div>
        <div className="input-box">
          <span className="details">price per box</span>
          <span>300</span>
        </div>
        <div className="input-box">
          <span className="details">upload your tomato image</span>
          {/* <img src={img} alt="" width="48" height="48" /> */}
        </div>
      </div>
      <form>
        <div className="input-box">
          <span className="details">
            Enter the amount of quantity you want to buy
          </span>
          <input
            type="number"
            placeholder="number only"
            name="pdate"
            id="pdate"
            required
          />
        </div>
        <div className="button">
          <button id="TomatoBought">Buy</button>
        </div>
      </form>
    </div>
  </div>;
};

export default TomatoDetails;
