import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./DoughnutChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const decideData = (data) => {
  if (data?.length > 0) {
    const pointsWon = data[0]?.totalPoints;
    const pointsLost = data[0]?.totalGamesPlayed * 20 - pointsWon;
    return [pointsWon, pointsLost];
  } else {
    return [50, 50];
  }
};

export const chartData = (data) => {
  return {
    labels: ["Points Won", "Points Lost"],
    datasets: [
      {
        label: "",
        data: decideData(data),
        backgroundColor: ["rgb(0,255,255)", "rgb(255, 0, 0)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
};

function DoughnutChart({ data }) {
  return (
    <div className="chart-size">
      <Doughnut data={chartData(data)} />;
    </div>
  );
}

export default DoughnutChart;
