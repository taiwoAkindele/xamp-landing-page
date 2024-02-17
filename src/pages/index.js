import React from "react";
const LandingPage = React.lazy(() => import("./landing"));
const RentPage = React.lazy(() => import("./rent"));
const SellPage = React.lazy(() => import("./sell"));

export { LandingPage, RentPage, SellPage };
