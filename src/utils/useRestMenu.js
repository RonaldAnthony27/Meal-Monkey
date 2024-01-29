import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";
const useRestMenu = (resid) => {

    const [restMenu, setrestMenu] = useState(null);
    useEffect(() => {
        fetchdata(); 
    }, []) // Calling just once( in first initial render)
    const  fetchdata = async() => {
        const data = await fetch(MENU_URL + resid);
        const jsondata = await data.json();
        setrestMenu(jsondata.data);
        
    }
    return restMenu;
    
}
export default useRestMenu;