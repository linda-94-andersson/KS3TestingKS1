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

  it("Projects component render when Projects tab is clicked", async () => {
    render(<Overview />);
    const userTabSelect = screen.getByRole("tab", { name: "Projects" });
    const clickTab = fireEvent.click(userTabSelect);
    expect(clickTab).not.toBeFalsy();

    screen.debug();
  });

  it("Project can be deleted", async () => {});
});
