import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Homepage from "./pages/Homepage";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
