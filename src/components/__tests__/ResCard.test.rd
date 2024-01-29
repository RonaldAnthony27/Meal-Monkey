import Rescard from "../RestCard"
import Mock_data from "./mocks/ResCardMock.json"
import { render, screen } from "@testing-library/react"
import  "@testing-library/jest-dom"

test("Should render Restaurant Card data with props Data", () => {
    render(<Rescard resData={Mock_data} />)
    const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)")
    expect(name).toBe()
})
//Test case for Higher Order Componenets
// test("Should render Restaurant Card data with props Data", () => {
//     render(<restPromotion Rescard={Mock_data} />)
//     const lb = screen.getByRole("label")
//     expect(lb).toBeInTheDocument()
// })