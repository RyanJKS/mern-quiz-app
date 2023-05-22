import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@mui/material/Grid";
import LeadershipBoard from "./components/LeadershipBoard";
import OverviewDialog from "./components/OverviewDialog";
import Card from "@mui/material/Card";

import IntroPage from "./pages/IntroPage";
import AccessForm from "./components/AccessForm";

function App() {
  return (
    <Grid
      container
      direction="row-reverse"
      style={{
        backgroundColor: "#282c34",
        color: "white",
      }}
    >
      <Grid item xs={12} lg={12}>
        <h1 className="page-title text-primary">Quiz Game</h1>
        <div className="p-3 d-flex flex-column justify-content-center align-items-center text-dark">
          <OverviewDialog />
        </div>
      </Grid>
      {/*LEADERSHIP BOARD COLUMN */}
      <Grid
        item
        xs={12}
        lg={4}
        display="flex"
        justifyContent="center"
        height="10vh"
        backgroundColor="red"
      >
        <LeadershipBoard />
      </Grid>
      {/*SCROLLABLE COLUMN */}
      <Grid
        item
        xs={12}
        lg={8}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <IntroPage /> */}
        <Card
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;",
            width: "80%",
          }}
        >
          <AccessForm />
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;

<Grid container direction="row-reverse" paddingTop="2rem">
  {/*LEADERSHIP BOARD COLUMN */}
  <Grid item xs={12} lg={4} backgroundColor="blue" flexGrow="1">
    <div className="d-flex justify-content-center">
      <LeadershipBoard />
    </div>
  </Grid>
  {/*SCROLLABLE COLUMN */}
  <Grid
    container
    item
    xs={12}
    lg={8}
    backgroundColor="red"
    display="flex"
    flexDirection="column"
  >
    {/* <IntroPage /> */}
    <Card style={{ flex: "1 1 auto" }}>
      <AccessForm />
    </Card>
  </Grid>
</Grid>;
