// import { MdDelete } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import Tittle from "../../component/title/Tittle";
import useAxiosSecure from "../../hook/useAxiosSecure";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // const totalPrice = menuItems.reduce((total, item) => total + item.price, 0);

  const handelDelete = (id) => {
    console.log(id);
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Successfully",
              text: "User Deleted",
              icon: "success",
              confirmButtonText: "oky",
            });
            refetch();
          }
        });
      }
    });
  };

  const makeAdmin = (id) => {
    axiosSecure.patch(`/users/admin/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "Successfully",
          text: "User Role Update",
          icon: "success",
          confirmButtonText: "oky",
        });
      }
    });
  };

  return (
    <div className="">
      <div className="">
        <Tittle
          header={"MANAGE ALL USERS"}
          subHeader={"---How many?---"}
        ></Tittle>
      </div>
      <div className="bg-white px-12 py-5 mt-8">
        <div className="mt-5">
          <h1 className="text-3xl">Total Users: {users.length}</h1>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table mt-4">
              {/* head */}
              <thead className="bg-[#D1A054] text-white">
                <tr>
                  <th></th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>ROLE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item) => (
                  <tr key={item._id}>
                    <th>1</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      {item.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          onClick={() => makeAdmin(item._id)}
                          className="bg-[#EA4744] p-[10px] rounded"
                        >
                          <FaUsers className="text-white"></FaUsers>
                        </button>
                      )}
                    </td>
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

export default AllUsers;
