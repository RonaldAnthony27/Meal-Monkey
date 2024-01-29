import React, { useState } from "react";
//Class Component Syntax
// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("Child Const");
//     this.state = {
//       //creating State variablles
//       count1: 3,
//       count2: 4,
//     };
//   }
//   componentDidMount() {
//     console.log(" child ComponentDId mount");
//   }
//   render() {
//     console.log("Child Render");
//     const { name, location } = this.props; //destructuring props
//     const { count1, count2 } = this.state; //destructuring stae variables
//     return (
//       <div>
//         <h1>
//           {" "}
//           Hi {name} {location}class
//         </h1>
//         <h1>
//           {count1} {count2}
//         </h1>
//         {/* //updating values
//             //we can't directly update the values like this.state.count= this.state.count+1 we will use this.setstate function which we can use anywhere in the program
//             Behind the scenes this.setState is a large object which will find the diff between the old obj and updated obj
//             which will eventualy trigger the React reconciliation process and this will update the w*/}
//         <button
//           onClick={() => {
//             this.setState({
//               count1: this.state.count1 + 1, //if we r updating one state variable other state variables will not be bothered
//             });
//           }}
//         >
//           Count1 increaser
//         </button>
//       </div>
//     );
//   }
// }
//Observing the behaviour of ComponentDidMount in React LifeCycle

// class UserClass extends React.Component{
//     constructor(props) {
//         super(props)
//         console.log(this.props.name +"Constructor Called")
//     }
//     componentDidMount() {
//         console.log(this.props.name+" ComponentDidMount called")
//     }

//     render() {
//         const { name} = this.props //destructuring props
//         // const {count1,count2}=this.state//destructuring stae variables
//         console.log(name+ "Reder called")
//         return (
//             <div>{ name}</div>
//         )
//     }
//  }
//Api Call in Class based componnent
class UserClass extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      userinfo:{
        name: "Dummy Data",
        id: "Dummy data",

      }
    }
  }
  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/timmywheels/repos?ref=codesnippet.io");
    const jsondata = await data.json();
    this.setState({
      userinfo: jsondata[29],
    })
    console.log(jsondata[29])
    
  }
  componentDidUpdate(){
  console.log("component Did update")
  }
  componentWillUnmount(){
  console.log("component Will unMount")
  }
  componentDidUpdate(){
  console.log("component Did update")
  }
  render() {
    const { name, id } = this.state.userinfo
   
    return (
      <div>
        <h1>{ name}</h1>
        <h1>{id}</h1>
        
      </div>
    )
  }
}

// Functional Component
// const UserClass = (props) => {
//     const [count1, setcount1]=useState([3])
//     const [count2, setcount2]=useState([4])
//     const {name,location}=props
//     return (
//         <div> <h1>{name}and {location}</h1>
//             {count1}{count2}</div>
//     )
// }
export default UserClass;
