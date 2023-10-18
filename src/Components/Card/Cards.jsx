/* eslint-disable react/prop-types */
import Card from "./card";

const Cards = ( {brands} ) => {
    return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6 ml-20">
        {
         brands?.map(brand => <Card key={brand.id} brand={brand}></Card>)
        } 
     </div>
    );
};

export default Cards;