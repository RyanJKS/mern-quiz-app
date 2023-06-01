import React, { useRef } from "react";
import { MDBTabsPane, MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { axiosInstance } from "../../config/apiConfig";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login({ currentTab, switchTab }) {
  const navigate = useNavigate();

  const signInUsername = useRef(null);
  const signInPassword = useRef(null);

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
        navigate("/home/" + response.data._id);
      }
    } catch (error) {
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

      <MDBBtn className="mb-4 w-100" onClick={signIn}>
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
