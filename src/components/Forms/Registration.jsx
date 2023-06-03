import React, { useRef } from "react";
import { MDBTabsPane, MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { axiosInstance } from "../../config/apiConfig";
import { InitialUserStats } from "../../data/InitialUserStats";
import Swal from "sweetalert2";

function Registration({ currentTab, switchTab }) {
  const signUpUsername = useRef(null);
  const signUpPassword = useRef(null);

  // CREATE COLLECTION WITH INTRO DATA ON REGISTRATION
  const createUserStats = async (userID, username) => {
    try {
      await axiosInstance.post(
        "/user/stats/register",
        InitialUserStats(userID, username)
      );
    } catch (error) {
      alert(error.message);
    }
  };

  //CREATE NEW USER
  const signUp = async () => {
    let userInput = {
      username: signUpUsername.current.value,
      password: signUpPassword.current.value,
    };

    try {
      let responses = await axiosInstance.post(
        "/user/authentication/register",
        userInput
      );
      if (responses.status === 200) {
        Swal.fire(
          "Congratulations!",
          "You have successfully signed up. Please log in to play the game.",
          "success"
        ).then(() => {
          createUserStats(responses.data._id, responses.data.username);
          switchTab("tab1");
        });
      }
    } catch (error) {
      Swal.fire(
        "Oops...!",
        "You already have an account. Please login to continue.",
        "error"
      );
    }
  };
  return (
    <MDBTabsPane show={currentTab === "tab2"}>
      <MDBInput
        wrapperClass="mb-4"
        label="Username"
        type="text"
        ref={signUpUsername}
      />

      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        type="password"
        ref={signUpPassword}
      />

      <MDBBtn className="mb-4 w-100" onClick={signUp}>
        Sign up
      </MDBBtn>
      <p className="text-center">
        Already a member?{" "}
        <a href="#!" onClick={() => switchTab("tab1")}>
          Sign In
        </a>
      </p>
    </MDBTabsPane>
  );
}

export default Registration;
