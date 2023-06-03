import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { AuthContext } from "../../../context/AuthContext";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  const { currentUser } = useContext(AuthContext);

  const decideChartData = () => {
    if (currentUser !== null) {
      let pointsWon = currentUser.totalPoints;
      let pointsLost = currentUser.totalGamesPlayed * 10 - pointsWon;
      return [pointsWon, pointsLost];
    } else {
      return [50, 50]; // sample data
    }
  };

  const chartData = {
    labels: ["Points Won", "Points Lost"],
    datasets: [
      {
        label: "",
        data: decideChartData(),
        backgroundColor: ["rgb(0, 255, 0)", "rgb(255, 0, 0)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutoutPercentage: 70,
    plugins: {
      doughnutLabel: {
        labels: [
          {
            text: "Chart.js",
            font: {
              size: "30",
              weight: "bold",
            },
          },
          {
            text: "Empty State",
            font: {
              size: "24",
            },
          },
        ],
      },
    },
  };

  return (
    <div style={{ height: "30vh" }}>
      <Doughnut options={options} data={chartData} />
    </div>
  );
}

export default DoughnutChart;
