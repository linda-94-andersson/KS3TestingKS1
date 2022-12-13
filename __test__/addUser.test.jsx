import React from "react";
import { describe, expect, it, vi } from "vitest";
import { screen, act, renderHook } from "@testing-library/react";
import { render } from "./test-utils";
import "@testing-library/jest-dom";
import generated_id from "../src/components/User";
import AddUser from "../src/components/AddUser";

describe("AddUser component", () => {
  it("Check uuid function is running", () => {
    render(<AddUser />);
    const GenId = generated_id;
    expect(GenId).toBeTypeOf("function");
  });
});
