import React from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "./topNavbar";
import Footer from "./footer";

const RentLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RentLayout;
