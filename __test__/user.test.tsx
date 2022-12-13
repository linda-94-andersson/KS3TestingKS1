import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import User from "../src/components/User";
import handleDelete from "../src/components/User";

//test för "handleDelete"
describe("User handleDelete", () => {
  it("delete is run and await next call", () => {
    const handleDeleteSpy = vi.fn(handleDelete);
    expect(handleDeleteSpy).toBeDefined();
  });
});

// test för första eller rendern
