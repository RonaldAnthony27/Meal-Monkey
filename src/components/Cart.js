import { useDispatch, useSelector } from "react-redux";
import RestaurantCategoryItems from "./RestaurantCategoryItems";
import { clearCart } from "../utils/cartSlice";
import { useEffect, useState } from "react";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    
    const [subtotal, setSubTotal]=useState(0)
    const [total, setTotal] = useState(0)
    const delivery=20
    const dispatch = useDispatch();
    const handleClearCart=() => {
        dispatch(clearCart())
    }
    useEffect(() => {
        setSubTotal(calculateSubTotal())
    }, [cartItems])
    useEffect(() => {
        setTotal(calculateTotal())
    }, [subtotal])
    const calculateSubTotal = () => {
        let sub = 0;
        cartItems.map((item) => {
            console.log(item.card.info)
          if(item?.card?.info?.price){
              sub += (item?.card?.info?.price) / 100
              Math.trunc(sub)
          } else {
            sub += (item?.info?.defaultPrice) /100
          }
        })
        return sub;
      }
    
      const calculateTotal = () => {
      let  Totals = subtotal + delivery;
       return Totals  
      }
    
    return cartItems.length === 0 ? (<div className="text-center font-bold">
        Add Items to Cart</div>): (<div className="cart">
        <h1 className="text-center border-lime-400 m-3 p-3 font-bold">Cart </h1>
        <button className="ml-[450] p-3 rounded-lg border-gray-300 border-2 " onClick={handleClearCart}>Clear</button>
        
        <div className="w-6/12 m-auto">
            <RestaurantCategoryItems items={cartItems} />
            </div>
            <div className="text-right w-[500] p-5 font-bold bg-orange-300 m-auto mb-20 rounded-lg">
            <div >
                subTotal: {subtotal}
                
            </div>
            <div>
                Total=Delivery(Rs20)+subTotal: {total}

            </div>
            </div>
            
    

    </div>)
}
export default Cart;