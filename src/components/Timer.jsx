import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Swal from "sweetalert2";

function Timer({ submitQuiz }) {
  const initialTime = 10; //in seconds
  const increment = 1; //in seconds

  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [timerColor, setTimeColor] = useState("green");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= initialTime / 2) {
          setTimeColor("red");
        }

        if (prevTime === 0) {
          clearInterval(timer);
          Swal.fire({
            title: `Oh ohhhhh. You\'re out of time!`,
            icon: "error",
            confirmButtonText: "OK",
          }).then(() => {
            submitQuiz();
          });

          return prevTime;
        } else {
          return prevTime - increment;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressbar
        value={timeRemaining}
        maxValue={initialTime}
        text={`${timeRemaining}s`}
        styles={buildStyles({
          textColor: timerColor,
          // Path color
          pathColor: timerColor,
        })}
      />
    </div>
  );
}

export default Timer;
