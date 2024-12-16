import {CDN_URL} from "../utils/constants";


// Restaurant Card
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,locality} = resData.info;
    return(
        <div className="m-4 p-2 w-[250px] h-[400px] border border-solid rounded-sm shadow-xl bg-gray-100 hover:bg-gray-200 hover:mt-1">
        <img className="h-40 w-[250px] mb-1 rounded-lg " src={CDN_URL + cloudinaryImageId} />
        <h3 className="font-bold text-lg">{name}</h3>
        <h4 className="pt-4">{cuisines.join(", ")}</h4>
        <h4 className="font-semibold ">{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{locality}</h4>
        </div>
    );
};

export default RestaurantCard;