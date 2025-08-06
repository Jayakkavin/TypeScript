import { test, expect, chromium, Page } from "@playwright/test";

test("SauceDemo Test", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Helper function for robust clicking with retries
  async function safeClick(
    page: Page,
    selector: string,
    errorMessage: string,
    retries: number = 3
  ): Promise<void> {
    for (let i = 0; i <= retries; i++) {
      try {
        await page.locator(selector).click({ timeout: 5000 });
        return;
      } catch (error) {
        if (i === retries) {
          console.error(`${errorMessage}: ${error}`);
          throw new Error(`${errorMessage} after ${retries} retries`);
        }
        console.log(`Attempt ${i + 1} failed. Retrying...`);
        await page.waitForTimeout(1000); // Wait before retrying
      }
    }
  }

  // Helper function for robust filling with retries
  async function safeFill(
    page: Page,
    selector: string,
    value: string,
    errorMessage: string,
    retries: number = 3
  ): Promise<void> {
    for (let i = 0; i <= retries; i++) {
      try {
        await page.locator(selector).fill(value, { timeout: 5000 });
        return;
      } catch (error) {
        if (i === retries) {
          console.error(`${errorMessage}: ${error}`);
          throw new Error(`${errorMessage} after ${retries} retries`);
        }
        console.log(`Attempt ${i + 1} failed. Retrying...`);
        await page.waitForTimeout(1000); // Wait before retrying
      }
    }
  }

  // Step 1: Navigate to https://www.saucedemo.com/
  try {
    await page.goto("https://www.saucedemo.com/", {
      waitUntil: "networkidle",
      timeout: 10000,
    });
  } catch (error) {
    console.error(`Navigation failed: ${error}`);
    throw new Error(`Navigation to saucedemo failed`);
  }

  // Step 2: Enter "standard_user" in the username field
  await safeFill(
    page,
    "//input[@id='user-name']",
    "standard_user",
    "Failed to fill username field"
  );

  // Step 3: Enter "secret_sauce" in the password field
  await safeFill(
    page,
    "//input[@id='password']",
    "secret_sauce",
    "Failed to fill password field"
  );

  // Step 4: Click the Login button
  await safeClick(
    page,
    "//input[@id='login-button']",
    "Failed to click login button"
  );

  // Step 5: Wait for 3 seconds for page to load.
  await page.waitForTimeout(3000);

  // Step 6: Click on the product sort filter dropdown
  await safeClick(
    page,
    "//select[@class='product_sort_container']",
    "Failed to click product sort filter dropdown"
  );

  // Step 7: Select Name (Z to A) from the product sort filter dropdown
  await safeClick(
    page,
    "//select[@class='product_sort_container'] >> text=Name (Z to A)",
    "Failed to select Name (Z to A)"
  );

  // Step 8: Wait for 3 seconds for page to load.
  await page.waitForTimeout(3000);

  // Step 9: Locate the product "Sauce Labs Backpack" and click the Add to Cart button
  await safeClick(
    page,
    "//button[@id='add-to-cart-sauce-labs-backpack']",
    "Failed to click Add to Cart for Sauce Labs Backpack"
  );

  // Step 10: Click on the cart icon to verify that the product has been added
  await safeClick(
    page,
    "//a[@class='shopping_cart_link']",
    "Failed to click cart icon"
  );

  // Step 11: Wait for 3 seconds for page to load.
  await page.waitForTimeout(3000);

  // Step 12: Ensure that the product 'Sauce Labs Backpack' is present in the cart
  try {
    await expect(
      page.locator(
        "//div[@class='inventory_item_name' and text()='Sauce Labs Backpack']"
      )
    ).toBeVisible({ timeout: 10000 });
  } catch (error) {
    console.error(`Sauce Labs Backpack not found in cart: ${error}`);
    throw new Error("Sauce Labs Backpack not found in cart");
  }

  // Step 13: Wait for 3 seconds for page to load.
  await page.waitForTimeout(3000);

  // Step 14: Then click on the checkout button
  await safeClick(page, "//button[@id='checkout']", "Failed to click checkout");

  // Step 15: Wait for 3 seconds for page to load.
  await page.waitForTimeout(3000);

  // Step 16: Enter the first name as chaitanya in the first name field
  await safeFill(
    page,
    "//input[@id='first-name']",
    "chaitanya",
    "Failed to fill first name"
  );

  // Step 17: Enter the last name as Kompella in the last name field
  await safeFill(
    page,
    "//input[@id='last-name']",
    "Kompella",
    "Failed to fill last name"
  );

  // Step 18: Enter the postal code as 62567352 in postal code field
  await safeFill(
    page,
    "//input[@id='postal-code']",
    "62567352",
    "Failed to fill postal code"
  );

  // Step 19: Wait for 3 seconds for page to load.
  await page.waitForTimeout(3000);

  // Step 20: Click on continue button
  await safeClick(page, "//input[@id='continue']", "Failed to click continue");

  // Step 21: Wait for 3 seconds for page to load.
  await page.waitForTimeout(3000);

  // Step 22: Click on finish button
  await safeClick(page, "//button[@id='finish']", "Failed to click finish");

  // Step 23: You should see a message “Thank you for your order!”
  try {
    await expect(
      page.locator("//h2[text()='Thank you for your order!']")
    ).toBeVisible({ timeout: 10000 });
  } catch (error) {
    console.error(`Thank you message not found: ${error}`);
    throw new Error("Thank you message not found");
  }

  // Step 24: Wait for 3 seconds for page to load.
  await page.waitForTimeout(3000);

  // Step 25: Then click on back to home button
  await safeClick(
    page,
    "//button[@id='back-to-products']",
    "Failed to click back to home"
  );

  // Step 26: Wait for 3 seconds for page to load.
  await page.waitForTimeout(3000);

  // Step 27: Click on the burger bar
  await safeClick(
    page,
    "//button[@id='react-burger-menu-btn']",
    "Failed to click burger bar"
  );

  // Step 28: Wait for 3 seconds for page to load.
  await page.waitForTimeout(3000);

  // Step 29: Click on logout
  await safeClick(page, "//a[@id='logout_sidebar_link']", "Failed to click logout");

  // Step 30: Keep the browser open after the test execution is complete.
  // await browser.close(); // Commented out to keep browser open
});
