import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Access from "../components/Forms/Access";
import LeadershipBoard from "../components/LeadershipBoard";
import Dashboard from "../components/Dashboard";
import { Button } from "@mui/material";

function Landing() {
  const [access, setAccess] = useState(false);

  return (
    <Grid container item direction="row-reverse" paddingTop="2rem" spacing={2}>
      {/*LEADERBOARD */}
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

      {/*DASHBOARD or USER ACCESS FORM (LOGIN/REGISTRATION) */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={8}
        display="flex"
        justifyContent="center"
      >
        {access ? <Access /> : <Dashboard />}
      </Grid>

      {/*CONTROL BUTTON BETWEEN ACCESS FORM AND INITIAL DASHBOARD*/}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        display="flex"
        justifyContent="center"
      >
        <Button
          variant="contained"
          onClick={() => {
            setAccess(!access);
          }}
        >
          {access ? "Back" : "Enter"}
        </Button>
      </Grid>
    </Grid>
  );
}

export default Landing;
