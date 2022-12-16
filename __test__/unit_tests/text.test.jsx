import React from "react";
import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { customRender } from "../test-utils";
import "@testing-library/jest-dom";
import { Text } from "@chakra-ui/react";

describe("Test chakra text", () => {
  it("Text render", () => {
    const textText = "test";
    customRender(<Text>{textText}</Text>);
    const textScreen = screen.getByText(textText);
    screen.debug();
    expect(textScreen).toBeInTheDocument();
  });
});
