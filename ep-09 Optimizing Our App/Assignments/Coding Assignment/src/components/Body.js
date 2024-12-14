import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import CARD_API from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

// Body Component
const Body = () => {


    // Local State Variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    // UseEffect Hook
    useEffect(() => {
        fetchData();
    }, []);

    // Fetching Data - by making api call
    const fetchData = async () => {
        const data = await fetch(CARD_API);

        const json = await data.json();

        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        );


        // optional chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

  // Checking Online Status
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>Looks like you're offline!! Check your intenrent connection.</h1>


    return (listOfRestaurants.length === 0) ? <Shimmer /> : (
        <div className="body">

            {/* SearchBar */}
            <div className="search">
                <input className="search-input" type="text" placeholder="search restaurant.." value={searchInput} onChange={(e) => { setSearchInput(e.target.value) }}></input>

                <button className="search-btn" onClick={() => {
                    const searchRes = listOfRestaurants.filter((res) =>
                        res.info.name.toLowerCase().includes(searchInput.toLowerCase()))
                    setFilteredRestaurant(searchRes);
                }}>search</button>
            </div>

            <div className="filters">
                {/* All Restaurants */}
                <div className="filter-btn-container">
                    <button className="filter-btn" onClick={() => {
                        setFilteredRestaurant(listOfRestaurants)
                        setSearchInput("");
                    }}>All</button>

                </div>

                {/* Top Rated Restaurant */}
                <div className="filter-btn-container">
                    <button className="filter-btn" onClick={() => {
                        const filteredByRatingRestaurant = listOfRestaurants.filter((res) => res.info.avgRating > 4)
                        setFilteredRestaurant(filteredByRatingRestaurant);
                        setSearchInput("");
                    }}>Top Rated Restaurants</button>
                </div>

                {/* Delivery Time */}
                <div className="filter-btn-container">
                    <button className="filter-btn" onClick={() => {
                        const filteredByDeliveryTime = listOfRestaurants.filter((res) => res.info.sla.deliveryTime < 60)
                        setFilteredRestaurant(filteredByDeliveryTime);
                        setSearchInput("");
                    }}>Delivery Time</button>
                </div>
            </div>

            <div className="res-container">
                {
                    filteredRestaurant.map((res) =>
                        <Link className="link-component" key={res.info.id} to={"/restaurant/" + res.info.id}><RestaurantCard resData={res} /> </Link>)
                }
            </div>
        </div>
    )
}

export default Body;