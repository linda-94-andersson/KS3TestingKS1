// Listan på Projects (1. går att se, 2. ta bort)
// Listan på Tasks (1. går att se,  2. ta bort)
// Listan på Users (1. går att se, 2. går att skapa) CHECK!

import React from "react";
import { describe, expect, it } from "vitest";
import {
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Overview from "../../../src/routes/Overview";
import { customRender } from "../../test-utils";
import AddUser from "../../../src/components/AddUser";
import { setupServer } from "msw/node";
import { buildHandlers } from "../../../__mock__/handlers";

const config = {
  baseUrl: `http://${import.meta.env.VITE_URL_KEY}`,
  idUser: "A1",
  nameUser: "Linda",
};

const server = setupServer(...buildHandlers(config));

beforeAll(() => server.listen());

describe("User intergration", () => {
  it("Users component render when Users tab is clicked", async () => {
    customRender(<Overview />);
    const userTabSelect = screen.getByRole("tab", { name: "Users" });
    const clickTab = fireEvent.click(userTabSelect);
    expect(clickTab).not.toBeFalsy();
    await waitFor(() => screen.getByText(config.nameUser));
    screen.debug();
  });

  it("User can be created", async () => {
    customRender(<AddUser isOpen={true} />);
    const inputEl = screen.getByPlaceholderText("User name");
    await userEvent.type(inputEl, config.nameUser);
    const addButton = screen.getByText("Add User");
    await userEvent.click(addButton);
    expect(screen.queryByText(config.nameUser)).toBeDefined();
    screen.debug();
  });

  it("User can be deleted", async () => {
    customRender(<Overview />);
    const userTabSelect = screen.getByRole("tab", { name: "Users" });
    const clickTab = fireEvent.click(userTabSelect);
    expect(clickTab).not.toBeFalsy();
    let userName = await waitFor(() => screen.getByText(config.nameUser));
    const deleteButton = screen.getByRole("button", { name: "delButton" });
    fireEvent.click(deleteButton);
    await waitForElementToBeRemoved(() => screen.getAllByText(config.nameUser));
    expect(userName).not.toBeInTheDocument();
    screen.debug();
  });
});
