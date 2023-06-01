import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import QuizCard from "../components/QuizCard";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import Timer from "../components/Timer";
import { Submit } from "../helper/Game";

export default function GameSession() {
  const { accessToken, userTotalPoints, userTotalGames, questions } =
    useContext(AuthContext);

  const location = useLocation();
  const currentUserId = location.pathname.split("/")[2];
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleSubmission = () => {
    Submit(
      accessToken,
      userTotalPoints,
      userTotalGames,
      questions,
      currentUserId
    );
    navigate(`/home/${currentUserId}`);
  };

  const handleNextGame = () => {
    if (currentQuestion < 9) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      Swal.fire("You went too far!", "Please go back.", "error");
    }
  };

  const handleBackGame = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      Swal.fire(
        "You went too far!",
        "Please go to next quiz since there is no more back.",
        "error"
      );
    }
  };

  return (
    <Grid container item direction="row-reverse" paddingTop="2rem" spacing={2}>
      {/*TIMER */}
      <Grid
        item
        xs={12}
        lg={4}
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Timer handleSubmission={handleSubmission} />
      </Grid>

      {/*QUIZ CARD */}
      <Grid item xs={12} lg={8} display="flex" justifyContent="center">
        <QuizCard
          question={questions[currentQuestion].text}
          questionIndex={currentQuestion}
          options={questions[currentQuestion].options}
        />
      </Grid>

      {/*CONTROL BUTTON*/}
      <Grid
        item
        xs={12}
        lg={12}
        display="flex"
        justifyContent="space-evenly"
        padding="2rem 0 2rem 0"
      >
        <Button onClick={handleBackGame}>Back</Button>
        <Button onClick={handleNextGame}>Next</Button>
        <Button variant="success" onClick={handleSubmission}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}
