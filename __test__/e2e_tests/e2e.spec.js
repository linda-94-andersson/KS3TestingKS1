import { test, expect } from "@playwright/test";

test.only("e2e for Timer-app", async ({ page }) => {
  await page.goto("http://127.0.0.1:5173/");
  await page.getByRole("link").nth(2).click();
  await page.getByRole("button", { name: "Add new user" }).click();
  await page.getByPlaceholder("User name").click();
  await page.getByPlaceholder("User name").fill("Test me");
  await page.getByRole("button", { name: "Add User" }).click();
  await page.getByRole("tab", { name: "Projects" }).click();
  await page.getByRole("button", { name: "Add new project" }).click();
  await page
    .locator("#users")
    .selectOption("f5c926fa-2d22-4d82-a7e6-db4e963a703c");
  await page.getByPlaceholder("Project name").click();
  await page.getByPlaceholder("Project name").fill("Adding me");
  await page.getByRole("button", { name: "Add project" }).click();
  await page.getByRole("tab", { name: "Tasks" }).click();
  await page.getByRole("button", { name: "Add new Tasks" }).click();
  await page
    .locator("#projects")
    .selectOption("74efefab-952f-4f7d-b421-a1564ff7c0ab");
  await page.getByPlaceholder("Task name").click();
  await page.getByPlaceholder("Task name").fill("Adding again");
  await page.getByRole("button", { name: "Add task" }).click();
  await page.getByRole("button", { name: "Add new Tasks" }).click();
  await page
    .locator("#projects")
    .selectOption("74efefab-952f-4f7d-b421-a1564ff7c0ab");
  await page.getByPlaceholder("Task name").click();
  await page.getByPlaceholder("Task name").fill("Delete me");
  await page.getByRole("button", { name: "Add task" }).click();
  await page.getByRole("link").first().click();
  await page.locator(".chakra-button").first().click();
  await page.locator("button:nth-child(2)").first().click();
  await page
    .locator(
      "div:nth-child(2) > .chakra-container > div > div:nth-child(3) > .chakra-button"
    )
    .click();
  await page.locator("button:nth-child(2)").first().click();
  await page.locator("button:nth-child(3)").first().click();
  await page.locator(".chakra-button").first().click();
  await page.locator("button:nth-child(2)").first().click();
  await page.locator("button:nth-child(3)").first().click();
  await page.locator("button:nth-child(4)").click();
  await page.locator("button:nth-child(2)").first().click();
  await page.locator("button:nth-child(3)").first().click();
  await page.getByRole("button", { name: "Pick to delete!" }).first().click();
  await page.locator("button:nth-child(4)").click();
  await page.getByRole("link").nth(1).click();
  await page.getByLabel("From*").click();
  await page.getByRole("textbox").nth(1).click();
  await page.getByLabel("From*").click();
  await page.getByLabel("From*").press("Tab");
  await page.getByLabel("From*").fill("2022-10-10T17:00");
  await page.getByRole("textbox").nth(1).click();
  await page.getByRole("textbox").nth(1).press("Tab");
  await page.getByRole("textbox").nth(1).fill("2022-11-01T03:28");
  await page
    .getByText(
      "CalendarChoose a range of dates to see active tasksFrom*To*LindaJag syns den 28 "
    )
    .click();
  await page.getByRole("link").nth(2).click();
  await page.getByRole("link").first().click();
  await page
    .locator(
      "div:nth-child(2) > .chakra-container > div > div:nth-child(3) > .chakra-button"
    )
    .click();
  await page.locator(".chakra-button").first().click();
  await page
    .locator(
      "div:nth-child(5) > .chakra-container > div > div:nth-child(3) > .chakra-button"
    )
    .click();
});
