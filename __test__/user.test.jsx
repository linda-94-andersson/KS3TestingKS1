import React from "react";
import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "./test-utils";
import "@testing-library/jest-dom";
import User from "../src/components/User";
import handleDelete from "../src/components/User";

//test for "handleDelete"
describe("User handleDelete", () => {
  it("delete is run and await next call", () => {
    const handleDeleteSpy = vi.fn(handleDelete);
    expect(handleDeleteSpy).toBeDefined();
  });
});

//test for render and button
describe("User component", () => {
  it("Button click event", () => {
    render(<User />);
    const button = screen.getByText("Add new user");
    expect(button).toBeInTheDocument();
  });
});
