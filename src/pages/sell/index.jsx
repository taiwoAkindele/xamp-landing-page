import React from "react";
import Layout from "../../components/layout";
import Hero from "./hero";
import Card from "./card";
import Support from "./support";
import ReadytoSell from "./ready-to-sell";

const SellPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Layout>
        <Hero />
        <Card />
        <Support />
        <ReadytoSell />
      </Layout>
    </div>
  );
};

export default SellPage;
