import { test, expect, chromium } from "@playwright/test";

test("Saucedemo Workflow", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Helper function to perform actions with retries and fallbacks
  async function performAction(action: string, selector: string, value: string | null, retry: number, fallbacks: string[], errorMessage: string) {
    let attempts = 0;
    let lastError: Error | null = null;

    while (attempts <= retry) {
      attempts++;
      try {
        let currentSelector = selector;
        if (attempts > 1 && fallbacks.length > 0) {
          currentSelector = fallbacks[attempts - 2] || selector;
        }

        switch (action) {
          case "goto":
            await page.goto(currentSelector, { waitUntil: 'networkidle' });
            break;
          case "type":
            await page.locator(currentSelector).fill(value!);
            break;
          case "click":
            await page.locator(currentSelector).click();
            break;
          case "check":
            await page.locator(currentSelector).check();
            break;
          case "waitForSelector":
            await page.locator(currentSelector).waitFor({ timeout: 5000 });
            break;
        }
        return; // Success, exit the loop
      } catch (error: any) {
        lastError = new Error(`${errorMessage} Attempt ${attempts}: ${error.message}`);
        console.error(lastError.message);
      }
    }
    throw lastError; // Throw the last error if all retries failed
  }

  try {
    // Step 1: Navigate to saucedemo
    await performAction("goto", "https://www.saucedemo.com/", null, 0, [], "Navigation to saucedemo failed.");

    // Step 2: Enter username
    await performAction("type", "[data-test=\"username\"]", "standard_user", 3, ["#user-name", "[name=\"user-name\"]"], "Failed to enter username.");

    // Step 3: Enter password
    await performAction("type", "[data-test=\"password\"]", "secret_sauce", 3, ["#password", "[name=\"password\"]"], "Failed to enter password.");

    // Step 4: Click login button
    await performAction("click", "[data-test=\"login-button\"]", null, 3, ["#login-button", "[name=\"login-button\"]"], "Login button click failed.");

    // Step 5: Add to cart
    await performAction("click", "[data-test=\"add-to-cart-sauce-labs-backpack\"]", null, 3, ["#add-to-cart-sauce-labs-backpack", "text=Add to cart"], "Add to cart failed for Sauce Labs Backpack.");

    // Step 6: Click shopping cart link
    await performAction("click", "[data-test=\"shopping-cart-link\"]", null, 3, [], "Failed to click the cart icon.");

    // Step 7: Wait for product in cart
    await performAction("waitForSelector", "[data-test=\"inventory-item-name\"]:has-text('Sauce Labs Backpack')", null, 3, [], "Product not found in cart.");

    // Step 8: Click checkout
    await performAction("click", "[data-test=\"checkout\"]", null, 3, ["#checkout", "[name=\"checkout\"]"], "Checkout button click failed.");

    // Step 9: Enter first name
    await performAction("type", "[data-test=\"firstName\"]", "chaitanya", 3, ["#first-name", "[name=\"firstName\"]"], "Failed to enter first name.");

    // Step 10: Enter last name
    await performAction("type", "[data-test=\"lastName\"]", "Kompella", 3, ["#last-name", "[name=\"lastName\"]"], "Failed to enter last name.");

    // Step 11: Enter postal code
    await performAction("type", "[data-test=\"postalCode\"]", "62567352", 3, ["#postal-code", "[name=\"postalCode\"]"], "Failed to enter postal code.");

    // Step 12: Click continue
    await performAction("click", "[data-test=\"continue\"]", null, 3, ["#continue", "[name=\"continue\"]"], "Continue button click failed.");

    // Step 13: Click finish
    await performAction("click", "[data-test=\"finish\"]", null, 3, ["#finish", "[name=\"finish\"]"], "Finish button click failed.");

    // Step 14: Wait for confirmation
    await performAction("waitForSelector", "text=Thank you for your order!", null, 3, [], "Confirmation message not found.");

    // Step 15: Back to home
    await performAction("click", "[data-test=\"back-to-products\"]", null, 3, ["text=Back to products"], "Back to home button click failed.");

    // Step 16: Click burger bar
    await performAction("click", "#react-burger-menu-btn", null, 3, [], "Burger bar click failed.");

    // Step 17: Logout
    await performAction("click", "#logout_sidebar_link", null, 3, [], "Logout failed.");

  } catch (error: any) {
    console.error("Test failed:", error.message);
    throw error; // Exit with a clear error
  } finally {
    await browser.close();
  }
});
