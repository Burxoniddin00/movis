import React from "react";
import Headre from "./headers/Headre";
import { Footer } from "./footer/footer";
import "../app/globals.css";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Headre />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
