import { describe, test, expect } from "@jest/globals";
import { Button } from ".";
import { render, screen } from "@testing-library/react";

describe("Button component", () => {
  test("renders a default button", () => {
    const { getByText } = render(<Button>Click here</Button>);
    expect(getByText("Click here")).toBeInTheDocument();
  });

  test("disables the button when isDisabled prop is true", () => {
    render(<Button isDisabled={true}> Click here</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
