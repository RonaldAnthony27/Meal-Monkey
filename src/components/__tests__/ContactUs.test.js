import { screen, render } from "@testing-library/react"
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("Should Load ConatctUs component", () => {
    render(<ContactUs />) //rendering Component in JSDOM
    const heading = screen.getByRole("heading"); // Trying to find heading on the rendered Screen
    expect(heading).toBeInTheDocument()//Assertion : Expecting heading to be in the Document
})
test("Should Load a Button in ConatctUs component", () => {
    render(<ContactUs />) //rendering Component in JSDOM
    const button = screen.getByRole("button"); // Trying to find heading on the rendered Screen
    expect(button).toBeInTheDocument()//Assertion : Expecting heading to be in the Document
})
test("Find the text in the Contact us component", () => {
    render(<ContactUs />) //rendering Component in JSDOM
    //Querying Process 
    const text = screen.getByPlaceholderText("Name"); // Trying to find heading on the rendered Screen
    // Assertion Process
    expect(text).toBeInTheDocument()//Assertion : Expecting heading to be in the Document
    // console.log(text)//displays the JSX element/ React Element/ Object/ React Fibre Node/Virtual Dom Object
})
test("Find the text in the Contact us component", () => {
    render(<ContactUs />) //rendering Component in JSDOM
    //Querying Process 
    const inputBoxes = screen.getAllByRole("textbox"); // Trying to find heading on the rendered Screen
    // Assertion Process
    expect(inputBoxes.length).toBe(3)//Assertion : Expecting heading to be in the Document
    // console.log(inputBoxes.length)//displays the JSX element/ React Element/ Object/ React Fibre Node/Virtual Dom Object
})
// Grouping test cases: we can do so by using the Keyword "describe". We can even have a describe block inside the describe block
// describe("Contact-Us Test Cases", () => {
//     test("Should Load ConatctUs component", () => {
//         render(<ContactUs />) //rendering Component in JSDOM
//         const heading = screen.getByRole("heading"); // Trying to find heading on the rendered Screen
//         expect(heading).toBeInTheDocument()//Assertion : Expecting heading to be in the Document
//     })
//     test("Should Load a Button in ConatctUs component", () => {
//         render(<ContactUs />) //rendering Component in JSDOM
//         const button = screen.getByRole("button"); // Trying to find heading on the rendered Screen
//         expect(button).toBeInTheDocument()//Assertion : Expecting heading to be in the Document
//     })
//     test("Find the text in the Contact us component", () => {
//         render(<ContactUs />) //rendering Component in JSDOM
//         //Querying Process 
//         const text = screen.getByPlaceholderText("Name"); // Trying to find heading on the rendered Screen
//         // Assertion Process
//         expect(text).toBeInTheDocument()//Assertion : Expecting heading to be in the Document
//         console.log(text)//displays the JSX element/ React Element/ Object/ React Fibre Node/Virtual Dom Object
//     })
//     test("Find the text in the Contact us component", () => {
//         render(<ContactUs />) //rendering Component in JSDOM
//         //Querying Process 
//         const inputBoxes = screen.getAllByRole("textbox"); // Trying to find heading on the rendered Screen
//         // Assertion Process
//         expect(inputBoxes.length).toBe(3)//Assertion : Expecting heading to be in the Document
//         console.log(inputBoxes.length)//displays the JSX element/ React Element/ Object/ React Fibre Node/Virtual Dom Object
//     })  
// })
//We can even Write "it" instead of "test"(just an Alias for test). While writing the description of test cases start it with the word Should