const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target
    
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
              id="image"
              name="image"
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
              id="name"
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
              id="brand"
              name="brand"
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
              id="type"
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
              type="number"
              id="price"
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
              id="description"
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
              type="number"
              id="rating"
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
