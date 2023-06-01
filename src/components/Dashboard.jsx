import React, { useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import DoughnutChart from "./Charts/DoughnutChart";
import { AuthContext } from "../context/AuthContext";
import Timer from "./Timer";

export default function Dashboard() {
  const location = useLocation();
  const currentUserId = location.pathname.split("/")[2];

  const { getSpecificUser, userStats } = useContext(AuthContext);

  useEffect(() => {
    if (currentUserId !== null) {
      getSpecificUser(currentUserId);
    }
  }, [location.pathname]);

  return (
    <Grid item width="80%">
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Hi {userStats[0] ? userStats[0].username : "username"}
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
              <DoughnutChart data={userStats} />
              <Timer />
            </div>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
