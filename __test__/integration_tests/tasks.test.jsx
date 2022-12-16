// Listan på Projects (1. går att se, 2. ta bort)
// Listan på Tasks (1. går att se,  2. ta bort) CHECK!
// Listan på Users (1. går att se, 2. går att skapa)

import React from "react";
import { describe, expect, it } from "vitest";
import {
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { customRender } from "../test-utils";
import "@testing-library/jest-dom";
import Overview from "../../src/routes/Overview";
import { setupServer } from "msw/node";
import { buildHandlers } from "../../__mock__/handlers";

const config = {
  baseUrl: `http://${import.meta.env.VITE_URL_KEY}`,
  idTask: "5deac626-35d8-4452-849a-81dd8c8f3ba3",
  nameTask: "Jag syns den 22 okt",
  createdDate: 1665093600000,
  projectId: "51e295ee-80c3-44ea-b919-98a39350b8e1",
  idProject: "51e295ee-80c3-44ea-b919-98a39350b8e1",
};

const server = setupServer(...buildHandlers(config));

beforeAll(() => server.listen());

describe("User intergration", () => {
  it("Tasks component render when Tasks tab is clicked", async () => {
    customRender(<Overview />);
    const userTabSelect = screen.getByRole("tab", { name: "Tasks" });
    const clickTab = fireEvent.click(userTabSelect);
    expect(clickTab).not.toBeFalsy();
    await waitFor(() => screen.getByText(config.nameTask));
    screen.debug();
  });

  it("Tasks can be deleted", async () => {
    customRender(<Overview />);
    const userTabSelect = screen.getByRole("tab", { name: "Tasks" });
    const clickTab = fireEvent.click(userTabSelect);
    expect(clickTab).not.toBeFalsy();
    let taskName = await waitFor(() => screen.getByText(config.nameTask));
    const deleteButton = screen.getByRole("button", { name: "delButton" });
    fireEvent.click(deleteButton);
    await waitForElementToBeRemoved(() => screen.getByText(config.nameTask));
    expect(taskName).not.toBeInTheDocument();
    screen.debug();
  });
});
