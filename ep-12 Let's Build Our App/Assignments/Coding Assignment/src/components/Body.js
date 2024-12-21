import { useEffect, useState } from "react";
import RestaurantCard,{withIsOpen} from "../components/RestaurantCard";
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

     

     

    // Higher Order Compoennt
    const RestaurantIsOpen = withIsOpen(RestaurantCard)

    // UseEffect Hook
    useEffect(() => {
        fetchData();
    }, []);

    // Fetching Data - by making api call
    const fetchData = async () => {
        const data = await fetch(CARD_API);

        const json = await data.json();

        console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
        );


        // optional chaining
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

  // Checking Online Status
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>Looks like you're offline!! Check your intenrent connection.</h1>

    // JSX
    return (listOfRestaurants.length === 0) ? <Shimmer /> : (
        <div className="mx-3 my-2 bg-gray-100">

             

            {/* SearchBar */}
            <div className="mt-5 flex justify-center items-center">
                <input className="text-black w-[300px] border border-solid p-2 border-[#003049] outline-none rounded-lg" type="text" placeholder="search restaurant.." value={searchInput} onChange={(e) => { setSearchInput(e.target.value) }}></input>

                <button className=" ml-1 p-2 w-18 border-[#243c5a] rounded-lg bg-[#003049] text-white" onClick={() => {
                    const searchRes = listOfRestaurants.filter((res) =>
                        res.info.name.toLowerCase().includes(searchInput.toLowerCase()))
                    setFilteredRestaurant(searchRes);
                }}>Search</button>
            </div>

            {/* Filters */}
            <div className="flex gap-5 my-5">
                {/* All Restaurants */}
                <div className="p-2 rounded-md text-white bg-[#d62828]">
                    <button className="filter-btn" onClick={() => {
                        setFilteredRestaurant(listOfRestaurants)
                        setSearchInput("");
                    }}>All</button>

                </div>

                {/* Top Rated Restaurant */}
                <div className="p-2 rounded-md text-white bg-[#d62828]">
                    <button className="filter-btn" onClick={() => {
                        const filteredByRatingRestaurant = listOfRestaurants.filter((res) => res.info.avgRating > 4)
                        setFilteredRestaurant(filteredByRatingRestaurant);
                        setSearchInput("");
                    }}>Top Rated Restaurants</button>
                </div>

                {/* Delivery Time */}
                <div className="p-2 rounded-md text-white bg-[#d62828]">
                    <button className="filter-btn" onClick={() => {
                        const filteredByDeliveryTime = listOfRestaurants.filter((res) => res.info.sla.deliveryTime < 60)
                        setFilteredRestaurant(filteredByDeliveryTime);
                        setSearchInput("");
                    }}>Delivery Time</button>
                </div>
            </div>

            

            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map((res) =>
                        <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
                            {
                            res.info.isOpen? (<RestaurantIsOpen resData={res} /> ): (<RestaurantCard  resData={res} />)
                            }
                             </Link>)
                }
            </div>
        </div>
    )
}

export default Body;