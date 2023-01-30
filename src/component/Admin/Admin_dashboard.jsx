import React from "react";
import AdminNavbar from "./adminnav";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../../style/Admin_dashboard.css";
export const AdminDashboard = () => {
  const history = useNavigate();
  return (
    <div>
      <AdminNavbar />
      <button className="back" onClick={() => history(-1)}>
        <BsFillArrowLeftCircleFill size="20px" />
      </button>
      <h1>Notifications</h1>
      <div className="notification-list">
        <div className="noti">
          <h2>notfication1</h2>
          <p>discription</p>
        </div>
        <div className="noti">
          <h2>notfication2</h2>
          <p>discription</p>
        </div>
        <div className="noti">
          <h2>notfication3</h2>
          <p>discription</p>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
