import React from "react";
import Layout from "../../components/layout";
import Hero from "./hero";
import Card from "./card";
import Support from "./support";
import Discover from "./discover";

const SellPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Layout>
        <Hero />
        <Card />
        <Support />
        <Discover />
      </Layout>
    </div>
  );
};

export default SellPage;
