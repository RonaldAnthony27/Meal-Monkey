const heading = React.createElement(
    "h1", { id: "head", abc: "xyz" },
    "hi from react");
console.log(heading);//object
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading);//render is a function which is putting headingObject inside our root

//Creating a Nested structure of html using react
const head = React.createElement("div", {
    id: "Parent"
},
    React.createElement("div", { id: "child" },
        React.createElement("h1", {}, "Hi i am the child Node")));
root.render(head); 
//Creating Sibling strcture 
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h2",{},"Hi i am child 1"),React.createElement("h2",{},"Hi i am child 2")]))
root.render(parent);
//
const parent1 = React.createElement("div", { id: "parent" },
  [ React.createElement("div", { id: "child1" },
      [React.createElement("h1", {}, "Hi i am child 1"),
          React.createElement("h1", {}, "Hi i am child 2")]),
,
React.createElement("div", { id: "child2" },
    [React.createElement("h2", {}, "Hi i am child 2"),
        React.createElement("h2", {}, "Hi i am child 2")]) 
])
root.render(parent1);