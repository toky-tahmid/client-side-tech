/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BrandsCard = () => {
  const { brand_name } = useParams();
  const brandsLoaded = useLoaderData();
  console.log(brandsLoaded);
  const [brandCards, setBrandCards] = useState([]);

  useEffect(() => {
    if (Array.isArray(brandsLoaded) && brandsLoaded.length > 0) {
      const filteredBrands = brandsLoaded.filter(
        (card) => card.brand_name.toLowerCase() === brand_name.toLowerCase()
      );
      setBrandCards(filteredBrands);
    }
  }, [brand_name, brandsLoaded]);

  if (brandCards.length === 0) {
    return (
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src="https://www.shutterstock.com/image-vector/vector-oops-symbol-260nw-133546157.jpg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Brand Not Found</h2>
          <p>Sorry, the requested brand could not be found.</p>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-3 ml-4">
        {brandCards.map((brandCard) => (
          <div key={brandCard._id}>
            <div className="carousel w-full h-96">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src={brandCard.image_url_1}
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>

            <div className="relative flex justify-evenly w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative w-1/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                <img
                  src={brandCard.photo}
                  alt="image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                  {brandCard.brand_name}
                </h6>
                <h4 className=""> Type: {brandCard.type}</h4>
                <h4>Price: {brandCard.price}</h4>
                <h4> Rating: {brandCard.rating}</h4>

                <div className="btn-group mr-10 mt-6">
                  <button className="btn btn-active">Update</button>

                  <button className="btn">Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BrandsCard;
