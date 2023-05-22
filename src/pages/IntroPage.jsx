import React from "react";
import Grid from "@mui/material/Grid";
import QuizCard from "../components/QuizCard";

function IntroPage() {
  return (
    <Grid container spacing={4}>
      <Grid
        item
        xs={12}
        lg={6}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <QuizCard />
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <QuizCard />
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <QuizCard />
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <QuizCard />
      </Grid>
    </Grid>
  );
}

export default IntroPage;
