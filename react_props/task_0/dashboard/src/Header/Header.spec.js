import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
    test("renders the School Dashboard heading", () => {
        render(<Header />);

        const heading = screen.getByRole("heading", {
            level: 1,
            name: /school dashboard/i,
        });

        expect(heading).toBeInTheDocument();
    });

    test("renders the Holberton logo image", () => {
        render(<Header />);

        const logo = screen.getByRole("img", {
            name: /holberton logo/i,
        });

        expect(logo).toBeInTheDocument();
    });
});