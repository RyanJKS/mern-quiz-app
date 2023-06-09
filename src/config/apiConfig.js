import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://mern-quiz-backend.onrender.com/",
});
