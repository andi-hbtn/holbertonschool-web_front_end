import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { getCurrentYear, getFooterCopy } from "../utils/utils";

describe("Footer component", () => {

    test("renders the copyright text", () => {
        render(<Footer />);

        const footerText = screen.getByText(/copyright/i);
        expect(footerText).toBeInTheDocument();
    });

    test("displays the correct year", () => {
        render(<Footer />);

        const year = getCurrentYear();
        const yearElement = screen.getByText(new RegExp(year));

        expect(yearElement).toBeInTheDocument();
    });

    test("displays the correct footer copy", () => {
        render(<Footer />);

        const footerCopy = getFooterCopy(true);
        const copyElement = screen.getByText(new RegExp(footerCopy, "i"));

        expect(copyElement).toBeInTheDocument();
    });

});