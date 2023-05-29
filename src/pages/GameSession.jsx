import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import QuizCard from "../components/QuizCard";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function GameSession({ questions }) {
  const location = useLocation();
  const currentUserId = location.pathname.split("/")[2];
  const { updateDatabase, setShowQuiz } = useContext(AuthContext);

  const cardDisplayStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "1rem",
  };
  // Initialize the answers array
  const answers = [];

  // Function to save the user's answer
  function onSaveAnswer(questionIndex, optionIndex) {
    // Save the selected option for the question
    answers[questionIndex] = optionIndex;
  }
  function handleSubmit() {
    let correctCount = 0;
    let wrongCount = 0;
    // Iterate over each question in the quiz
    questions?.forEach((question, index) => {
      // Get the user's answer for the current question
      const userAnswer = answers[index];

      // Check if the user's answer matches the correct answer
      if (
        userAnswer !== undefined &&
        userAnswer === question.options.findIndex((option) => option.isCorrect)
      ) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });

    Swal.fire(
      `Scoreboard\nCorrect answers : ${correctCount}\nWrong answers : ${wrongCount}`
    );

    updateDatabase(currentUserId, correctCount);

    setShowQuiz((prev) => !prev);

    setTimeout(function () {
      window.location.reload();
    }, 6000);
    // Reset the answers array
    answers.length = 0;
  }

  return (
    <Grid container>
      {questions?.map((question, index) => (
        <Grid item xs={12} lg={6} style={cardDisplayStyles} key={index}>
          <QuizCard
            question={question.text}
            questionIndex={index}
            options={question.options}
            submitAnswer={onSaveAnswer}
          />
        </Grid>
      ))}

      <Grid item xs={12} lg={12} style={cardDisplayStyles}>
        <Button variant="success" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}

export default GameSession;
