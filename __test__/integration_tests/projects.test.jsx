// Listan på Projects (1. går att se, 2. ta bort) CHECK!
// Listan på Tasks (1. går att se,  2. ta bort)
// Listan på Users (1. går att se, 2. går att skapa)

import React from "react";
import { describe, expect, it } from "vitest";
import {
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { customRender } from "../test-utils";
import "@testing-library/jest-dom";
import Overview from "../../src/routes/Overview";
import { setupServer } from "msw/node";
import { buildHandlers } from "../../__mock__/handlers";
import AddProject from "../../src/components/AddProject";

const config = {
  baseUrl: `http://${import.meta.env.VITE_URL_KEY}`,
  idProject: "B1",
  nameProject: "Mocka kod",
  color: "#d61c25ff",
  userId: "A1",
};

const server = setupServer(...buildHandlers(config));

beforeAll(() => server.listen());

describe("Project intergration", () => {
  it("Projects component render when Projects tab is clicked", async () => {
    customRender(<Overview />);
    const userTabSelect = screen.getByRole("tab", { name: "Projects" });
    const clickTab = fireEvent.click(userTabSelect);
    expect(clickTab).not.toBeFalsy();
    await waitFor(() => screen.getByText(config.nameProject));
    screen.debug();
  });

  it("Project can be created", async () => {
    customRender(<AddProject isOpen={true} />);
    const inputEl = screen.getByPlaceholderText("Project name");
    await userEvent.type(inputEl, config.nameProject);
    const addButton = screen.getByText("Add project");
    await userEvent.click(addButton);
    expect(screen.queryByText(config.nameProject)).toBeDefined();
    screen.debug();
  });

  it("Project can be deleted", async () => {
    customRender(<Overview />);
    const userTabSelect = screen.getByRole("tab", { name: "Projects" });
    const clickTab = fireEvent.click(userTabSelect);
    expect(clickTab).not.toBeFalsy();
    let projectName = await waitFor(() => screen.getByText(config.nameProject));
    const deleteButton = screen.getByRole("button", { name: "delButton" });
    fireEvent.click(deleteButton);
    await waitForElementToBeRemoved(() => screen.getByText(config.nameProject));
    expect(projectName).not.toBeInTheDocument();
    screen.debug();
  });
});
