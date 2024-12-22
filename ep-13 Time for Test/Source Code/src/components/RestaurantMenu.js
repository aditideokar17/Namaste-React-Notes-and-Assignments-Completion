import { useState } from "react";
import Shimmer from "./Shimmer";
import {useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    // useParams
    const {resId} = useParams();

    // Custome Hook
    const resInfo = useRestaurantMenu(resId);

    // State Variable
    const [showIndex, setShowIndex] = useState(null); 


    if (resInfo === null) return <Shimmer />;

    // Destructuring info
    // console.log(resInfo);
    const { name, cuisines, avgRating } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);

    // filtering out Catgories
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);


    // JSX
    return (
        <div className="text-center m-3 shadow-lg border border-solid py-4">
            <h1 className="font-bold text-[40px]">{name}</h1>
            <h2 className="text-[20px]">{cuisines.join(", ")}</h2>
            <h3 className="text-green-600 font-bold text-[19px]">{avgRating} Stars</h3>
            
            {/* Category Accordion */}
            {categories.map((category,index) => 
            // controlled component
            <RestaurantCategory showItems={index === showIndex ? true : false} data={category?.card?.card} setShowIndex={() => setShowIndex(index)}/>)}

        </div>
    )
}

export default RestaurantMenu;