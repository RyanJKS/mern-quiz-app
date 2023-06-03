import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

function LoadingAnimation() {
  return (
    <Grid
      item
      xs={12}
      lg={12}
      display="flex"
      justifyContent="center"
      padding="2rem 0 2rem 0"
    >
      <Box sx={{ display: "flex" }}>
        <CircularProgress color="success" size="lg" value={230} />
      </Box>
    </Grid>
  );
}

export default LoadingAnimation;
