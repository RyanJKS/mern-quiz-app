import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";

function OverviewDialog() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Overview
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text w-80">
          <Card body>
            Welcome to the Quiz Game!
            <br />
            Please register or login to our MongoDb database to play the game.
            Get your personalised performance dashboard and get your ranking on
            the leaderboard.
            <br />
            Dont worry, your password will be encrypted using <b>bcrypt</b> and
            you login is secured using <b>jwt</b>. No one can change your data
            unless its you or.. me the admin :<span>&#41;</span>
            <br />
            Rules & Tips:
            <br />
            <ul>
              <li>Each Game has 20 Quizzes.</li>
              <li>Each Quiz is worth 1 point if answered correctly.</li>
              <li>
                Earn as many points as you can to get onto the leaderboard.
              </li>
              <li>
                Points will only be earned when you press <b>submit</b> at the
                end of the quiz.
              </li>
            </ul>
          </Card>
        </div>
      </Collapse>
    </>
  );
}

export default OverviewDialog;
