import React from "react";
import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import { customRender } from "../test-utils";
import "@testing-library/jest-dom";
import { Input } from "@chakra-ui/react";

describe("Test chakra input", () => {
  it("Input typecheck", () => {
    const handleChange = vi.fn();
    customRender(
      <Input
        type="email"
        placeholder="Enter email"
        data-testid="email-input"
        onChange={handleChange}
      />
    );
    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
    screen.debug();
  });
});
