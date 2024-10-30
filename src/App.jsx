import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Homepage from "./pages/Homepage";

export default function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  </BrowserRouter>;
}
