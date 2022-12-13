import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import User from "../src/components/User";

describe("Sample App vitest", () => {
  it("the title is visible", () => {
    render(<User />);
    expect(screen.getByText(/{u.name}/i)).toBeInTheDocument();
  });
});
