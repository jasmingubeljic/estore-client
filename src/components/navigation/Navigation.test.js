import { render, screen } from "@testing-library/react";
import Navigation from "../navigation/Navigation";
import { BrowserRouter as Router } from "react-router-dom";

describe("navigation links", () => {
  test("constins text: Edo shop", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );
    const linkElement = screen.getByText("Edo Shop");
    expect(linkElement).toBeDefined();
  });

  test("constins text: Artikli", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );
    const linkElement = screen.getByText("Artikli");
    expect(linkElement).toBeDefined();
  });

  test("constins text: Objavi artikal", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );
    const linkElement = screen.getByText("Prijavi se");
    expect(linkElement).toBeDefined();
  });

  test("constins text: Prijavi se", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );
    const linkElement = screen.getByText("Prijavi se");
    expect(linkElement).toBeDefined();
  });
});
