import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { IMG_URL } from "../utils/constants";
import RestaurantCategory from "../components/RestaurantCategory"

import useRestMenu from "../utils/useRestMenu";
const RestMenu = () => {
  const { resid } = useParams();
    const [showIndex,setshowIndex]=useState(0)
  
   const restMenu = useRestMenu(resid);

  if (restMenu === null) return <Shimmer />;

  // const { itemCards } =
  //   restMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card   ?.card;
  const { name, avgRatingString, costForTwoMessage,cloudinaryImageId ,cuisines} =
    restMenu?.cards[0]?.card?.card?.info;
  // console.log(restMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)//type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge
  
  const categories = restMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
  // console.log(categories);
  return (
    <div className="RestMenu p-4 m-4 justify-center rounded-lg">
      <div className="RestMenu-head p-4 m-4 flex justify-evenly items-center bg-orange-300  w-full overflow-hidden rounded-lg ">
       <div className="font-bold text-2xl"> {name} </div>
        
        <div> {costForTwoMessage}</div>{ cuisines.join(" ,")}
        <div> {avgRatingString}⭐ </div>
        <div><img className=" h-[200] object-contain overflow-hidden rounded-lg" src={IMG_URL + cloudinaryImageId  } /> </div>
      </div>
      <div className="RestMenuItems">
        
        
        {categories.map((c, index) => (
        
          //controlled component
          < RestaurantCategory data={c.card?.card}
            
            //  key={c.card?.card.title}
              // showItems={index === showIndex? true:false}
              showItems={index === showIndex && true}
            setshowIndex={() => setshowIndex(index === showIndex ? null : index)
            
            }
            
            />
            
          ))}

      </div>
      
    </div>
  );
};
export default RestMenu;
