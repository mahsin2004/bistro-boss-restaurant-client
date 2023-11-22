import { NavLink } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hook/useCart";
import useAdmin from "../../hook/useAdmin";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const [cartItems] = useCart();
  const handleLogOut = () => {
    logOut()
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };
  const links = (
    <>
      <li className="text-xl font-bold text-white hover:text-red-500 hover:bg-none">
        <NavLink
          to="/"
          className={({ isPending, isActive }) =>
            isPending ? "" : isActive ? "text-[#EEFF25]" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-xl font-bold text-white hover:text-red-500">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          Dashboard
        </NavLink>
      </li>
      <li className="text-xl font-bold text-white hover:text-red-500">
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          Our Menu
        </NavLink>
      </li>
      <li className="text-xl font-bold text-white hover:text-red-500">
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          Order Food
        </NavLink>
      </li>

      {user && isAdmin ? (
        <>
          <NavLink to="/dashboard/manageItems">
            <button className="btn">
              <FaShoppingCart />
              <div className="badge badge-secondary">+{cartItems.length}</div>
            </button>
          </NavLink>
        </>
      ) : (
        <NavLink to="/dashboard/cart">
          <button className="btn">
            <FaShoppingCart />
            <div className="badge badge-secondary">+{cartItems.length}</div>
          </button>
        </NavLink>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar fixed top-0 z-10 bg-slate-900 bg-opacity-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <div className=" hidden lg:block lg:text-xl lg:text-white ">
            <h1 className="text-3xl font-bold">BISTRO BOSS</h1>
            <h1 className="tracking-[9.8px]">Restaurant</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="flex items-center lg:gap-1">
                <button
                  onClick={handleLogOut}
                  className="text-xl font-bold text-white hover:text-[#EEFF25]"
                >
                  Log out
                </button>
                <div className=" text-white ml-3">
                  <div className="text-right hidden md:block lg:block">
                    <p className="text-[14px]">{user?.displayName}</p>
                  </div>
                </div>
                <img className="w-8 rounded-full" src={user?.photoURL}></img>
              </div>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? " text-[#EEFF25]" : ""
                }
              >
                <p className="text-xl font-bold text-[#EEFF25]">Log In</p>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
