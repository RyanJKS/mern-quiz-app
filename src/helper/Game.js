import Swal from "sweetalert2";
import { axiosInstance } from "../config/apiConfig";

const updateDatabase = async (
  accessToken,
  userTotalPoints,
  userTotalGames,
  userID,
  correctCount
) => {
  const updatedStats = {
    totalPoints: userTotalPoints + correctCount,
    totalGamesPlayed: userTotalGames + 1,
    winPercentage: Math.floor(
      ((userTotalPoints + correctCount) / ((userTotalGames + 1) * 20)) * 100
    ),
  };
  try {
    //AXIOS PUT FORMAT PUT.{URL, {BODY}, {HEADERS}}
    await axiosInstance.put(`/user/stats/update/${userID}`, updatedStats, {
      headers: { Authorisation: `${accessToken}` },
    });
  } catch (error) {
    console.error(error);
  }
};

let answers = [];

export function onSaveAnswer(questionIndex, optionIndex) {
  // Save the selected option for the question
  answers[questionIndex] = optionIndex;
}
export function Submit(
  accessToken,
  userTotalPoints,
  userTotalGames,
  questions,
  currentUserId
) {
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
  ).then(() => {
    updateDatabase(
      accessToken,
      userTotalPoints,
      userTotalGames,
      currentUserId,
      correctCount
    );
    window.location.reload();
  });

  // Reset the answers array
  answers.length = 0;
}
