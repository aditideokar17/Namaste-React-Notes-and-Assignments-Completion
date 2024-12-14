import ResShimmer from "./ResShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    // useParams
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <ResShimmer />;
    
    // destructuring 
    const { name, cuisines, areaName, avgRating, isOpen, locality, imageId } = resInfo?.cards[2]?.card?.card?.info;
    
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
                    {itemCards.map((item)=>(<li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price / 100} Rs for Two  </li>
                    ))}
                </ul>
            </div>
        </div>


    )
}

export default RestaurantMenu;