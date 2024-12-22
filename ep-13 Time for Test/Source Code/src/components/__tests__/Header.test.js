import { Provider } from "react-redux";
import Header from "../Header";
const { render, screen, fireEvent } = require("@testing-library/react");
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header Componenent with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button",{name: "Login"});
    expect(loginBtn).toBeInTheDocument();
});

it("Should load Header Componenent with cart item", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // const cartItems = screen.getByText("Cart( 0 items)");
    const cartItems = screen.getByText(/Cart/); //Rejex
    expect(cartItems).toBeInTheDocument();
});

it("Should change Login Button to Logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button",{name: "Login"});
    fireEvent.click(loginBtn);
    
    const logoutBtn = screen.getByRole("button",{name: "Logout"});
    expect(logoutBtn).toBeInTheDocument();
});