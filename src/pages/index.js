import React from "react";
const LandingPage = React.lazy(() => import("./landing"));
const HowItWorks = React.lazy(() => import("./how-it-works"));

export { LandingPage, HowItWorks };
