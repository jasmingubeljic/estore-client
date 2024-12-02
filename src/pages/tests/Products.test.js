import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Products from "../Products";

describe("Products", () => {
  it("should get products rendered to the screen", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
      ok: async () => true,
    });

    const { findAllByRole, debug } = render(
      <Router>
        <Products />
      </Router>
    );

    await screen.logTestingPlaygroundURL();

    expect(await screen.findAllByRole("listitem")).not.toHaveLength(0);
    expect(await screen.findByText(/Products/i)).toBeInTheDocument();
  });
});
