import { createContext, useState, useEffect } from "react";
import { axiosInstance } from "../config/apiConfig";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const accessToken = localStorage.getItem("AuthorisationJWToken") || null;

  const [leaderboardData, setLeaderboardData] = useState([]);
  const [userStats, setUserStats] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);

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

  const updateDatabase = async (userID, correctCount) => {
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

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        leaderboardData,
        getSpecificUser,
        userStats,
        updateDatabase,
        showQuiz,
        setShowQuiz,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
