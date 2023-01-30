import React from "react";
import { Link } from "react-router-dom";
import "../../style/adminnav.css";

export const AdminNavbar = () => {
  return (
    <div className="nav">
      <div className="right">
        <Link to="/splash" className="links">
          <b>Kegeberew</b>
        </Link>
        <Link to="/admin/admindashboard" className="links">
          Dashboard
        </Link>
        <Link to="/admin/customerlist" className="links">
          Customers
        </Link>
        <Link to="/admin/transaction" className="links">
          Transaction history
        </Link>
      </div>
    </div>
  );
};
export default AdminNavbar;
