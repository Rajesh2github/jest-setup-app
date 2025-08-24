import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

// Snapshot Test
test("Button snapshot", () => {
  const { asFragment } = render(<Button label="ok" onClick={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

// Text rendering test
test("renders the button label", () => {
  render(<Button label="Click Me" onClick={() => {}} />);
  expect(screen.getByText("Click Me")).toBeInTheDocument();
});

// Click event test
test("calls onClick when clicked", () => {
  const handleClick = jest.fn();
  render(<Button label="Click Me" onClick={handleClick} />);

  fireEvent.click(screen.getByText("Click Me"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

// Accessibility test (role check)
test("button has role 'button'", () => {
  render(<Button label="Click Me" onClick={() => {}} />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});
