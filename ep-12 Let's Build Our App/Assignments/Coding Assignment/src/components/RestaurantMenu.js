import ResShimmer from "./ResShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "../components/RestaurantCategory"
import { useState } from "react";

const RestaurantMenu = () => {
    // useParams
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    // State Variable
    const [showIndex, setShowIndex] = useState(null); 

    if (resInfo === null) return <ResShimmer />;

    // Destructuring restaurant information
    const { name, cuisines, areaName, avgRating, isOpen, locality, imageId } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

       // filtering out Catgories
       const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
       console.log(categories);

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            {/* Restaurant Info */}
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
                    <p className={`text-lg font-semibold ${isOpen ? "text-green-500" : "text-red-500"}`}>
                        {isOpen ? "Open Now" : "Closed"}
                    </p>
                </div>
                <div className="mt-4 text-gray-600">
                    <p className="mb-2">
                        <span className="font-semibold">Cuisines: </span>{cuisines.join(", ")}
                    </p>
                    <p className="mb-2">
                        <span className="font-semibold">Location: </span>{areaName}, {locality}
                    </p>
                    <p className="mb-2">
                        <span className="font-semibold">Average Rating: </span>{avgRating} ⭐
                    </p>
                </div>
            </div>

            {/* Menu Items */}
             {/* Category Accordion */}
             {categories.map((category,index) => 
            // controlled component
            <RestaurantCategory showItems={index === showIndex ? true : false} data={category?.card?.card} setShowIndex={() => setShowIndex(index)}/>)}
        </div>
    );
};

export default RestaurantMenu;
