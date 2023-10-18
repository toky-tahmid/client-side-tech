/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({ brand }) => {
  const { id, brand_image, brand_name} = brand || {};
  return (
    <>

<Link to={`/brandsCard/${ brand_name }`}>
<div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border h-96">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-full rounded-xl bg-clip-border">
    <img className="h-full w-full" src={brand_image} alt="profile-picture" />
  </div>
  <div className="p-6 text-center">
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-500">
     {brand_name}
    </h4>
  </div>
  
</div>

</Link>

    </>
  );
};

export default Card;
