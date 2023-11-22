import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://bistro-boss-restaurant-server-ashy.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("error tracked in the interceptor", error.response);
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => console.error(error));
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
