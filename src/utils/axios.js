import axios from "axios";

// const axiosInstance = axios.create({
// });

const axiosInstance = axios.create({
  baseURL: "http://192.168.1.21:5001",
  // baseURL: "http://122.160.55.164:5001",
  // baseURL:'https://bharat-gpt-production.up.railway.app/'
});

export default axiosInstance;
