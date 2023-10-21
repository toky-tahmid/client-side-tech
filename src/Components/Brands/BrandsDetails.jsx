import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const BrandsDetails = () => {
  const detailsCard = useLoaderData();
  console.log(detailsCard);

  const { name, photo, brand_name, description, price, type } = detailsCard;

  const detailsCardUpdated = {
    name,
    photo,
    brand_name,
    description,
    price,
    type,
  };

  const handleAddCart = () => {
    fetch("https://server-side-pybun2ziy-tahmids-projects-090073b6.vercel.app/carts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(detailsCardUpdated),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

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
      title: "Product Added to My Cart",
    });
  };

  return (
    <div className="max-w-3xl flex lg:max-w-5xl w-full ml-14 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
        <img
          src={photo}
          alt="image"
          className="object-cover w-full h-full max-w-full"
        />
      </div>
      <div className="p-6">
        <h6 className="block mb-4 font-sans text-2xl antialiased font-bold leading-relaxed tracking-normal text-pink-500 uppercase">
          {name}
        </h6>
        <h4 className="block mb-2 font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
          {brand_name}
        </h4>
        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          {description}
        </p>
        <a className="inline-block" href="#">
          <button
            onClick={handleAddCart}
            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Add To Cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default BrandsDetails;
