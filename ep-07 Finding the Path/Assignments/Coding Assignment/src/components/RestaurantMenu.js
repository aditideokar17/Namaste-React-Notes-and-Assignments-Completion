import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import Shimmer from "./Shimmer";
import ResShimmer from "./ResShimmer";

const RestaurantMenu = () => {

    // local state variable
    const [resInfo, setResInfo] = useState(null);

    // useParams
    const { resId } = useParams();

    // useEffect
    useEffect(() => {
        fetchMenu();
    }, []);

    // Fetching Menu
    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);

        const json = await data.json();
        // console.log(json.data);
        
        setResInfo(json.data);
    };
    
    if (resInfo === null) return <ResShimmer />;
    
    // destructuring 
    const { name, cuisines, areaName, avgRating, isOpen, locality } = resInfo?.cards[2]?.card?.card?.info;
    
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);

    return (
        <div className="res-menu-main-container">
            <div className="res-info-container">
                <h1>{name}</h1>

                <div className="res-info">
                    <h2>{cuisines.join(", ")}</h2>
                    <p>{areaName}, {locality}</p>
                    <p>{avgRating} Stars</p>
                    <p>{isOpen === true ? "Open Now" : "Closed"}</p>
                </div>
            </div>

            <div className="res-menu-container">
                <ul className="res-menu-card">
                    {itemCards.map((item)=>(<li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price / 100} Rs for Two</li>
                    ))}
                </ul>
            </div>
        </div>


    )
}

export default RestaurantMenu;