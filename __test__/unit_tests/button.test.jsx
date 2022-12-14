import React from "react";
import { describe, expect, it, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { render } from "../test-utils";
import "@testing-library/jest-dom";
import { Button } from "@chakra-ui/react";

describe("Test chakra button", () => {
  it("Button click", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>test</Button>);
    const buttontext = screen.getByText("test");
    screen.debug();
    fireEvent.click(buttontext);
    expect(handleClick).toHaveBeenCalled();
    expect(handleClick).not.toHaveBeenCalledTimes(2);
  });
});
