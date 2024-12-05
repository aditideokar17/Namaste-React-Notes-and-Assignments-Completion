const Shimmer = () => {
    return (
        <div className="shimmer-container">
            <div className="search">
                <input className="shimmer-search-input"></input>
                <button className="shimmer-search-btn">search</button>
            </div>

            <div className="filters">
                {/* All Restaurants */}
                <div className="filter-btn-container">
                    <button className="filter-shimmer-btn">All</button>
                </div>

                {/* Top Rated Restaurant */}
                <div className="filter-btn-container">
                    <button className="filter-shimmer-btn">Top Rated Restaurants</button>
                </div>

                {/* Delivery Time */}
                <div className="filter-btn-container">
                    <button className="filter-shimmer-btn">Delivery Time</button>
                </div>
            </div>

            <div className="res-container">
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
            </div>
        </div>


    )
}

export default Shimmer;