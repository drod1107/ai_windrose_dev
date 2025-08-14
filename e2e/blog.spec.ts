import { test, expect } from "@playwright/test";

test("blog index loads", async ({ page }) => {
  const response = await page.goto("/blog");
  expect(response?.status()).toBe(200);
  await expect(
    page.getByRole("heading", { name: "Example Post" }),
  ).toBeVisible();
});
