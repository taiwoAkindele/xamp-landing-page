import { Route, Routes } from "react-router-dom";
import { HowItWorks, LandingPage } from "./pages";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
