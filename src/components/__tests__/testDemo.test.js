import { multiply } from "../testDemo"

test("Muliplacation of two numbers",()=> {
    const parinaam = multiply(3, 4);
    //Assertion
    expect(parinaam).toBe(12);
})