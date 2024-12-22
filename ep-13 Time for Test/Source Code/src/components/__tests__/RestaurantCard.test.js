const { render, screen } = require("@testing-library/react");
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/ResCardMocks";
import "@testing-library/jest-dom";

it("should render Restaurant Card Component with props Data", ()=>{
    render(<RestaurantCard resData={MOCK_DATA} />)

    const name = screen.getByText("Sanju Ka Dhaba");
    expect(name).toBeInTheDocument();
})