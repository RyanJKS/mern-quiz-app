import React, { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { AuthContext } from "../../../context/AuthContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

function LineChart() {
  const { currentUser } = useContext(AuthContext);

  let time = [30, 26, 21, 18, 17, 16, 15, 15, 15]; //time taken each game - sample data
  let games = Array.from({ length: 10 }, (_, i) => i); // number of games based on the amount of time input

  if (currentUser !== null) {
    time = currentUser.timePerGame;
  }

  const data = {
    labels: games,
    datasets: [
      {
        label: "Game",
        data: time,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 30,
        title: {
          display: true,
          text: "Time (seconds)",
        },
      },
      x: {
        min: 0,
        max: time.length + 1,
        display: true,
        title: {
          display: true,
          text: "Game Played",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Time Tracker Chart",
      },
    },
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}

export default LineChart;
