import React from "react";
import Navbar from "../navbar";
import Access from "../../pages/landing/access";
import Footer from "../footer";

const Layout = ({ children, noAccess = false }) => {
  return (
    <div>
      <Navbar />
      {children}
      {noAccess ? null : <Access />}
      <Footer />
    </div>
  );
};

export default Layout;
