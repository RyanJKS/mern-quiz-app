import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import QuizCard from "../components/QuizCard";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import Timer from "../components/Timer";
import { Submit } from "../helper/Game";
import LoadingAnimation from "../components/LoadingAnimation";

export default function GameSession() {
  const { accessToken, currentUser, questions, isLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const timer = 30; //in seconds
  const increment = 1; //in seconds
  const [clockTime, setClockTime] = useState(timer); //send to timer component and save last taken time

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleSubmission = () => {
    let timeTaken = 0;
    if (clockTime === timer) {
      timeTaken = timer;
    } else {
      timeTaken = timer - clockTime;
    }
    Submit(accessToken, currentUser, questions, timeTaken);
    navigate(`/home/${currentUser.userID}`);
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
      {/*DISPLAY LOADING ANIMATION WHILST FETCHING QUESTIONS. NAVIGATE TO HOME IF NO QUESTIONS (PREVENT RELOAD & CHEATING). */}
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <Grid
            item
            xs={12}
            lg={4}
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Timer
              submitQuiz={handleSubmission}
              timer={timer}
              increment={increment}
              clockTime={clockTime}
              getClockTime={setClockTime}
            />
          </Grid>

          {questions.length !== 0 ? (
            <Grid item xs={12} lg={8} display="flex" justifyContent="center">
              <QuizCard
                question={questions[currentQuestion].text}
                questionIndex={currentQuestion}
                options={questions[currentQuestion].options}
              />
            </Grid>
          ) : (
            navigate(`/home/${currentUser !== null && currentUser.userID}`)
          )}
        </>
      )}

      {/*CONTROL BUTTON DURING GAME*/}
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
