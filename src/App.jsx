import { Route, Routes } from "react-router-dom";
import { RentPage, LandingPage, SellPage } from "./pages";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/properties/rent" element={<RentPage />} />
          <Route path="/properties/sell" element={<SellPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
