import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

export default function LeadershipBoard({ data }) {
  const sortData = data?.sort((a, b) => {
    return b.totalPoints - a.totalPoints;
  });
  return (
    <MDBTable className="leaderboard-container bg-secondary text-white rounded w-25">
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
