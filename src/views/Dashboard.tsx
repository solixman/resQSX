// import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/comon/Header";
import Footer from "../components/comon/Footer";


export default function Dashboard() {



  return (
    <>
    <Header/>
   <main>
      <Outlet />
   </main>
   <div id="footer">
    <Footer/>
   </div>
    </>
  );
}
