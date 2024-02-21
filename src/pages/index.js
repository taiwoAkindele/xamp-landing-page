import React from "react";
const LandingPage = React.lazy(() => import("./landing"));
const RentPage = React.lazy(() => import("./rent"));
const SellPage = React.lazy(() => import("./sell"));
const LeasePage = React.lazy(() => import("./lease"));
const AboutUsPage = React.lazy(() => import("./about"));
const FAQPage = React.lazy(() => import("./faq"));

export { LandingPage, RentPage, SellPage, LeasePage, AboutUsPage, FAQPage };
