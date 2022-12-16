// Listan på Projects (1. går att se, 2. ta bort)
// Listan på Tasks (1. går att se,  2. ta bort)
// Listan på Users (1. går att se, 2. går att skapa) CHECK!

import React from "react";
import { describe, expect, it } from "vitest";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Overview from "../../src/routes/Overview";
import { customRender } from "../test-utils";
import AddUser from "../../src/components/AddUser";

import { setupServer } from "msw/node";
import { buildHandlers } from "../../__mock__/handlers";

const config = {
  baseUrl: `http://${import.meta.env.VITE_URL_KEY}`,
  id: "A1",
  name: "Linda",
};

beforeAll(() => server.listen());

const server = setupServer(...buildHandlers(config));

describe("User intergration", () => {
  it("Users component render when Users tab is clicked", async () => {
    customRender(<Overview />);
    const userTabSelect = screen.getByRole("tab", { name: "Users" });
    const clickTab = fireEvent.click(userTabSelect);
    expect(clickTab).not.toBeFalsy();
    await waitFor(() => screen.getByText(config.name));
    screen.debug();
  });

  it("User can be created", async () => {
    customRender(<AddUser isOpen={true} />);
    const inputEl = screen.getByPlaceholderText("User name");
    await userEvent.type(inputEl, "User 1");
    const addButton = screen.getByText("Add User");
    await userEvent.click(addButton);
    expect(screen.queryByText("User 1")).toBeDefined();
    screen.debug();
  });
});
