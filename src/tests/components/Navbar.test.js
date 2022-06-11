import { render, screen } from "@testing-library/react";
import Navbar from "../../components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import React from "react";

describe("Navbar", () => {
    it("renders Navbar", () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
    });
    expect(screen.getByTestId("toggleButton")).toBeInTheDocument();
}
);