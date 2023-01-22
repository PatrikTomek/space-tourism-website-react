import React from "react";
import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/space-tourism-website-react/" exact element={<Home />} />
        <Route
          path="/space-tourism-website-react/destination"
          element={<Destination />}
        />
        <Route path="/space-tourism-website-react/crew" element={<Crew />} />
        <Route
          path="/space-tourism-website-react/technology"
          element={<Technology />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
