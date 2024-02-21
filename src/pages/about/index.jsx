import React from "react";
import Layout from "../../components/layout";
import Hero from "./hero";
import Xamp from "./xamp";
import MeetTheTeam from "./meet-the-team";
import WhyXamp from "./why-xamp";

const AboutUsPage = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Xamp />
        <MeetTheTeam />
        <WhyXamp />
      </Layout>
    </div>
  );
};

export default AboutUsPage;
