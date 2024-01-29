//  import resObj from "../utils/mockData";
import Rescard,{restPromotion} from "./RestCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { SWIGGY_API } from "../utils/constants";
// import offline from "../../assets/offline.png";
// import useListofRest from "../utils/useListofRest";
const Body = () => {
  const [listofRest, setListOfRest] = useState([]);
  const [filList, setfilList] = useState([]);
  const RestPromotion=restPromotion(Rescard) // hiher order component
  //The above line is Basic Array destructuring which can also be written as
  // const arr = useState(resObj);
  // const [listOfRest, setListOfRest] = arr;
  //OR
  // const arr = useState(resObj);
  // const listOfRest = arr[0];
  // const setListOfRest = arr[1]
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
         SWIGGY_API    );
    const jsonData = await data.json();
    
    setListOfRest(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    (jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants)

    setfilList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  function filterData(searchText, filList) {
    const filterData = filList.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  }

  const [searchText, setSearchText] = useState("");

  const online = useOnlineStatus();
  if (online === false)
    return (
      <div>
        <img className="offline" src="../../assets/offline.png" />
        <h1> Seems Like You Are Offline</h1>
      </div>
    );
  (listofRest[0]?.info?.avgRating    );

  return listofRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body ">
      <div className="filter flex items-center justify-center h-10 m-4 px-5  gap-10  ">
        <button
          className=" bg-orange-300 rounded-lg hover:bg-orange-400 p-3"
            onClick={() => {
            console.log(listofRest[0]?.info?.avgRating)
            const filteredList = listofRest.filter(
        
            
              (res) => res?.info?.avgRating > 4.4
             
            );
            setListOfRest(filteredList);
          }}
        >
          Top Restaurants
        </button>
        <div className="searchBar ">
          <input
            type="text"
            data-testid="searchInput"
            className="search-input border border-solid"
            placeholder="Search a restaurant you want..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>{" "}
          <button
            className="search-btn p-3 bg-orange-300  hover:bg-orange-400 rounded-lg m-4"
            onClick={() => {
              // filter the data
              const data = filterData(searchText, listofRest);
              // update the state of restaurants list
              setfilList(data);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap ">
        {filList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
          
           {(restaurant.info.totalRatingsString
)? <RestPromotion resData={restaurant}/>:<Rescard resData={restaurant} />} 
            
          </Link>
        ))}
        {/* {
            resObj.map((restaurant) => {
              return <Rescard key={restaurant.data.id} {...restaurant.data}/>
            })
        } */}
        </div>
        
      </div>
      
  );
};
export default Body;
