
import ItemList from "./ItemList";


const RestaurantCategory = ({data,showItems, setShowIndex}) =>{
 

    const handleClick =() =>{
        setShowIndex();
    }

    return(
        <>
        
        <div>
            <div className="bg-gray-200 w-6/12 mx-auto shadow-lg p-4 my-4 ">
                    {/* Header Section */}
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span className="font-bold">{"↓"}</span>
                </div>

                    {/* Body Section */}
             {showItems && <ItemList items={data.itemCards}/>}
            </div>
        
        </div>

        </>
    );
};

export default RestaurantCategory;