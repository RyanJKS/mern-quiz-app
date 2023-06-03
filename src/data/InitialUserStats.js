export const InitialUserStats = (userId, userName) => {
  return {
    userID: userId,
    username: userName,
    totalPoints: 0,
    totalGamesPlayed: 0,
    winPercentage: 0,
    timePerGame: 0,
  };
};

//change name to registrationUserStats
