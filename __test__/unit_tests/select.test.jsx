import React from "react";
import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../test-utils";
import "@testing-library/jest-dom";
import { Select } from "@chakra-ui/react";

describe("Test chakra select", () => {
  it("Should correctly set default option", () => {
    render(
      <Select>
        <option>Select a ...</option>
        <option>Test 1</option>
        <option>Test 2</option>
      </Select>
    );
    expect(screen.getByRole("option", { name: "Select a ..." }).selected).toBe(
      true
    );
    screen.debug();
  });
  it("Should display the correct number of options", () => {
    render(
      <Select>
        <option>Select a ...</option>
        <option>Test 1</option>
        <option>Test 2</option>
      </Select>
    );
    expect(screen.getAllByRole("option").length).toBe(3);
  });
});
