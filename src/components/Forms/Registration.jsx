import React, { useRef } from "react";
import { MDBTabsPane, MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { SignIn, SignUp } from "../../helper/Account";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Registration({ currentTab, switchTab }) {
  const navigate = useNavigate();
  const signUpUsername = useRef(null);
  const signUpPassword = useRef(null);

  //CREATE NEW USER
  const signUp = async () => {
    let userInput = {
      username: signUpUsername.current.value,
      password: signUpPassword.current.value,
    };

    let results = await SignUp(userInput);

    if (results !== false) {
      let result = await SignIn(
        signUpUsername.current.value,
        signUpPassword.current.value
      );
      if (result !== "Error") {
        Swal.fire(
          "Congratulations!",
          "You have successfully signed up. Enjoy the game.",
          "success"
        );
        navigate("/home/" + result);
      } else if (result === "Error") {
        Swal.fire(
          "Oops...!",
          "An error occured when trying to log in. Please try loggin in manually.",
          "error"
        );
      }
    } else {
      Swal.fire(
        "Oops...!",
        "You already have an account. Please login to continue.",
        "error"
      );
    }
  };

  const handleDemoSignIn = () => {
    let result = SignIn("demo", process.env.REACT_APP_DEMO_PASSWORD);
    if (result !== "Error") {
      Swal.fire(
        "Congratulations!",
        "You have successfully signed in using the demo account. Enjoy the game.",
        "success"
      ).then(() => {
        navigate("/home/" + result);
      });
    } else {
      Swal.fire(
        "Oops...!",
        "There's an error accessing through the demo account. Please wait a few seconds for the database to load up",
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
      <p style={{ textAlign: "center" }}>or:</p>

      <MDBBtn className="mb-4 w-100" onClick={handleDemoSignIn}>
        Click here to use demo account
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
