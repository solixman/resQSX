// import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../comon/Header";
import Footer from "../comon/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main   className="bg-gray-800">
        <Outlet />
      </main>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
