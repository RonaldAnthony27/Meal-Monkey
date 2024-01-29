import { useState, useEffect } from "react";
const useListofRest = () => {
    const [listofRest1, setListOfRest] = useState([]);
    const [filList1, setfilList] = useState([]);
    useEffect(() => {
        fetchData();
      }, []);
      const fetchData = async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const jsonData = await data.json();
    
        // console.log(jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRest(
          jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setfilList(
          jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
    };
    return[listofRest1,filList1]
}
export default useListofRest;