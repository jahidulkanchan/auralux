import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export default function RootLayout() {
  return (
    <>
      <Navbar />
      <div className="min-h-[80vh]">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
}
