import React from "react";
import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Destination />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;