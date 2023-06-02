import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { axiosInstance } from "../config/apiConfig";
import { AuthContext } from "../context/AuthContext";
import Stack from "@mui/material/Stack";
import Button from "react-bootstrap/Button";
import Grid from "@mui/material/Grid";
import LeadershipBoard from "../components/LeadershipBoard";
import Dashboard from "../components/Dashboard";
import { SampleQuestion } from "../data/SampleQuestions";
import Swal from "sweetalert2";
import { deleteAccount } from "../helper/Account";

function Home() {
  const { accessToken, setQuestions, leaderboardData } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  const currentUserId = location.pathname.split("/")[2];

  const getQuestions = async () => {
    try {
      // let responses = await axiosInstance.get("/api/getquiz");
      // setQuestions(responses.data.questions.slice(0, 10));
      setQuestions(SampleQuestion.slice(0, 10));

      navigate(`/game-session/${currentUserId}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("AuthorisationJWToken");
    navigate("/");
  };

  const handleDeleteAccount = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteAccount(accessToken, currentUserId);
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your stats have been deleted.",
            "success"
          );
          localStorage.removeItem("AuthorisationJWToken");
          navigate("/");
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your stats are safe :)",
            "error"
          );
        }
      });
  };

  return (
    <Grid
      container
      item
      direction="row-reverse"
      padding="2rem 0 2rem 0"
      spacing={2}
    >
      {/*3 BUTTONS FOR HANDLE USER LOCATION */}
      <Grid item xs={12} lg={12}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Button onClick={getQuestions}>Start Game</Button>
          <Button onClick={handleLogOut}>Log Out</Button>
          <Button onClick={handleDeleteAccount}>Delete Account</Button>
        </Stack>
      </Grid>

      {/*LEADERSHIP BOARD */}
      <Grid
        item
        xs={12}
        lg={4}
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
      >
        <LeadershipBoard data={leaderboardData} />
      </Grid>

      {/*DASHBOARD or USER ACCESS FORM (LOGIN/REGISTRATION) */}
      <Grid item xs={12} lg={8} display="flex" justifyContent="center">
        <Dashboard />
      </Grid>
    </Grid>
  );
}

export default Home;
