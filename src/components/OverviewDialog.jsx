import React, { useState, useEffect, useContext } from "react";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import { AuthContext } from "../context/AuthContext";

function OverviewDialog() {
  const [open, setOpen] = useState(true);
  const { accessToken } = useContext(AuthContext);
  // To make overview dialog not visible when user is not logged in
  useEffect(() => {
    if (accessToken !== null) {
      setOpen(false);
    }
  }, [accessToken]);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Button onClick={() => setOpen(!open)} variant="contained">
        Overview
      </Button>
      <div
        style={{
          backgroundColor: "#282c34",
          boxShadow: "0px 5px 10px 0px rgba(0,255,255,0.7)",
          color: "white",
        }}
      >
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CardContent>
            <Container
              sx={{
                height: "100%",
                lineHeight: 1.5,
              }}
            >
              Welcome to the Quiz Master!
              <br />
              Register/Login or use our demo account to play the game. Get your
              personalised performance dashboard and get your ranking on the
              leaderboard.
              <br />
              Dont worry, your password will be encrypted using{" "}
              <b style={{ color: "rgba(0,255,255,0.7)" }}>bcrypt</b> and you
              login is secured using{" "}
              <b style={{ color: "rgba(0,255,255,0.7)" }}>jwt</b>. No one can
              change your data unless its you or.. me the admin :
              <span>&#41;</span>
              <br />
              Rules & Tips:
              <br />
              <ul>
                <li>Each Game has 10 Quizzes.</li>
                <li>Each Quiz is worth 1 point if answered correctly.</li>
                <li>
                  Earn as many points as you can to get onto the leaderboard.
                </li>
                <li>
                  Points will only be earned when you press <b>submit</b> at the
                  end of the quiz.
                </li>
              </ul>
            </Container>
          </CardContent>
        </Collapse>
      </div>
    </div>
  );
}

export default OverviewDialog;
