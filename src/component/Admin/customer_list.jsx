import React from "react";
import "../../style/customer_list.css";
import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import AdminNav from "./adminnav";

export const CustomerList = () => {
  const [custmoers] = useState([]);
  const history = useNavigate();
  return (
    <div>
      <AdminNav />
      <div className="container-ul">
        <div className="header_fixed-ul">
          <div className="filter">
            Filter by
            <select className="table-filter" id="filter">
              <option value="all"></option>
            </select>
          </div>
          <button className="back-u" onClick={() => history(-1)}>
            <BsFillArrowLeftCircleFill size="20px" /> Back
          </button>
          <div className="title">Customer List</div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>phone Number</th>
                <th>Address</th>
              </tr>
            </thead>
            {custmoers.map((customer, key) => (
              <tbody>
                <tr>
                  <td key={key}>{customer.fname}</td>
                  <td key={key}>{customer.phone}</td>
                  <td key={key}>{customer.address}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
