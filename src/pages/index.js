import React from "react";
const LandingPage = React.lazy(() => import("./landing"));
const RentPage = React.lazy(() => import("./rent"));
const SellPage = React.lazy(() => import("./sell"));
const LeasePage = React.lazy(() => import("./lease"));
const AboutUsPage = React.lazy(() => import("./about"));
const FAQPage = React.lazy(() => import("./faq"));
const ContactPage = React.lazy(() => import("./contact"));
const PrivacyPage = React.lazy(() => import("./privacy"));

export {
  LandingPage,
  RentPage,
  SellPage,
  LeasePage,
  AboutUsPage,
  FAQPage,
  ContactPage,
  PrivacyPage,
};
