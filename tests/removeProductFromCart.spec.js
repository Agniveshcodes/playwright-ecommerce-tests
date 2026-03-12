import { test, expect } from "@playwright/test";

test("remove product from cart", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.fill("#user-name", "visual_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");

  await page.click("text=Add to cart");
  await page.click(".shopping_cart_link")
  
  await page.click("//button[@id='remove-sauce-labs-backpack']")

  await expect(page.locator('.cart-item')).toHaveCount(0)

});
