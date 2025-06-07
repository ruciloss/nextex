import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navigation from "../components/UI/Navigation/Navigation";

describe("Navigation component", () => {
    it("renders children", () => {
        render(
            <Navigation ariaLabel="Main navigation">
                <div data-testid="child">Child content</div>
            </Navigation>,
        );

        expect(screen.getByTestId("child")).toHaveTextContent("Child content");
    });

    it("has role navigation and correct aria-label", () => {
        render(
            <Navigation ariaLabel="Main navigation">
                <div>Menu</div>
            </Navigation>,
        );

        const nav = screen.getByRole("navigation", { name: "Main navigation" });
        expect(nav).toBeInTheDocument();
    });

    it("applies additional styles passed via props", () => {
        const customStyle = { color: "true" } as object;

        const { container } = render(
            <Navigation ariaLabel="Nav with styles" styles={[customStyle]}>
                <div>Menu</div>
            </Navigation>,
        );

        expect(container.firstChild).toBeInTheDocument();
    });
});
