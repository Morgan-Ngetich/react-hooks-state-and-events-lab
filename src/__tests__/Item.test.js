import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Item from "../components/Item";

test("the <li> does not have a className when initialized", () => {
  const { container } = render(<Item name="Milk" category="Dairy" />);
  const listItem = container.querySelector("li");
  
  expect(listItem).toBeInTheDocument();
  expect(listItem.className).not.toContain("in-cart");
});

test("the <li> has a className of 'in-cart' when the Add to Cart button is clicked", () => {
  const { container } = render(<Item name="Milk" category="Dairy" />);
  const addToCartButton = screen.getByText("Add To cart");

  fireEvent.click(addToCartButton);

  const listItemInCart = container.querySelector(".in-cart");
  expect(listItemInCart).toBeInTheDocument();
});
