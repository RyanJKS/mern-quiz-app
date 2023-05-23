import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import OverviewDialog from "./components/OverviewDialog";
import LeadershipBoard from "./components/LeadershipBoard";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import QuizCard from "./components/QuizCard";
import RoutingPaths from "./pages/RoutingPaths";

function App() {
  const { isUserAuthorised } = useContext(AuthContext);

  const CenterStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Grid
      container
      direction="column"
      backgroundColor="#282c34"
      color="white"
      minHeight="100vh"
    >
      {/*PAGE TITLE */}
      <Grid item margin="2rem">
        <h1 className="title text-primary">Quiz Game</h1>
      </Grid>
      {/*OVERVIEW DIALOG */}
      <Grid item color="black" xs={12} lg={12} style={CenterStyles}>
        <OverviewDialog />
      </Grid>
      {/*PARTITION SECTION */}
      <Grid
        container
        item
        direction="row-reverse"
        paddingTop="2rem"
        spacing={2}
      >
        {/*LEADERSHIP BOARD */}
        <Grid
          item
          xs={12}
          lg={4}
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
        >
          <LeadershipBoard />
        </Grid>
        {/*CHANGING SECTION */}
        <Grid item xs={12} lg={8}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            {/*DASHBOARD */}
            <QuizCard />
            {/*USER LOCATION */}
            <RoutingPaths />
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
