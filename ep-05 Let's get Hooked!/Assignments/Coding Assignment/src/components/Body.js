import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import staticData from "../utils/mockData";

// Body Component
const Body = () => {

    // Local State Variable
    const [listOfRestaurants,setListOfRestaurants] = useState(staticData);
    const [searchInput,setSearchInput] = useState("");

    return (
        <div className="body">

            {/* SearchBar */}
            <div className="search">
                <input className="search-input" type="text" placeholder="search restaurant.." value={searchInput} onChange={(e)=>{setSearchInput(e.target.value)}}></input>

                <button className="search-btn" onClick={()=>{
                    const searchRes = staticData.filter((res) =>
                        res.info.name.toLocaleLowerCase().includes(searchInput))
                    setListOfRestaurants(searchRes);
                }}>search</button>
            </div>

            <div className="filters">
                {/* All Restaurants */}
                <div className="filter-btn-container">
                    <button className="filter-btn" onClick={()=>{setListOfRestaurants(staticData)}}>All</button>
                </div>

                {/* Top Rated Restaurant */}
                <div className="filter-btn-container">
                    <button className="filter-btn" onClick={()=>{
                        const filteredByRatingRestaurant = staticData.filter((res)=>res.info.avgRating > 4)
                        setListOfRestaurants(filteredByRatingRestaurant);
                    }}>Top Rated Restaurants</button>
                </div>
                
                {/* Delivery Time */}
                <div className="filter-btn-container">
                    <button className="filter-btn" onClick={()=>{
                        const filteredByDeliveryTime = staticData.filter((res)=>res.info.sla.deliveryTime < 50)
                        setListOfRestaurants(filteredByDeliveryTime);
                    }}>Delivery Time</button>
                </div>
            </div>

            <div className="res-container">
                {listOfRestaurants.map((restaurant) =>
                    <RestaurantCard resData={restaurant} key={restaurant.id} />
                )}
            </div>
        </div>
    )
}

export default Body;