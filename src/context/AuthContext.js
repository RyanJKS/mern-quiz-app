import { createContext, useState, useEffect } from "react";
import { axiosInstance } from "../config/apiConfig";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("AuthorisationJWToken") || null;

  const [currentUser, setCurrentUser] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // check if user is logged in and has a jwt token.
  //if logged in, auto redirect to home page.
  // run on every render
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    const checkUser = async () => {
      try {
        const responses = await axiosInstance.get(`/user/stats/current`, {
          headers: { authorisation: `${accessToken}` },
          cancelToken: cancelToken.token,
        });

        if (responses.status === 200) {
          setCurrentUser(responses.data[0]);
          navigate(`/home/${responses.data[0].userID}`);
        } else {
          setCurrentUser(null);
          navigate("/");
        }
      } catch (err) {
        if (axios.isCancel(err)) {
          setCurrentUser(null);
          console.log("Request cancelled:", err.message);
        } else {
          console.log("Error:", err.message);
        }
      }
    };
    // run function only when access token is present
    if (accessToken) {
      checkUser();
    } else {
      navigate("/");
    }
    return () => {
      // Cleanup function to cancel the request
      cancelToken.cancel("Request cancelled due to component unmount");
    };
  }, [accessToken]);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        currentUser,
        questions,
        setQuestions,
        isLoading,
        setIsLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
