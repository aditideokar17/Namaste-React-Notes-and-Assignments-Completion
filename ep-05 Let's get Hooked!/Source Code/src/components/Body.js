import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


// Body Component
const Body = () =>{
    // Local State Variable
    const [listOfRestaurant,setListOfRestaurant] = useState(resList);


    return(
        <div className="body">
            <div className="search">
            <input className="search-input" placeholder="search" />
            <button className="search-btn">search</button>
            </div>

            <div className="top-rated-res">
            <button className="top-rated-btn" onClick={
                
                () =>{
                    //filter logic here
                    const filteredList = resList.filter((res)=> res.info.avgRating > 4);
                    setListOfRestaurant(filteredList);
                }}
                
                >Top Rated Restaurants</button>
            </div>

            <div className="res-container">
                {/* Map function */}
                {
                    listOfRestaurant.map((res) =>
                     <RestaurantCard key={res.info.id} resData = {res}/>)
                }
            </div>
        </div>
    );
};


export default Body;