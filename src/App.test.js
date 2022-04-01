import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test(`adds a todo`, () => {
  render(<App />);

  userEvent.type(
    screen.getByRole("textbox", { name: /new/i }),
    "write tests{Enter}"
  );

  expect(screen.getByRole("textbox", { name: /new/i })).toHaveValue("");
});
