import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import Mock_Data from "./mocks/mockHomePageApi.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import Body from "../Body"


global.fetch = jest.fn(() => { //Making a fake fetch function as jsdom doesnt have exact features like browser
    return Promise.resolve({
        json: () => {
            return Promise.resolve(Mock_Data)
        }
    })
});
it("Should render the Body Component with Search", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        ))
    const sbtn = screen.getByRole("button", { name: "Search" });
    // console.log(sbtn);
    expect(sbtn).toBeInTheDocument();
})
it("Should Search Reslist for a pizza text at search box", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        ))
        const cardsBeforeSearch=screen.getAllByTestId("resCard")
        expect(cardsBeforeSearch.length).toBe(9);
    const searchbtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");
    // console.log(searchInput)

     fireEvent.change(searchInput,{ target: { value: "pizza" }})
     fireEvent.click(searchbtn);
     const cards=screen.getAllByTestId("resCard")
    
     expect(cards.length).toBe(2);
})