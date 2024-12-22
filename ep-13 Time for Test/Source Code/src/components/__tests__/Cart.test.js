import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render , screen} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () =>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("should load restaurant menu component",async ()=>{

    await act(async () => render(
       <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <RestaurantMenu/>
            <Cart />
        </Provider>
       </BrowserRouter>
    ))

    const accordionHeader = screen.getByText("Recommended (2)")
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(2);


    const addBtns = screen.getAllByRole("button",{name : "Add"});
    fireEvent.click(addBtns[0]);

    screen.getByText("Cart( 1 items)").toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", {name : "Clear Cart"}));
    expect(screen.getAllByTestId("foodItems").length).toBe(2);
    expect(screen.getByText("Cart is Empty! Add Items To Cart").toBeInTheDocument());

})