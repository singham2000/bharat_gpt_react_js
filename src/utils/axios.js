import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:3000",
// });

const axiosInstance = axios.create({
//   baseURL: "http://192.168.1.2:5000",
  baseURL:'https://bharat-gpt-production.up.railway.app/'
});

export default axiosInstance;
