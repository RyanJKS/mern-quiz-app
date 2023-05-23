import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

export default function LeadershipBoard() {
  return (
    <MDBTable className="bg-secondary text-white rounded w-75">
      <MDBTableHead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Games Played</th>
          <th scope="col">% Win</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Mark</td>
          <td>Mark</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Jacob</td>
          <td>Jacob</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}
