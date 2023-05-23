import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import Home from "./Home";
import GameSession from "./GameSession";

function RoutingPaths() {
  return (
    <Routes>
      <Route exact path="/" element={<Registration />} />
      <Route exact path="/Home" element={<Home />} />
      <Route exact path="/Session" element={<GameSession />} />
    </Routes>
  );
}

export default RoutingPaths;
