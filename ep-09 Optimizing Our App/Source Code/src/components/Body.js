import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// Body Component
const Body = () => {
    // Local State Variable
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    console.log(useState());

    // useEffect - to make api call
    useEffect(() => {
        fetchData();
    }, []);

    // fetchData function 
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);


        // optional chaining
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // Checking Online Status
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Looks like you're offline!! Check your intenrent connection.</h1>

    // Conditional Rendering
    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">

            {/* Search Filter */}
            <div className="search">
                <input className="search-input" placeholder="search" value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} />

                <button className="search-btn" onClick={() => {
                    const filteredRes = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchTxt.toLowerCase()));
                    setFilteredRestaurant(filteredRes);
                }}>search</button>
            </div>

            {/* Top Rated Restaurants */}
            <div className="top-rated-res">
                <button className="top-rated-btn" onClick={

                    () => {
                        //filter logic here
                        const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                        setListOfRestaurant(filteredList);
                    }}

                >Top Rated Restaurants</button>
            </div>

            <div className="res-container">
                {/* Map function */}
                {
                    filteredRestaurant.map((res) =>
                        <Link key={res.info.id} to={"/restaurant/" + res.info.id}><RestaurantCard  resData={res} /> </Link>)
                }
            </div>
        </div>
    );
};


export default Body;