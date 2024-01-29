import UserClass from "./UserClass";
import React from "react";
import AboutUs1 from "../../assets/AboutUs1.jpeg"
import AboutUs2 from "../../assets/AboutUs2.jpg"
// import { Component } from "react";


// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("Parent Constructor called")
//   }
//   componentDidMount() {
//     console.log("Parent ComponentDidMount called")
//   }
//   render() {
//     console.log("Parent render Called")

//     return (
//       <div>
//         <UserClass />
//         {/* <UserClass name={"Second"} />
//         <UserClass name={"Third"} /> */}
//       </div>
//     )
//   }
// }
const About = () => {
  return (
<div >
      <div className="div1 flex h-[260] m-10 p-5 rounded-lg text-orange-400 ">
        <div className="childiv1 w-2/4  relative  ">
          <img className="rounded-lg h-full w-auto object-cover  absolute" src={AboutUs1}/>
        </div>
        <div className= "childiv1 w-2/4 m-5 p-5">
          <h1 className="font-bold text-lg mb-2">Our Mission</h1>
          <p>At Meal-Monkey, our mission is to make ordering food as effortless as possible while supporting local businesses. We strive to empower our customers to explore culinary experiences, discover new flavors, and enjoy the convenience of restaurant-quality meals delivered to their homes.</p>
        </div>
      </div>
      <div className="div1 flex h-[260] m-10 p-5 rounded-lg  text-orange-400 ">
        <div className= "childiv1 w-2/4 m-5 p-5">
          <h1 className="font-bold text-lg mb-2">Our Story</h1>
          <p> Meal-Mokey was born out of a shared love for great food and convenience. Founded in 2022 , our journey began with a vision to revolutionize the way people experience dining by providing a seamless, reliable, and delightful food delivery service.</p>
        </div>
        <div className="childiv1 w-2/4 flex justify-end relative  ">
          <img className="rounded-lg h-full w-auto object-cover  absolute" src={AboutUs2}/>
        </div>
      </div>
      
      

</div>
  )
}

export default About;
