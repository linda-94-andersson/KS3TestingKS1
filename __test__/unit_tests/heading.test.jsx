import React from "react";
import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { customRender } from "../test-utils";
import "@testing-library/jest-dom";
import { Heading } from "@chakra-ui/react";

describe("Test chakra heading", () => {
  it("Heading render", () => {
    const headingText = "test";
    customRender(<Heading>{headingText}</Heading>);
    const headingScreen = screen.getByText(headingText);
    screen.debug();
    expect(headingScreen).toBeInTheDocument();
  });
});
