import { BrowserRouter } from "react-router-dom";
import Header from "../Header"
import { fireEvent,render,screen} from "@testing-library/react"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom"

it("Should render the Header component with logib btn",()=>{
    render(//Rendering to jsdom
    
   
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const btn = screen.getByRole("button",{name: "Log In"}); //Finding the elemnt on redered screen
    expect(btn).toBeInTheDocument(); // Assertion
} )
// it("Should change login btn to logout btn",()=>{
//     render(//Rendering to jsdom
    
   
//         <BrowserRouter>
//             <Provider store={appStore}>
//                 <Header />
//             </Provider>
//         </BrowserRouter>
//     );
//     const loginbtn = screen.getByRole("button", { name: "Log In" }); //Finding the elemnt on redered screen
//     fireEvent.click(loginbtn);
//     const logoutbtn = screen.getByRole("button", { name: "Log Out" });
//     expect(logoutbtn).toBeInTheDocument(); // Assertion
// } )