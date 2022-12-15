// Listan på Projects (1. går att se, 2. ta bort)
// Listan på Tasks (1. går att se,  2. ta bort)
// Listan på Users (1. går att se, 2. går att skapa)

import React from "react";
import { describe, expect, it, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { render } from "../test-utils";
import "@testing-library/jest-dom";
import Overview from "../../src/routes/Overview";

describe("User intergration", () => {
  beforeEach(() => {
    vi.mock("../../__mock__/axios.js");
  });

  it("Users component render when Users tab is clicked", async () => {
    render();
    render(<Overview />);
    const userTabSelect = screen.getByRole("tab", { name: "Users" });
    const clickTab = fireEvent.click(userTabSelect);
    expect(clickTab).not.toBeFalsy();

    screen.debug();
  });

  it("User can be created", async () => {});
});
