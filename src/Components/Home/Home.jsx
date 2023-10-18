import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Card/Cards";
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {
    const brands = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Cards brands={brands}></Cards>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;