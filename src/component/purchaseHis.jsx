import React from "react";
import "../style/purchasehis.css";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
export const PurchaseHistory = () => {
  //   state = {};
  return (
    <div>
      <Navbar />
      <div class="container">
        <div class="header_fixed">
          <table>
            <div class="filter-sort">
              <th>
                Filter by
                <select class="table-filter" id="filter">
                  <option value="all"></option>
                </select>
              </th>
              <th id="sort">
                Sort by
                <select class="table-filter">
                  <option value="all"></option>
                </select>
              </th>
            </div>
          </table>
          <div class="title">Purchase History</div>
          <table>
            <thead>
              <tr>
                <th>purchase Date</th>
                <th>location</th>
                <th>Total cost(ETB)</th>
                <th>Quantites(in box)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12/4/2014</td>
                <td>asela</td>
                <td>10000.00</td>
                <td>1000</td>
                <td>
                  <button>
                    <Link to="/details">details</Link>
                  </button>
                </td>
              </tr>
              <tr>
                <td>12/4/2014</td>
                <td>asela</td>
                <td>10000.00</td>
                <td>1000</td>
                <td>
                  <button>
                    <Link to="/details">details</Link>
                  </button>
                </td>
              </tr>
              <tr>
                <td>12/4/2014</td>
                <td>asela</td>
                <td>10000.00</td>
                <td>1000</td>
                <td>
                  <button>
                    <Link to="/details">details</Link>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistory;
