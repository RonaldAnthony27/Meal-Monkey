// import {useState} from "react"
import RestaurantCategoryItems from "./RestaurantCategoryItems";

const RestaurantCategory = ({ data, showItems, setshowIndex }) => {
  // const[showItems,setshowItems]=useState(false) //setshowItems(!showItems)
  //console.log(data.title)
  const handleClick = () => {
    setshowIndex();
  };
  return (
    // Accordian Header
    <div className="Categories bg-gray-50   m-4  mx-auto p-4 shadow-lg w-6/12">
      <div
        className="flex justify-between font-bold cursor-pointer"
        onClick={handleClick}
      >
        <span>
          {data.title}({data.itemCards.length})
        </span>
        <span>{showItems ? "➖" : "➕"}</span>
      </div>
      {/* //Acordian Body    */}
      <div className="text-center">
        {showItems && <RestaurantCategoryItems items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
