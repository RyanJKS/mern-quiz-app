import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@mui/material/Grid";
import LeadershipBoard from "./components/LeadershipBoard";
import OverviewDialog from "./components/OverviewDialog";
import Card from "@mui/material/Card";

import IntroPage from "./pages/IntroPage";
import AccessForm from "./components/AccessForm";
import Board from "./components/Board";

function App() {
  return (
    <div className="background-container">
      <h1 className="page-title text-primary">Quiz Game</h1>
      <div className="p-3 d-flex flex-column justify-content-center align-items-center text-dark">
        <OverviewDialog />
      </div>

      <div className="content-container">
        <div className="fixed-content bg-danger">
          {/* <LeadershipBoard /> */}
          <Board />
        </div>
        <div className="scrollable-content">
          <div className="scrollable-inner-content"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
