import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Card/Cards";

const Home = () => {
    const brands = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Cards brands={brands}></Cards>

        </div>
    );
};

export default Home;