import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {

    test("renders the login text", () => {
        render(<Login />);

        const loginText = screen.getByText(/login to access the full dashboard/i);
        expect(loginText).toBeInTheDocument();
    });

    test("renders email and password inputs", () => {
        render(<Login />);

        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });

    test("renders the Ok button", () => {
        render(<Login />);

        const button = screen.getByRole("button", { name: /ok/i });
        expect(button).toBeInTheDocument();
    });

});