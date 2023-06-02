import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { onSaveAnswer } from "../helper/Game";

export default function QuizCard({ question, questionIndex, options }) {
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  const handleButtonClick = (optionIndex) => {
    if (activeButtonIndex !== optionIndex) {
      setActiveButtonIndex(optionIndex);
    } else {
      setActiveButtonIndex(null);
    }
    onSaveAnswer(questionIndex, optionIndex);
  };

  const choiceBtnStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Card
      sx={{
        width: "80%",
        height: "40vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#282c34",
        boxShadow: "0px 5px 10px 0px rgba(0,255,255,0.7)",
        color: "white",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Question {questionIndex + 1} / 10
        </Typography>

        <Typography variant="body2">{question}</Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={2}>
          {options.map((item, optionIndex) => (
            <Grid item xs={6} lg={6} style={choiceBtnStyles} key={optionIndex}>
              <Button
                variant={
                  activeButtonIndex === optionIndex ? "contained" : "outlined"
                }
                key={optionIndex}
                onClick={() => handleButtonClick(optionIndex)}
                style={{ width: "100%", height: "100%" }}
              >
                {item.option}
              </Button>
            </Grid>
          ))}
        </Grid>
      </CardActions>
    </Card>
  );
}
