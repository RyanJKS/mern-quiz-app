import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.RACT_APP_BACKEND_URL,
});
