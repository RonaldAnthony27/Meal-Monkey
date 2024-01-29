import { useDispatch } from "react-redux"
import { IMG_MENU_URL } from "../utils/constants"
import { useState } from "react"
import { addItem, removeItem } from "../utils/cartSlice"
const RestaurantCategoryItems = (items ) => {
    const data = items.items
    const dispatch = useDispatch();
     
    const addItemhandler = (item) => {
        dispatch(addItem(item));
         
    }
    const minushandler = (item) => {
        dispatch(removeItem(item))
    
    }

    return (
        <div>
            {
                data.map((item) => (
                    <div
                        data-testid="fooditems"
                        key={item.card.info.id} 
                         className=" p-2 m-2 border-b-2 border-gray-200 flex justify-between items-center  ">
                           
                        <div className=" text-left  w-9/12">
                            <span>{ item.card.info.name+" "}</span>
                            <span>₹{item.card.info.price ? item.card.info.price / 100 :
                            item.card.info.defaultPrice/100} </span>
                        
                        <p className="text-sm">{item.card.info.description}</p></div>
                        <div className="h-auto w-3/12 m-1 p-1 object-cover overflow-hidden ">
                        
                            
                       < img className=" rounded-lg"  src={IMG_MENU_URL + item.card.info.imageId} />
                            <button className="border-2  border-gray p-1  ">
                                <span onClick={()=>minushandler(item)}>-</span>
                                <span className="mx-3">Add</span>
                                <span onClick={()=>addItemhandler(item)}>+</span>

                            </button>
                            
                            
                            
                            
                        </div>
                        
                   </div>
                ))
            }
        </div>
    )
}
export default RestaurantCategoryItems;