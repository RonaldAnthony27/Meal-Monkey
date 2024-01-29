import grocery from "../../assets/grocery.jpeg"
const Grocery = () => {
   return(  <div className="container">
   <div className="flex flex-col justify-center items-center gap-10 p-5">
     <span className='text-orange-400 font-bold text-4xl'>Coming Soon ...</span>
     <img className="w-[300px]" alt="instamert" src= {grocery} />
   </div>
 </div>)
}
export default Grocery;