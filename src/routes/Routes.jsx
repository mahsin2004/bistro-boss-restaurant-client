import { createBrowserRouter } from "react-router-dom";
import Main from "../laout/Main";
import Error from "../pages/Error";
import Home from "../pages/home/Home";
import MenuPage from "../pages/menu/MenuPage";
import Shop from "../pages/shop/Shop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../laout/dashboard/Dashboard";
import Cart from "../pages/dashboard/Cart";
import AllUsers from "../pages/dashboard/AllUsers";
import PrivetRoute from "./PrivetRoute";
import ManageItems from "../pages/dashboard/manageItems.Jsx";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";


  const Router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error></Error>,
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/menu",
          element: <MenuPage></MenuPage>
        },
        {
          path: "/shop",
          element: <Shop></Shop>
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ]
    },
    {
      path: "dashboard",
      element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
      children: [
        {
          path: "cart",
          element: <UserRoute><Cart></Cart></UserRoute>
        },
        {
          path: "allUsers",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: "manageItems",
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        }
      ]
    }
  ]);

export default Router;