import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

class Shared extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
  }
}

export default Shared;
