import Swal from "sweetalert2";
import { axiosInstance } from "../config/apiConfig";

const updateDatabase = async (
  accessToken,
  currentUser,
  correctCount,
  timeTaken
) => {
  let numberOfQuiz = 10;

  const updatedStats = {
    totalPoints: currentUser.totalPoints + correctCount,
    totalGamesPlayed: currentUser.totalGamesPlayed + 1,
    winPercentage: Math.floor(
      ((currentUser.totalPoints + correctCount) /
        ((currentUser.totalGamesPlayed + 1) * numberOfQuiz)) *
        100
    ),
    timePerGame: timeTaken,
  };

  try {
    //AXIOS PUT FORMAT PUT.{URL, {BODY}, {HEADERS}}
    let responses = await axiosInstance.put(
      `/user/stats/update/${currentUser.userID}`,
      updatedStats,
      {
        headers: { Authorisation: `${accessToken}` },
      }
    );
    if (responses.status === 200) {
      return true;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

let answers = [];

export function onSaveAnswer(questionIndex, optionIndex) {
  // Save the selected option for the question
  answers[questionIndex] = optionIndex;
}
export function Submit(accessToken, currentUser, questions, timeTaken) {
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
    if (updateDatabase(accessToken, currentUser, correctCount, timeTaken)) {
      Swal.fire("Updated database successfully!", "", "success").then(() => {
        window.location.reload();
      });
    } else {
      alert(
        "Something went wrong when updating the database. Please try again later"
      );
    }
  });

  // Reset the answers array
  answers.length = 0;
}
