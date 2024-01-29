import { IMG_URL } from "../utils/constants";

const Rescard = (props) => { //const Rescard = ({ resName, resCuisine }) destructuring
  const { resData } = props;
 
  
   
   const{cloudinaryImageId,name,cuisines,costForTwo,avgRatingString }  = resData?.info;//optional chaining 
   return (
     <div data-testid="resCard" className=" res-card justify-center items-center shadow-lg w-[350] m-3 p-2 rounded-lg bg-orange-200 hover:bg-orange-400  overflow-hidden">
       
       <img className="res-card-img h-[200] w-[300] object-cover  m-3 p-3 rounded-3xl" src={IMG_URL + cloudinaryImageId  }/>
     <div className="res-dis m-3 p-3">
         <h2 className="font-bold m-2">{name}</h2>
         <h3 className="m-2">{ cuisines.join(" ,")}</h3>
       <h3 className="m-2">{costForTwo} </h3>
         <h3 className="m-2">{avgRatingString} </h3> 
         
     </div>
     
   </div>
 )
   
}
// Higher Order Componenets
export const restPromotion = (Rescard) => {
  return (props)=>{
    return (
      <div>
        <label></label>
        <Rescard {...props} />
      </div>
    )
  }
  
}
export default Rescard;