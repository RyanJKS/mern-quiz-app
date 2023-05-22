import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function QuizCard() {
  const choiceBtnStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={2}>
          <Grid item xs={6} lg={6} style={choiceBtnStyles}>
            <Button variant="contained" size="small">
              Share 1
            </Button>
          </Grid>
          <Grid item xs={6} lg={6} style={choiceBtnStyles}>
            <Button variant="contained" size="small">
              Share 2
            </Button>
          </Grid>
          <Grid item xs={6} lg={6} style={choiceBtnStyles}>
            <Button variant="contained" size="small">
              Share 3
            </Button>
          </Grid>
          <Grid item xs={6} lg={6} style={choiceBtnStyles}>
            <Button variant="contained" size="small">
              Share 4
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
