// import RestaurantCategory from "../RestaurantCategory"
import Mock_Menu from "./mocks/RestMenuAPI.json"
// import { act } from "react-dom/test-utils"
// import { Provider } from "react-redux"
// import appStore from "../../utils/appStore"
import { fireEvent, render, screen } from "@testing-library/react"
// import RestaurantCategoryItems from "../RestaurantCategoryItems"
// import Header from "..Header/"
// import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"



global.fetch = jest.fn(() => {
    Promise.resolve({
        json:()=>Promise.resolve(Mock_Menu)
    })
})
// it("Should Load Restaurant Menu Component", async () => {
//     await act(async () =>
//         render(
//             <BrowserRouter>
//                 <Provider store={appStore}>
//                     <Header />
//                     <RestaurantCategory />
//                 </Provider>
//             </BrowserRouter >
//         ));
//     const accordheader = screen.getByText("Recommended(20)");
//     fireEvent.click(accordheader)
      
//     expect(screen.getAllByTestId("foodItems").length).toBe(20);
//     const addBtn = screen.getAllByRole("button", { name: "+" });
//     fireEvent.click(addBtn[0]);
//     expect(screen.getByText("(0)")).toBeInTheDocument(); //no. of cart items displayed on header
// })
it("Should check for Clear cart Functionality", () => {
    fireEvent.click(screen.getByRole("button", { name: "Clear" }))
    expect(screen.getByText("Add Items to Cart")).toBeInTheDocument();
})
