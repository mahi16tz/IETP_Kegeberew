import React from "react";
import "../style/details.css";
import Navbar from "./navbar";
export const Details = () => {
  //   state = {};
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="header_fixed">
          <table>
            <div className="filter-sort">
              <th>
                Filter by
                <select className="table-filter" id="filter">
                  <option value="all"></option>
                </select>
                <th></th>
                <th></th>
                <th></th>
              </th>
              <th id="sort">
                Sort by
                <select className="table-filter">
                  <option value="all"></option>
                </select>
              </th>
            </div>
          </table>
          <div className="title">Details</div>
          <table>
            <thead>
              <tr>
                <th>Farmer username</th>
                <th>address</th>
                <th>Phone</th>
                <th>Total amount</th>
                <th>Planted date</th>
                <th>Date of harvest</th>
                <th>cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>abekeb</td>
                <td>asela</td>
                <td>0950890934</td>
                <td>1400</td>
                <td>30-01-2015</td>
                <td>30-05-2015</td>
                <td>28000</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Details;
