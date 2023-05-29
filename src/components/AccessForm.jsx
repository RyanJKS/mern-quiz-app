import React, { useState, useRef } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../config/apiConfig";
import { InitialUserStats } from "../data/InitialUserStats";
import Swal from "sweetalert2";

function AccessForm() {
  const [justifyActive, setJustifyActive] = useState("tab2");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const navigate = useNavigate();

  const signInUsername = useRef(null);
  const signInPassword = useRef(null);
  const signUpUsername = useRef(null);
  const signUpPassword = useRef(null);

  //LOGIN USER
  const signIn = async () => {
    try {
      let responses = await axiosInstance.post("/user/authentication/login", {
        username: signInUsername.current.value,
        password: signInPassword.current.value,
      });

      if (responses.status === 200) {
        const response = responses.data;
        localStorage.setItem("AuthorisationJWToken", response.token);
        navigate("/Home/" + response.data._id);
      }
    } catch (error) {
      alert("Wrong Credentials");
    }
  };
  const signUp = async () => {
    //CREATE NEW USER
    try {
      let responses = await axiosInstance.post(
        "/user/authentication/register",
        {
          username: signUpUsername.current.value,
          password: signUpPassword.current.value,
        }
      );
      if (responses.status === 200) {
        Swal.fire(
          "Congratulations!",
          "You have successfully signed up. Please log in to play the game.",
          "success"
        );
        //CREATE USER INITIAL STATS
        try {
          await axiosInstance.post(
            "/user/stats/register",
            InitialUserStats(responses.data._id, responses.data.username)
          );
        } catch (error) {
          alert(error.message);
        }

        setTimeout(function () {
          window.location.reload();
        }, 2000);
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
    <MDBContainer className="access-form p-2 d-flex flex-column">
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between w-100"
      >
        {/*SELECTION TAB */}
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      {/* SIGN IN FORM */}

      <MDBTabsContent className="w-100">
        <MDBTabsPane show={justifyActive === "tab1"}>
          <MDBInput
            wrapperClass="mb-4"
            label="Username"
            type="text"
            ref={signInUsername}
          />
          <MDBInput
            wrapperClass="mb-4"
            type="password"
            label="Password"
            ref={signInPassword}
          />

          <MDBBtn className="mb-4 w-100" onClick={signIn}>
            Sign in
          </MDBBtn>
          <p className="text-center">
            Not a member?{" "}
            <a href="#!" onClick={() => setJustifyActive("tab2")}>
              Register
            </a>
          </p>
        </MDBTabsPane>
        {/*REGISTRATION FORM */}
        <MDBTabsPane show={justifyActive === "tab2"}>
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
            <a href="#!" onClick={() => setJustifyActive("tab1")}>
              Sign In
            </a>
          </p>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default AccessForm;
