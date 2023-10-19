import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Card/Cards";
import ContactUs from "../ContactUs/ContactUs";
import Services from "../Services/Services";

const Home = () => {
    const brands = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Cards brands={brands}></Cards>
            <Services></Services>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;