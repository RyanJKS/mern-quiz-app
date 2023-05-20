import "./App.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LeadershipBoard from "./components/LeadershipBoard";
import QuizCard from "./components/QuizCard";

function App() {
  return (
    <div className="App container">
      {/* <div className="page-title text-center p-4">
        <h1>Quiz Game</h1>
      </div> */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent="space-evenly">
          <Grid item xs={12} md={8} lg={8}>
            <QuizCard />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <LeadershipBoard />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
