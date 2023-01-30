import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "../style/tomatoform.css";
import Farmernav from "./farmernav";
export default function TomatoForm() {
  const [formData, setFormData] = useState({
    image: "",
    plantedDate: "",
    harvestingDate: "",
    location: "",
    totalAmount: "",
    price: "",
  });
  const { image, plantedDate, harvestingDate, location, totalAmount, price } =
    formData;
  const onSubmit = async (e) => {
    e.preventDefault();
    const newTomato = {
      image: image,
      plantedDate: plantedDate,
      harverstingDate: harvestingDate,
      location: location,
      totalAmount: totalAmount,
      price: price,
    };
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const body = JSON.stringify(newTomato);
      await axios.post("/", body, config);
      setFormData({
        image: "",
        plantedDate: "",
        harvestingDate: "",
        location: "",
        totalAmount: "",
        price: "",
      });
      window.location.reload();
    } catch (err) {
      console.error("error", err.response.data);
    }
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.targe.value });
  };
  return (
    <div className="container">
      <Farmernav />
      <div className="title">New Tomato adding Form</div>
      <div className="content">
        <form action="#" onSubmit={(e) => onSubmit(e)}>
          <div className="product-details">
            <div className="input-box">
              <span className="details">Farmer Name</span>
              <input
                type="text"
                name=""
                placeholder="Enter the Farmer name"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Amount planted in hectar</span>
              <input
                type="text"
                placeholder="Enter the amount"
                name="totalAmount"
                value={totalAmount}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Location</span>
              <select
                defaultValue={location}
                name="location"
                onChange={(e) => onChange(e)}
              >
                <option selected value="1">
                  Adama
                </option>
                <option value="2">Selale</option>
                <option value="3">Sululta</option>
                <option value="4">Debrezeit</option>
                <option value="5">Sebeta</option>
              </select>
            </div>
            <div className="input-box">
              <span className="details">planted date</span>
              <input
                type="date"
                placeholder="Enter the date you planted"
                onChange={(e) => onChange(e)}
                name="plantedDate"
                value={plantedDate}
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Harvested Date</span>
              <input
                type="date"
                placeholder="Enter the date when it you are going to harvest"
                onChange={(e) => onChange(e)}
                name="harvestingDate"
                value={harvestingDate}
                required
              />
            </div>
            <div className="input-box">
              <span className="details">price per box</span>
              <input
                type="number"
                placeholder="Enter the non member price"
                onChange={(e) => onChange(e)}
                name="price"
                value={price}
                required
              />
            </div>
            <div className="input-box">
              <span className="details">upload your tomato image</span>
              <input
                type="image"
                name="image"
                alt="none"
                width="48"
                height="48"
                value={image}
                onChange={(e) => onChange(e)}
              ></input>
            </div>
          </div>
          <div className="button">
            <button type="submit" value="Add">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
