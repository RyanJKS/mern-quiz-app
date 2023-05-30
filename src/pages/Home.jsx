import React, { useState, useEffect, useContext } from "react";
import Stack from "@mui/material/Stack";
import Button from "react-bootstrap/Button";
import GameSession from "./GameSession";
import { useNavigate, useLocation } from "react-router-dom";
import { axiosInstance } from "../config/apiConfig";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

function Home() {
  const [questions, setQuestions] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const location = useLocation();
  const currentUserId = location.pathname.split("/")[2];

  const { accessToken } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const responses = await axiosInstance.get("/api/getquiz");
        setQuestions(responses.data.questions);
      } catch (error) {
        console.error(error);
      }
    };

    if (showQuiz) {
      getQuestions();
    }
  }, [showQuiz]);

  const handleLogOut = () => {
    localStorage.removeItem("AuthorisationJWToken");
    navigate("/");
  };

  const handleDeleteAccount = async () => {
    try {
      //AXIOS DELETE FORMAT DELETE.{URL, {HEADER, BODY}}
      const response = await axiosInstance.delete(
        `/user/delete/${currentUserId}`,
        {
          headers: { authorisation: `${accessToken}` },
          data: {
            userId: currentUserId,
          },
        }
      );
      if (response.status === 200) {
        Swal.fire(
          "Account Deleted!",
          "You have successfully deleted your account and statistics.",
          "success"
        );
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }

    setTimeout(function () {
      window.location.reload();
    }, 2000);
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        width="80%"
        spacing={2}
      >
        <Button onClick={() => setShowQuiz(!showQuiz)}>
          {showQuiz ? "Stop Game" : "Start Game"}
        </Button>
        <Button onClick={handleLogOut}>Log Out</Button>
        <Button onClick={handleDeleteAccount}>Delete Account</Button>
      </Stack>

      {showQuiz ? (
        <GameSession
          questions={questions}
          isGameSession={setShowQuiz}
          currentUserId={currentUserId}
        />
      ) : null}
    </>
  );
}

export default Home;
