// Listan på Projects (1. går att se, 2. ta bort)
// Listan på Tasks (1. går att se,  2. ta bort)
// Listan på Users (1. går att se, 2. går att skapa)

import React, { useState, useEffect } from "react";
import { describe, expect, it, vi } from "vitest";
import { screen, fireEvent, act, renderHook } from "@testing-library/react";
import { render } from "../test-utils";
import "@testing-library/jest-dom";
import Overview from "../../src/routes/Overview";
import { useUser } from "../../src/context/UserContext";
import User from "../../src/components/User";
import { getUsers } from "../../src/data/getUsers";

describe("User intergration", () => {
  it("User render", async () => {
    const useUsers = () => {
      const [users, setUser] = useState(null);
      const getUserData = async () => {
        const data = await getUsers();
        setUser(data);
      };

      useEffect(() => {
        getUserData();
      }, []);
    };

    const { result } = renderHook(() => useUsers());
    act(() => {
      result.current.getUserData();
    });

    render(<Overview />);
    const userTabSelect = screen.getByRole("tab", { name: "Users" });
    fireEvent.click(userTabSelect);
    expect(result.current.users).toBe("Linda");
    // const userName = "Linda";
    // const user = screen.getByText(userName);
    // expect(user).toBeVisible();
    screen.debug();
  });

  it("User can be created", async () => {});
});
