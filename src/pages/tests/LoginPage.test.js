import { render, screen } from "@testing-library/react";
import LoginPage from "../LoginPage";
import { BrowserRouter as Router } from "react-router-dom";

describe("Login page", () => {
  test("email-address label, password label and button are displayed", () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );

    expect(screen.getByText(/email address/i)).toBeDefined();
    expect(screen.getByText(/password/i)).toBeDefined();
    expect(
      screen.getByRole("button", {
        name: /prijavi se/i,
      })
    ).toBeInTheDocument();
  });

  test("are email and password input fields displayed", () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );

    expect(
      screen.getByRole("textbox", {
        name: /email address/i,
      })
    ).toBeDefined();
    expect(screen.getByLabelText(/password/i)).toBeDefined();
  });
});
