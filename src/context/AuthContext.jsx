import { createContext, useState, useEffect } from "react";
import { axiosInstance } from "../config/apiConfig";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("AuthorisationJWToken") || null;

  const [leaderboardData, setLeaderboardData] = useState([]);
  const [userStats, setUserStats] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [userTotalPoints, setUserTotalPoints] = useState(null);
  const [userTotalGames, setUserTotalGames] = useState(null);

  const getLeaderboardData = async () => {
    try {
      const responses = await axiosInstance.get("/user/stats/all");
      setLeaderboardData(responses.data);
    } catch (error) {
      console.error(error);
    }
  };

  const userAuthorised = async () => {
    if (accessToken !== null) {
      try {
        setIsLoading(true);
        const responses = await axiosInstance.get(`/user/stats/current`, {
          headers: { authorisation: `${accessToken}` },
        });
        setIsLoading(false);
        if (responses.status !== "fail") {
          setUserStats(responses.data);
          setUserTotalPoints(responses.data[0].totalPoints);
          setUserTotalGames(responses.data[0].totalGamesPlayed);
          navigate(`/home/${responses.data[0].userID}`);
        } else {
          navigate("/");
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    getLeaderboardData();
    userAuthorised();
  }, [accessToken]);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        leaderboardData,
        userStats,
        questions,
        setQuestions,
        isLoading,
        userTotalPoints,
        userTotalGames,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
