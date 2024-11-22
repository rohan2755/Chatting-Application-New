import axios from "axios";

// Create the Axios instance with the base URL and credentials setting
const axiosInstance = axios.create({
  // baseURL: "https://adminapi.yoursay.live/v1", // Use this in production
   baseURL: `http://localhost:8000/v1`, // Local development
  withCredentials: true, // Ensures cookies are sent with requests  
});
export default axiosInstance;
