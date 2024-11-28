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

  test("has text: Artikli", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );
    const linkElement = screen.getByText("Artikli");
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
