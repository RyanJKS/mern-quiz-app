import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function QuizCard({
  question,
  questionIndex,
  options,
  submitAnswer,
}) {
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  const handleButtonClick = (optionIndex) => {
    if (activeButtonIndex !== optionIndex) {
      setActiveButtonIndex(optionIndex);
    } else {
      setActiveButtonIndex(null);
    }

    submitAnswer(questionIndex, optionIndex);
  };

  const choiceBtnStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Card
      sx={{
        width: 350,
        height: 280,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Question Number : {questionIndex + 1}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {question}
        </Typography>
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
