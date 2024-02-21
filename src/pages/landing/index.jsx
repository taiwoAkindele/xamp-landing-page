import React from "react";
import { Navbar } from "../../components";
import Hero from "./hero";
import WhyChooseUs from "./whyChooseUs";
import Users from "./users";
import Discover from "./discover";
import Access from "./access";
import Footer from "../../components/footer";

const Landing = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Users />
      <Discover />
      <Access />
      <Footer />
    </div>
  );
};

export default Landing;
