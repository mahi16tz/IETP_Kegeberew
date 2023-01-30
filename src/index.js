import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contactus from "./component/contact";
import AboutUs from "./component/about_us";
import Splash from "./component/splash";
import Login from "./component/login";
import SignUp from "./component/signup";
import Profile from "./component/profile";
import PurchaseHistory from "./component/purchaseHis";
import Details from "./component/details";
import NewPassword from "./component/newpassword";
import CustomerList from "./component/Admin/customer_list";
import TransactionLog from "./component/Admin/Transaction_Log";
import AdminDashboard from "./component/Admin/Admin_dashboard";
import TomatoForm from "./component/tomatoform";
import HomePage from "./component/homepage";
import ForgotPassword from "./component/forgotpassword";
import TomatoDetails from "./component/tomatodescription";
import VerifyPass from "./component/verifypass";
import DisplayDiactivate from "./component/Admin/displaydiactivate";
import FarmerRequestStatus from "./component/farmerStatus";
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/app" element={<App />} />
      <Route path="/splash" element={<Splash />} />
      <Route path="/contact" element={<Contactus />} />
      <Route path="/about_us" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/purchaseHis" element={<PurchaseHistory />} />
      <Route path="/details" element={<Details />} />
      <Route path="/newpassword" element={<NewPassword />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/verifypass" element={<VerifyPass />} />
      <Route path="/admin/customerlist" element={<CustomerList />} />
      <Route path="/admin" element={<SignUp />} />
      <Route path="/admin/transaction" element={<TransactionLog />} />
      <Route path="/admin/admindashboard" element={<AdminDashboard />} />
      <Route path="/addtomato" element={<TomatoForm />} />
      <Route path="/tomatolist" element={<HomePage />} />
      <Route path="/tomatodescription" element={<TomatoDetails />} />
      <Route path="/displayDiactivate" element={<DisplayDiactivate />} />
      <Route path="/farmerstatus" element={<FarmerRequestStatus />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
