import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("button's value is equal to 0", () => {
  render(<Counter />);
  const number = screen.getByText("0");
  expect(number).toBeInTheDocument();
});

test("button's exist on screen", () => {
  render(<Counter />);
  const increment = screen.getByRole("button", { name: "+" });
  expect(increment).toBeInTheDocument();
  const decrement = screen.getByRole("button", { name: "-" });
  expect(decrement).toBeInTheDocument();
});

test("buttons events are correct", () => {
  render(<Counter />);
  const number = screen.getByText("0");
  expect(number).toBeInTheDocument();
  const increment = screen.getByRole("button", { name: "+" });
  fireEvent.click(increment);
  expect(number).toHaveTextContent("1");
  const decrement = screen.getByRole("button", { name: "-" });
  fireEvent.click(decrement);
  expect(number).toHaveTextContent("0");
});
