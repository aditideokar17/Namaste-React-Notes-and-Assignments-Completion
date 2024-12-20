const ResShimmer = () => {
    return (
      <>
        {/* Restaurant Information Shimmer */}
        <div className="resinfo-shimmer-container bg-gray-200 p-4 rounded-lg animate-pulse mb-6 mt-3 h-[200px] mx-5">
        </div>
  
        {/* Restaurant Menu Shimmer */}
        <div className="resMenu-shimmer-container bg-gray-200 p-4 rounded-lg animate-pulse">
          <ul className="space-y-4">
            {[...Array(6)].map((_, index) => (
              <li
                key={index}
                className="h-12 bg-gray-300 rounded-md"
              ></li>
            ))}
          </ul>
        </div>
      </>
    );
  };
  
  export default ResShimmer;
  