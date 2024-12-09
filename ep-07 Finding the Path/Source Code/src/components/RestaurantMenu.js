import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    // Local State Variable
    const [resInfo, setResInfo] = useState(null);

    // useParams
    const {resId} = useParams();

    // useEffect
    useEffect(() => {
        fetchMenu();
    }, []);

    // fetchMenu
    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);

        const json = await data.json();
        setResInfo(json.data);

        // console.log(json.data);
        // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
    }

    if (resInfo === null) return <Shimmer />;

    // Destructuring info
    // console.log(resInfo);
    const { name, cuisines, avgRating } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div>
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{avgRating} Stars</h3>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price / 100} Rs</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;