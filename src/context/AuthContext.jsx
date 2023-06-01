import { createContext, useState, useEffect } from "react";
import { axiosInstance } from "../config/apiConfig";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const accessToken = localStorage.getItem("AuthorisationJWToken") || null;

  const [leaderboardData, setLeaderboardData] = useState([]);
  const [userStats, setUserStats] = useState([]);
  const [questions, setQuestions] = useState([]);

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

  useEffect(() => {
    getLeaderboardData();
  }, []);

  const getSpecificUser = async (currentUserId) => {
    try {
      const responses = await axiosInstance.get(
        `/user/stats/specific/${currentUserId}`
      );
      setUserStats(responses.data);
      setUserTotalPoints(responses.data[0].totalPoints);
      setUserTotalGames(responses.data[0].totalGamesPlayed);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        leaderboardData,
        getSpecificUser,
        userStats,
        questions,
        setQuestions,
        userTotalPoints,
        userTotalGames,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
