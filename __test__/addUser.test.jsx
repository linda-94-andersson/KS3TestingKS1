import React from "react";
import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "./test-utils";
import "@testing-library/jest-dom";
import AddUser from "../src/components/User";

describe("AddUser component", () => {
  it("Check uuid string", () => {
    render(<AddUser />);
  });
});
