import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">{<Outlet />}</main>
      <Footer />
    </>
  );
};

export default Home;
