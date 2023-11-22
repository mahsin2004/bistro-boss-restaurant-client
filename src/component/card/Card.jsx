import PropTypes from "prop-types";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useCart from "../../hook/useCart";
import useAdmin from "../../hook/useAdmin";
const Card = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [cartItems, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const [isAdmin] = useAdmin();

  const handleCart = async (id) => {
    if (user && isAdmin) {
      Swal.fire({
        icon: "error",
        title: "Your are admin you can not add",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      if (user) {
        const matchItem = cartItems?.find(
          (item) => item.menuId === id && item.email === user.email
        );
        if (matchItem) {
          Swal.fire({
            icon: "success",
            title: "Item Already Added",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          const menuId = id;
          const email = user.email;
          const cartItem = {
            name,
            recipe,
            image,
            price,
            menuId,
            email,
          };
          axiosSecure.post("/carts", cartItem).then((res) => {
            console.log("Response from server:", res.data);
            if (res.data.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Item Added Cart Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              refetch();
            }
          });
        }
      } else {
        Swal.fire({
          title: "Login Now",
          text: "Login First then add cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Log in",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login", { state: location.pathname });
          }
        });
      }
    }
  };

  return (
    <div className="card  bg-base-100 border-2 drop-shadow-sm">
      <div className="relative">
        <figure>
          <img className="w-[424px] h-[300px]" src={image} alt="Shoes" />
        </figure>
        <div className="absolute bg-slate-900 text-white top-0 right-0 py-2 px-4 mr-1 mt-1">
          <p>${price}</p>
        </div>
      </div>
      <div className="card-body text-center">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p>{recipe}</p>
        <div className="text-center text-[#BB8506] mt-4">
          <button
            onClick={() => handleCart(_id)}
            className="px-[30px] py-[10px] rounded-lg hover:bg-gray-800 border-[#BB8506] hover:border-none border-b-4 bg-[#E8E8E8]"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};

export default Card;
