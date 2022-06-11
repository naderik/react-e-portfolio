import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
    it("renders Navbar", () => {
        render(<Navbar />);
    });
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
}
);