import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import AddRecordModel from "../../components/addRecordModel/AddRecordModel.jsx";

const RootLayout = () => {
  return (
    <div className="container-fluid">
      <div class="row">
        <div class="col-2 p-0 ">
          <Sidebar />
        </div>
        <div class="col-10 p-0">
          <Navbar />
          <div className="overflow-auto" style={{ backgroundColor: "#f1f1f1" }}>
            <Outlet />
            <AddRecordModel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
