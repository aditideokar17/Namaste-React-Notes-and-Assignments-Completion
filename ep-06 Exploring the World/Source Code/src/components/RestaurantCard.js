import {CDN_URL} from "../utils/constants";


// Restaurant Card
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,locality} = resData.info;
    return(
        <div className="res-card">
        <img src={CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{locality}</h4>
        </div>
    );
};

export default RestaurantCard;