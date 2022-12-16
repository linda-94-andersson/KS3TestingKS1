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
  it("Tasks component render when Tasks tab is clicked", async () => {
    customRender(<Overview />);
    const userTabSelect = screen.getByRole("tab", { name: "Tasks" });
    const clickTab = fireEvent.click(userTabSelect);
    expect(clickTab).not.toBeFalsy();
    await waitFor(() => screen.getByText("Jag syns den 22 okt"));
    screen.debug();
  });

  // it("Tasks can be deleted", async () => {});
});
