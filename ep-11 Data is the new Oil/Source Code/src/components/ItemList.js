import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) =>{
//  console.log(ItemList);
    return(
        <>
        {items.map((item)=>(
            <div key={item.card.info.id} className=" bg-gray-50 shadow-lg rounded-lg p-2 m-2 ">
                <div className="flex justify-between mb-3">
                    <span className="font-semibold">{item.card.info.name}</span>
                    <span className="font-semibold">₹ {item.card.info.price ? item.card.info.price / 100 : (10000 / 100)}</span>
                </div>
                <div className="flex justify-between mt-3"><p className="text-left text-[14px] py-2 pr-2 text-gray-400">{item.card.info.description}</p>
                <img src={CDN_URL + item?.card?.info?.imageId} className="w-[100px] h-20 shadow-sm rounded-sm" alt="food image"/><button className="ml-[520px] mt-14 px-2 bg-white text-green-500 rounded-sm font-semibold shadow-lg absolute">Add +</button></div>
            </div>
        ))}
        </>
    )
};

export default ItemList;