import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () =>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should search Res List for burger input", async ()=>{
    
    await act(async () => render( 
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
    ));

    const cardsBeforeSearch = screen.getAllByTestId("searchInput");
    expect(cardsBeforeSearch.lenght).toBe(8);

    const searchBtn  =screen.getByRole("button", {name : "Search"});
    // console.log(searchBtn);


    const searchInput = screen.getByTestId
    fireEvent.change(searchInput, {target : {value : "adil"}});

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.lenght).toBe(1);
})


it("Should filter top rated restaurant", async ()=>{
    
    await act(async () => render( 
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
    ));

    const cardsBeforeFilter = screen.getAllByTestId("searchInput");
    expect(cardsBeforeFilter.lenght).toBe(8);

    const TopRatedBtn  =screen.getByRole("button", {name : "Top Rated Restaurants"});
    fireEvent.click(TopRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.lenght).toBe(7);
})