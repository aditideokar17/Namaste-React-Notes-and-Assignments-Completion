import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


// Body Component
const Body = () =>{
    return(
        <div className="body">
            <div className="search">
            <input className="search-input" placeholder="search" />
            <button className="search-btn">search</button>
            </div>

            <div className="res-container">
                {/* Map function */}
                {
                    resList.map((res) =>
                     <RestaurantCard key={res.info.id} resData = {res}/>)
                }
            </div>
        </div>
    );
};


export default Body;