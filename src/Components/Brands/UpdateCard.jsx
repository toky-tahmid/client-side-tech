import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCard = () => {
  const card = useLoaderData();
  console.log(card);
  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const brand_name = form.brand_name.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const newUpdatedProduct = {
      name,
      photo,
      description,
      price,
      brand_name,
      type,
      rating,
    };
    console.log(newUpdatedProduct);
    fetch(`http://localhost:5000/product/${card._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUpdatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "success",
            title: "Product Updated Successfully",
          });
        }
      });
  };
  return (
    <div className="flex justify-center items-center h-screen -mt-10">
      <div className="relative flex flex-col text-gray-700  w-96 rounded-xl ">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Brand</h2>
        <form onSubmit={handleUpdateProduct}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Image URL:
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={card.photo}
              placeholder="Image URL"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name:
            </label>
            <input
              type="text"
              name="name"
              defaultValue={card.name}
              placeholder="Name"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Brand Name:
            </label>
            <input
              type="text"
              name="brand_name"
              defaultValue={card.brand_name}
              placeholder="Brand Name"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Type:
            </label>
            <input
              type="text"
              name="type"
              defaultValue={card.type}
              placeholder="Type"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Price:
            </label>
            <input
              type="text"
              name="price"
              defaultValue={card.price}
              placeholder="Price"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Short Description:
            </label>
            <textarea
              type="text"
              name="description"
              defaultValue={card.description}
              placeholder="Short Description"
              className="w-full border rounded px-3 py-2"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Rating:
            </label>
            <input
              type="text"
              name="rating"
              defaultValue={card.rating}
              placeholder="Rating"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCard;
