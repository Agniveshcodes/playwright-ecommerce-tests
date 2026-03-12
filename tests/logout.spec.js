import { test, expect } from "@playwright/test";

test("User can logout successfully", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.fill("#user-name", "visual_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");

  await page.click('#react-burger-menu-btn')
  await page.click('#logout_sidebar_link')

  await expect(page).toHaveURL('https://www.saucedemo.com/')
});
