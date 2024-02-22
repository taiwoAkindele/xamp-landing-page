import { Route, Routes } from "react-router-dom";
import {
  RentPage,
  LandingPage,
  SellPage,
  LeasePage,
  AboutUsPage,
  FAQPage,
  ContactPage,
} from "./pages";
import { Suspense } from "react";
import { Loader } from "./components";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/properties/rent" element={<RentPage />} />
        <Route path="/properties/sell" element={<SellPage />} />
        <Route path="/properties/lease" element={<LeasePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
