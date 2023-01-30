import React from "react";
import "../style/farmerstatuslist.css";
import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Farmernav from "./farmernav";

export const FarmerRequestStatus = () => {
  const [farmerstatus] = useState([]);
  const history = useNavigate();
  return (
    <div>
      <Farmernav />
      <div className="container-ul">
        <div className="header_fixed-ul"></div>
        <button className="back-u" onClick={() => history(-1)}>
          <BsFillArrowLeftCircleFill size="20px" /> Back
        </button>
        <div className="title">Your status</div>
        <table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Sold</th>
              <th>status</th>
            </tr>
          </thead>
          {farmerstatus.map((fstatus, key) => (
            <tbody>
              <tr>
                <td key={key}>{fstatus.tamount}</td>
                <td key={key}>{fstatus.tsold}</td>
                <td key={key}>{fstatus.fstatus}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default FarmerRequestStatus;
