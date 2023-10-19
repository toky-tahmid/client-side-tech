import {  RiBankCardFill, RiCustomerService2Fill, RiEBike2Fill, RiShakeHandsFill } from "react-icons/ri";


const Services = () => {
  return (
<>
<div>
    <h1 className="text-4xl font-bold text-center">Our Services For You</h1>

</div>
<br />
<hr />
<br />
    <div className="flex">
      <div className="text-center">
        <RiEBike2Fill className="ml-44 text-2xl"></RiEBike2Fill>
        <h1 className="text-2xl font-bold">Free Free Delivery</h1>
        <h3 className="text-xl font-semibold">  And free returns. See checkout for delivery dates.</h3>
      </div>

      <div className="text-center">
        <RiBankCardFill className="ml-52 text-2xl"></RiBankCardFill>
        <h1 className="text-2xl font-bold">Safe Payment</h1>
        <h3 className="text-xl font-semibold">  Pay with the worlds most  secure payment methods.</h3>
      </div>

      <div className="text-center">
        <RiShakeHandsFill className="ml-40 text-2xl "></RiShakeHandsFill>
        <h1 className="text-2xl font-bold">Shop With Confidence</h1>
        <h3 className="text-xl font-semibold">  
          Our Buyer Protection covers your purchase <br /> from click to delivery.
        </h3>
      </div>

      <div className="text-center">
        <RiCustomerService2Fill className="ml-44  text-2xl "></RiCustomerService2Fill>
        <h1 className="text-2xl font-bold">24/7 Help Center</h1 >
        <h3 className="text-xl font-semibold">  Have a question? Call a Specialist or chat online.</h3>
      </div>
    </div>
    </>
  );
};

export default Services;
