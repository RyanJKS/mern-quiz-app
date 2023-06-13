import { axiosInstance } from "../config/apiConfig";
import { InitialUserStats } from "../data/InitialUserStats";

export const SignIn = async (username, password) => {
  try {
    let responses = await axiosInstance.post("/user/authentication/login", {
      username: username,
      password: password,
    });

    if (responses.status === 200) {
      const response = responses.data;
      localStorage.setItem("AuthorisationJWToken", response.token);

      return response.data._id;
    }
  } catch (error) {
    return "Error";
  }
};

// CREATE COLLECTION WITH INTRO DATA ON REGISTRATION
const createUserStats = async (userID, username) => {
  try {
    await axiosInstance.post(
      "/user/stats/register",
      InitialUserStats(userID, username)
    );
    return true;
  } catch (error) {
    return false;
  }
};

export const SignUp = async (userInput) => {
  try {
    let responses = await axiosInstance.post(
      "/user/authentication/register",
      userInput
    );
    if (responses.status === 200) {
      if (createUserStats(responses.data._id, responses.data.username)) {
        return true;
      }
    }
  } catch (error) {
    return false;
  }
};

export const deleteAccount = async (accessToken, currentUserId) => {
  try {
    //AXIOS DELETE FORMAT DELETE.{URL, {HEADER, BODY}}
    const response = await axiosInstance.delete(
      `/user/delete/${currentUserId}`,
      {
        headers: { authorisation: `${accessToken}` },
        data: {
          userId: currentUserId,
        },
      }
    );
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};
