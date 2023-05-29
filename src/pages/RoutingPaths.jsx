import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./Registration/Registration";
import Home from "./Home";

function RoutingPaths() {
  return (
    <Routes>
      <Route exact path="/" element={<Registration />} />
      <Route exact path="/Home/:id" element={<Home />} />
      <Route exact path="/*" element={<Registration />} />
    </Routes>
  );
}

export default RoutingPaths;
