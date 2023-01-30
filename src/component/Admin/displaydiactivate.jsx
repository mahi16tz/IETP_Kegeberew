import React from "react";
import "../../style/displaydiactivate.css";
import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import AdminNav from "./adminnav";

export const DisplayDiactivate = () => {
  const [tomatoes] = useState([]);
  const history = useNavigate();
  return (
    <div>
      <AdminNav />
      <div className="container-ul">
        <div className="header_fixed-ul">
          <button className="back-u" onClick={() => history(-1)}>
            <BsFillArrowLeftCircleFill size="20px" /> Back
          </button>
          <div className="title">
            List of farmer tomato product to be activate
          </div>
          <table>
            <thead>
              <tr>
                <th>Farmer Name</th>
                <th>Location</th>
                <th>Planted Date</th>
                <th>Harvested Date</th>
                <th>price perbox</th>
              </tr>
            </thead>
            {tomatoes.map((tomato, key) => (
              <tbody>
                <tr>
                  <td key={key}>{tomato.fname}</td>
                  <td key={key}>{tomato.addr}</td>
                  <td key={key}>{tomato.plant}</td>
                  <td key={key}>{tomato.harvest}</td>
                  <td key={key}>{tomato.price}</td>
                  <td>
                    <button id="activatebtn">Activate</button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default DisplayDiactivate;
