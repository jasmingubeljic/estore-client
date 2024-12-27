import { render, screen } from "@testing-library/react";
import Navigation from "../navigation/Navigation";
import { BrowserRouter as Router } from "react-router-dom";

describe("navigation component", () => {
  test("has text: Edo shop", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );
    const linkElement = screen.getByText("Edo Shop");
    expect(linkElement).toBeDefined();
  });

  test("has text: Products", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );
    const linkElement = screen.getByText("Products");
    expect(linkElement).toBeDefined();
  });

  test("has text: Objavi artikal", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );
    const linkElement = screen.getByText("Objavi artikal");
    expect(linkElement).toBeDefined();
  });

  test("constins text: Login", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );
    const linkElement = screen.getByText("Login");
    expect(linkElement).toBeDefined();
  });
});
