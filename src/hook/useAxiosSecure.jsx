import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://bistro-boss-restaurant-server-ashy.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
 
  return axiosSecure;
};

export default useAxiosSecure;
