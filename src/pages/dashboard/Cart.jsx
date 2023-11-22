
import Swal from "sweetalert2";
import Tittle from "../../component/title/Tittle";
import useCart from "../../hook/useCart";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../hook/useAxiosSecure";

const Cart = () => {
  const [menuItems, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = menuItems.reduce((total, item) => total + item.price, 0);

  const handelDelete = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
           axiosSecure.delete(`/carts/${id}`)
            .then((res) => {
              console.log(res.data);
              if (res.data.deletedCount > 0) {
                Swal.fire({
                  title: "Successfully",
                  text: "Coffee Item Deleted",
                  icon: "success",
                  confirmButtonText: "oky",
                });
                refetch();
              }
            });
        }
      });
  }


  return (
    <div className="">
      <div className="">
        <Tittle header={"WANNA ADD MORE?"} subHeader={"---My Cart---"}></Tittle>
      </div>
      <div className="bg-white px-12 py-5 mt-8">
        <div className="mt-5 flex justify-between">
          <h1 className="text-3xl">Total Order:{menuItems.length}</h1>
          <h1 className="text-3xl">Total Price:{totalPrice}</h1>
          <button className="bg-[#D1A054] px-3 py-1 text-white rounded-md">
            Pay
          </button>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table mt-4">
              {/* head */}
              <thead className="bg-[#D1A054] text-white">
                <tr>
                  <th></th>
                  <th>ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {menuItems.map((item) => (
                  <tr key={item._id}>
                    <th>1</th>
                    <td><img className=" w-[75px] rounded-md" src={item.image} /></td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                        <button
                          onClick={() => handelDelete(item._id)}
                          className="bg-[#EA4744] p-[10px] rounded"
                        >
                          <MdDelete className="text-white"></MdDelete>
                        </button>
                     </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
