

import {CDN_URL} from "../utils/constant";

// RestaurantCard Component
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,avgRating,costForTwo,cuisines,} = resData.info;
    const {deliveryTime} = resData.info.sla;

    return(
        <div className="res-card">
        <img src={CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} min</h4>
        </div>
    )
}

export default RestaurantCard;