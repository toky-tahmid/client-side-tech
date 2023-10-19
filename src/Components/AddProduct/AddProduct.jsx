import Swal from "sweetalert2";
const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const brand_name = form.brand_name.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const newProduct = {name,photo,description,price,brand_name,type,rating};
    console.log(newProduct);
    fetch('http://localhost:5000/product',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newProduct),
    })
    .then(res =>res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              Toast.fire({
                icon: 'success',
                title: 'Product Added Successfully'
              })
        }
    })

  };

  return (
    <div className="flex justify-center items-center h-screen -mt-10">
      <div className="relative flex flex-col text-gray-700  w-96 rounded-xl ">
        <h2 className="text-2xl font-bold mb-6 text-center">Add a Product</h2>
        <form onSubmit={handleAddProduct}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Image URL:
            </label>
            <input
              type="text"
              name="photo"
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
              placeholder="Rating"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
