const Shimmer = () => {
    return (
      <div className="shimmer-container bg-gray-100 p-4 min-h-screen">
        {/* Search Bar Shimmer */}
        <div className="search flex gap-3 mb-6 justify-center items-center">
          <div className="shimmer-search-input h-10 w-64 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="shimmer-search-btn h-10 w-24 bg-gray-300 rounded-md animate-pulse"></div>
        </div>
  
        {/* Filters Shimmer */}
        <div className="filters flex gap-4 mb-6">
          <div className="filter-shimmer-btn h-10 w-32 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="filter-shimmer-btn h-10 w-48 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="filter-shimmer-btn h-10 w-40 bg-gray-300 rounded-md animate-pulse"></div>
        </div>
  
        {/* Restaurant Cards Shimmer */}
        <div className="res-container grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="shimmer-card h-[400px] w-[300px] bg-gray-300 rounded-lg animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Shimmer;
  