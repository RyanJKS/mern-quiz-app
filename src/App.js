import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import LeadershipBoard from "./components/LeadershipBoard";
import QuizCard from "./components/QuizCard";
import OverviewDialog from "./components/OverviewDialog";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="background-container">
      <div className="d-flex flex-column align-items-center justify-content-center text-primary">
        <h1 className="page-title">Quiz Game</h1>
        <OverviewDialog />
      </div>
      <div className="container">
        <div className="fixed-content">
          <LeadershipBoard />
        </div>
        <div className="scrollable-content">
          <div className="scrollable-inner-content">
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
