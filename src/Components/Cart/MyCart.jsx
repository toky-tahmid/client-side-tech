import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const carts = useLoaderData();
  console.log(carts);
const [deleteCart, setDeleteCart] =useState(carts)
const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
          fetch(`https://server-side-pybun2ziy-tahmids-projects-090073b6.vercel.app/carts/${_id}`, {
              method: "DELETE"
          })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                      Swal.fire(
                          'Deleted!',
                          'Your Product has been deleted.',
                          'success'
                      )
                      const productsLeft = deleteCart.filter(productLeft => productLeft._id !== _id);
                      setDeleteCart(productsLeft)
                  }})}
  })             
}

  return (
    <div className="min-h-min max-w-8xl ml-36 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6 ">
      {deleteCart.map((cart) => (
        <div key={cart._id} className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
            <img
              src={cart.photo}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
               Name: {cart.name}
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
               Price: {cart.price}
              </p>
            </div>
          </div>
          <div className="p-6 pt-0">
            <button  onClick={() => handleDelete(cart._id)}
              className="btn btn-info ml-32"
              type="button"
            >
              Delete Product
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCart;
