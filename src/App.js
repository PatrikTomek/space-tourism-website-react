import React from "react";
import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Destination from "./pages/Destination";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
