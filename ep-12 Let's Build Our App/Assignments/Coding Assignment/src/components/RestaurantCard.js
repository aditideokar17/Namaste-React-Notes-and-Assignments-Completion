import {CDN_URL} from "../utils/constant";

// RestaurantCard Component
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,avgRating,costForTwo,cuisines,} = resData.info;
    const {deliveryTime} = resData.info.sla;

    return(
        <div className="w-[300px] h-[400px] mx-3 border border-3 my-2 shadow-xl bg-white hover:mt-[-3px] ">
        <img className="w-[300px] h-[200px] rounded-lg p-2 " src={CDN_URL + cloudinaryImageId} />
        <h3 className="ml-2 font-bold text-lg">{name}</h3>
        <h4 className="ml-2 mt-3">{cuisines.join(", ")}</h4>
        <h4 className="ml-2">{avgRating} Stars</h4>
        <h4 className="ml-2">{costForTwo}</h4>
        <h4 className="ml-2">{deliveryTime} min</h4>
        </div>
    )
}

// Higher Order Component
// input => RestaurantCard => RestaurantCardIsOpen

export const withIsOpen = (RestaurantCard) =>{

    return (props) =>{
        return (
            <div>
                <label className="absolute mt-2 ml-5 px-2 rounded-sm bg-green-700  text-white font-semibold">Open</label>
                    <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;