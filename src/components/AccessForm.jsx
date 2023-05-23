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
import "./AccessForm.css";

function AccessForm() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const signInEmail = useRef(null);
  const signInPassword = useRef(null);
  const signUpUsername = useRef(null);
  const signUpPassword = useRef(null);

  const signIn = () => {
    console.log("Ah");
  };
  const signUp = () => {
    console.log("Ah");
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
            type="email"
            label="Email"
            ref={signInEmail}
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
