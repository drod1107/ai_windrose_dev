import { test, expect } from "@playwright/test";

test("paper page displays viewer and download link", async ({ page }) => {
  await page.goto("/paper");
  await expect(page.getByTestId("pdf-viewer")).toBeVisible();
  const download = page.getByRole("link", { name: /download pdf/i });
  await expect(download).toHaveAttribute("href", "/paper.pdf");
});
