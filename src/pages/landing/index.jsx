import React from "react";
import { Navbar } from "../../components";
import Hero from "./hero";
import WhyChooseUs from "./whyChooseUs";
import Users from "./users";
import Listings from "./listings";
import Discover from "./discover";
import Access from "./access";
import Footer from "../../components/footer";

const Landing = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Users />
      <Listings />
      <Discover />
      <Access />
      <Footer />
    </div>
  );
};

export default Landing;
