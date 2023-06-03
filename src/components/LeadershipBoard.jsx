import React, { useState, useEffect } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { axiosInstance } from "../config/apiConfig";

export default function LeadershipBoard() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const getLeaderboardData = async () => {
      try {
        const responses = await axiosInstance.get("/user/stats/all");
        setLeaderboardData(responses.data);
      } catch (error) {
        console.error(error);
      }
    };

    getLeaderboardData();
  }, []);

  const sortData = leaderboardData.sort((a, b) => {
    return b.totalPoints - a.totalPoints;
  });

  return (
    <MDBTable className="leaderboard-container bg-secondary text-white rounded w-75">
      <MDBTableHead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Games Played</th>
          <th scope="col">Total Points</th>
          <th scope="col">Win Percentage</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {sortData?.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.username}</td>
            <td>{item.totalGamesPlayed}</td>
            <td>{item.totalPoints}</td>
            <td>{item.winPercentage}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
}
