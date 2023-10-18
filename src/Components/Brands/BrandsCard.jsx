import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BrandsCard = () => {
    const { brand_name } = useParams();
   
  const brandsLoaded = useLoaderData();
  console.log(brandsLoaded)
  const [brandCard, setBrandCard] = useState(null);
  useEffect(() => {
    if (Array.isArray(brandsLoaded) && brandsLoaded.length > 0) {
      const findBrandCard = brandsLoaded.find((card) => card.brand_name === brand_name);

        setBrandCard(findBrandCard);
    } 
  }, [brand_name, brandsLoaded]);
  
  if (!brandCard) {
    return;
  }
  return (
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative h-96 w-full">
      <img src={brandCard.image_url_1} className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5  top-1/2">
        <a href="#slide3" className="btn btn-circle"> 
          ❮
        </a>
        <a href="#slide2" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
    <div id="slide2" className="carousel-item relative h-96 w-full">
      <img src={brandCard.image_url_2} className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide3" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
    <div id="slide3" className="carousel-item relative h-96 w-full">
      <img src={brandCard.image_url_3} className="w-full" />
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
  
 
  );
};

export default BrandsCard;

