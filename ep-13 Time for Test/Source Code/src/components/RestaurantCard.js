import {CDN_URL} from "../utils/constants";


// Restaurant Card
const RestaurantCard = (props) =>{
    const {resData} = props;

    console.log(resData);   
    
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,locality} = resData.info;
    return(
        <div data-testid="resCard" className="m-4 p-2 w-[250px] h-[400px] border border-solid rounded-sm shadow-xl bg-gray-100 hover:bg-gray-200 hover:mt-1">
        <img className="h-40 w-[250px] mb-1 rounded-lg " src={CDN_URL + cloudinaryImageId} />
        <h3 className="font-bold text-lg">{name}</h3>
        <h4 className="pt-4">{cuisines.join(", ")}</h4>
        <h4 className="font-semibold ">{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{locality}</h4>
        </div>
    );
};

// Higher Order Component
// input => RestaurantCard => RestaurantCardIsOpen

export const withIsOpen = (RestaurantCard) =>{

    return (props) =>{
        return (
            <div>
                <label className="absolute mt-2 ml-6 px-2 rounded-lg bg-green-700  text-white font-semibold">Open</label>
                    <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;