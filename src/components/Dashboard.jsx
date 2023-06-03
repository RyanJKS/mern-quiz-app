import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DoughnutChart from "./Charts/DoughnutChart/DoughnutChart";
import LineChart from "./Charts/LineChart/LineChart";

export default function Dashboard() {
  const { currentUser } = useContext(AuthContext);

  return (
    <Grid item width="75%" height="100%">
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {currentUser
              ? `${currentUser.username}'s Dashboard`.toUpperCase()
              : "SAMPLE DASHBOARD"}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Hi {currentUser ? currentUser.username : <q>username</q>}
          </Typography>
          <Typography component={"span"} variant="body2">
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12} lg={6}>
                <DoughnutChart />
              </Grid>
              <Grid item xs={12} lg={6}>
                <LineChart />
              </Grid>
            </Grid>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
