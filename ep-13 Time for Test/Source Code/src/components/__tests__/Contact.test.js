import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

// beforeAll(()=>{
//     console.log("Before All")
// });

// beforeEach(()=>{
//     console.log("Before Each")
// });

AfterAll(()=>{
    console.log("After All")
});

AfterEach(()=>{
    console.log("After Each")
});

describe("Contact Us Page Test Case", ()=>{
    
test("should load heading contact us component", ()=>{
    render(<Contact/>); //render to the jsdom

    //testing begins - check whether heading is rendered or not
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

test("Should load input name inside contact component", ()=>{
    render(<Contact/>);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
});

test("Should load 2 input boxes on Contact component", ()=>{
    render(<Contact/>);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
});
})
