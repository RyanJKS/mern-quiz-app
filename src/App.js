import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@mui/material/Grid";
import OverviewDialog from "./components/OverviewDialog";
import RoutingPaths from "./pages/RoutingPaths";

function App() {
  // center overview dialog on screen
  const CenterStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "1rem",
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
        <h1 className="title">Quiz Master</h1>
      </Grid>
      {/*OVERVIEW DIALOG */}
      <Grid item color="black" xs={12} lg={12} style={CenterStyles}>
        <OverviewDialog />
      </Grid>
      {/*USER LOCATION */}
      <RoutingPaths />
    </Grid>
  );
}

export default App;
