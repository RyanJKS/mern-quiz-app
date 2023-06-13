import React, { useRef } from "react";
import { MDBTabsPane, MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { SignIn } from "../../helper/Account";

function Login({ currentTab, switchTab }) {
  const navigate = useNavigate();

  const signInUsername = useRef(null);
  const signInPassword = useRef(null);

  const handleSignIn = () => {
    let result = SignIn(
      signInUsername.current.value,
      signInPassword.current.value
    );
    if (result !== "Error") {
      navigate("/home/" + result);
    } else {
      Swal.fire("Oops...!", "Wrong Credentials.", "error");
    }
  };
  return (
    <MDBTabsPane show={currentTab === "tab1"}>
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

      <MDBBtn className="mb-4 w-100" onClick={handleSignIn}>
        Sign in
      </MDBBtn>
      <p className="text-center">
        Not a member?{" "}
        <a href="#!" onClick={() => switchTab("tab2")}>
          Register
        </a>
      </p>
    </MDBTabsPane>
  );
}

export default Login;
