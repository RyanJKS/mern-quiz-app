import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Landing from "./Landing";
import GameSession from "./GameSession";

function RoutingPaths() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/home/:id" element={<Home />} />
      <Route exact path="/game-session/:id" element={<GameSession />} />
      <Route exact path="/*" element={<Landing />} />
    </Routes>
  );
}

export default RoutingPaths;
