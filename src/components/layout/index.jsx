import React from "react";
import Navbar from "../navbar";
import Access from "../../pages/landing/access";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Access />
      <Footer />
    </div>
  );
};

export default Layout;
