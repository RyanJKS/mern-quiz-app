import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DoughnutChart from "./Charts/DoughnutChart";

export default function Dashboard() {
  const { userStats } = useContext(AuthContext);

  return (
    <Grid item width="80%">
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Hi {userStats[0] ? userStats[0].username : <q>username</q>}
          </Typography>
          <Typography component={"span"} variant="body2">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <DoughnutChart data={userStats} />
            </div>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
