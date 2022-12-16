// Listan på Projects (1. går att se, 2. ta bort)
// Listan på Tasks (1. går att se,  2. ta bort)
// Listan på Users (1. går att se, 2. går att skapa)

import React from "react";
import { describe, expect, it } from "vitest";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import { customRender } from "../test-utils";
import "@testing-library/jest-dom";
import Overview from "../../src/routes/Overview";

describe("User intergration", () => {
  it("Projects component render when Projects tab is clicked", async () => {
    customRender(<Overview />);
    const userTabSelect = screen.getByRole("tab", { name: "Projects" });
    const clickTab = fireEvent.click(userTabSelect);
    expect(clickTab).not.toBeFalsy();
    await waitFor(() => screen.getByText("Filtrera tasks per datum"));
    screen.debug();
  });

  // it("Project can be deleted", async () => {});
});
