import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";


// Body Component
const Body = () =>{
    // Local State Variable
    const [listOfRestaurant,setListOfRestaurant] = useState([]);

    // useEffect - to make api call
    useEffect(()=>{
        fetchData();
    },[]);

    // fetchData function 
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);

        
        // optional chaining
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


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