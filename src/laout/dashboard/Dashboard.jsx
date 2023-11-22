import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hook/useAdmin";
import useAuth from "../../hook/useAuth";

const Dashboard = () => {
  const {user} = useAuth();
  // TODO:
  const [isAdmin] = useAdmin();
  console.log(isAdmin)

  return (
    <div className="grid grid-cols-12 bg-[#F6F6F6]">
      <div className="col-span-2">
        <div className=" bg-[#D1A054] text-[#151515] min-h-screen fixed z-10 px-3 py-10">
          <div className=" mb-8">
            <h1 className="text-3xl font-bold">BISTRO BOSS</h1>
            <h1 className="tracking-[9.8px]">Restaurant</h1>
          </div>
          <div className="flex flex-col space-y-2">
            {user && isAdmin ? (
              <>
                <NavLink
                  to="/dashboard/adminHome"
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                >
                  Admin Home
                </NavLink>
                <NavLink
                  to="/dashboard/addItem"
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                >
                  add items
                </NavLink>
                <NavLink
                  to="/dashboard/manageItems"
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                >
                  manage items
                </NavLink>
                <NavLink
                  to="/dashboard/manageBookings"
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                >
                  Manage bookings
                </NavLink>
                <NavLink
                  to="/dashboard/allUsers"
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                >
                  all users
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/dashboard/userHome"
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                >
                  User Home
                </NavLink>
                <NavLink
                  to="/dashboard/reservation"
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                >
                  reservation
                </NavLink>
                <NavLink
                  to="/dashboard/paymentHistory"
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                >
                  payment history
                </NavLink>
                <NavLink
                  to="/dashboard/cart"
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                >
                  My Cart
                </NavLink>
                <NavLink
                  to="/dashboard/addReview"
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                >
                  add review
                </NavLink>
                <NavLink
                  to="/dashboard/bookings"
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                >
                  my booking
                </NavLink>
              </>
            )}
            <div className="divider"></div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Our Menu</NavLink>
            <NavLink to="/shop">Order Food</NavLink>
          </div>
        </div>
      </div>
      <div className="col-span-10 px-10 py-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
