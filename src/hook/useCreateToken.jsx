import axios from "axios";

const axiosToken = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://bistro-boss-restaurant-server-ashy.vercel.app",
  withCredentials: true,
});

const useCreateToken = () => {
  
  return axiosToken;
};

export default useCreateToken;
