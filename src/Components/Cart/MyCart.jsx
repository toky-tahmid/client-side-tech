import { useLoaderData } from "react-router-dom";

const MyCart = () => {

    const Products =  useLoaderData()

    return (
        <div>
            <h2>have products:{Products.length}</h2>
        </div>
    );
};

export default MyCart;