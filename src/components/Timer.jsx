import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Swal from "sweetalert2";

function Timer({ submitQuiz, timer, increment, clockTime, getClockTime }) {
  const [timerColor, setTimeColor] = useState("green");

  useEffect(() => {
    const getTime = () => {
      getClockTime((prevTime) => {
        if (prevTime <= timer / 2) {
          setTimeColor("red");
        }
        if (prevTime === 0) {
          clearInterval(currentTimer);
          Swal.fire({
            title: `Oh ohhhhh. You're out of time!`,
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
    };

    const currentTimer = setInterval(getTime, 1000);

    return () => {
      clearInterval(currentTimer);
    };
  }, []);

  return (
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressbar
        value={clockTime}
        maxValue={timer}
        text={`${clockTime}s`}
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
