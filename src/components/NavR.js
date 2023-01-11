import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "../App";
import DestinationMoon from "../pages/Destination";

const NavR = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/destination" element={<DestinationMoon />} />
        <Route path="/crew" />
        <Route path="/technology" />
      </Routes>
    </BrowserRouter>
  );
};

export default NavR;
