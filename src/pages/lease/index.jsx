import React from "react";
import Layout from "../../components/layout";
import Hero from "./hero";
import Card from "./card";
import Support from "./support";
import GetStarted from "./get-started-card";

const LeasePage = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Card />
        <Support />
        <GetStarted />
      </Layout>
    </div>
  );
};

export default LeasePage;
