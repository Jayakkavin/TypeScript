import { test, expect, chromium } from "@playwright/test";

test("SauceDemo Workflow", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  async function performAction(action: string, selector: string, value: string | null, waitTimeoutMs: number, retry: number, fallbacks: string[], errorMessage: string) {
    for (let i = 0; i <= retry; i++) {
      try {
        switch (action) {
          case "navigate":
            await page.goto(selector, { waitUntil: 'networkidle' });
            break;
          case "fill":
            await page.locator(selector).waitFor({ state: 'visible', timeout: waitTimeoutMs });
            await page.locator(selector).fill(value!);
            break;
          case "click":
            await page.locator(selector).waitFor({ state: 'visible', timeout: waitTimeoutMs });
            await page.locator(selector).click();
            break;
          case "check":
            await page.locator(selector).waitFor({ state: 'visible', timeout: waitTimeoutMs });
            await page.locator(selector).check();
            break;
          case "expect":
            await page.locator(selector).waitFor({ state: 'visible', timeout: waitTimeoutMs });
            await expect(page.locator(selector)).toContainText(value!);
            break;
          default:
            throw new Error(`Unknown action: ${action}`);
        }
        return; // Success, exit the retry loop
      } catch (error) {
        console.error(`Attempt ${i + 1} failed for action ${action} on selector ${selector}: ${error}`);
        if (i === retry) {
          console.error(`All retries failed for action ${action} on selector ${selector}`);
          throw new Error(`${errorMessage}: ${error}`);
        }

        if (fallbacks.includes("scrollIntoView")) {
          try {
            await page.locator(selector).scrollIntoViewIfNeeded();
          } catch (scrollError) {
            console.warn(`Scroll into view failed: ${scrollError}`);
          }
        }
        if (fallbacks.includes("waitForLoadState")) {
          try {
            await page.waitForLoadState();
          } catch (loadStateError) {
            console.warn(`waitForLoadState failed: ${loadStateError}`);
          }
        }
        // Wait before retrying
        await page.waitForTimeout(500);
      }
    }
  }

  try {
    await performAction("navigate", "https://www.saucedemo.com/", null, 5000, 3, ["waitForLoadState"], "Failed to navigate to the login page");
    await performAction("fill", "[data-test='username']", "standard_user", 5000, 3, ["scrollIntoView"], "Failed to enter username");
    await performAction("fill", "[data-test='password']", "secret_sauce", 5000, 3, ["scrollIntoView"], "Failed to enter password");
    await performAction("click", "[data-test='login-button']", null, 5000, 3, ["scrollIntoView"], "Failed to click login button");
    await performAction("click", ".product_sort_container", null, 5000, 3, [], "Failed to click product sort filter");
    await performAction("click", "option[value='za']", null, 5000, 3, [], "Failed to select Name (Z to A)");
    await performAction("click", "[data-test='add-to-cart-sauce-labs-backpack']", null, 5000, 3, ["scrollIntoView"], "Failed to add Sauce Labs Backpack to cart");
    await performAction("click", "[data-test='shopping-cart-link']", null, 5000, 3, [], "Failed to click cart icon");
    await performAction("expect", "[data-test='inventory-item-name']", "Sauce Labs Backpack", 5000, 3, [], "Sauce Labs Backpack is not present in the cart");
    await performAction("click", "[data-test='checkout']", null, 5000, 3, [], "Failed to click checkout button");
    await performAction("fill", "[data-test='firstName']", "chaitanya", 5000, 3, ["scrollIntoView"], "Failed to enter first name");
    await performAction("fill", "[data-test='lastName']", "Kompella", 5000, 3, ["scrollIntoView"], "Failed to enter last name");
    await performAction("fill", "[data-test='postalCode']", "62567352", 5000, 3, ["scrollIntoView"], "Failed to enter postal code");
    await performAction("click", "[data-test='continue']", null, 5000, 3, [], "Failed to click continue button");
    await performAction("click", "[data-test='finish']", null, 5000, 3, [], "Failed to click finish button");
    await performAction("expect", ".complete-header", "Thank you for your order!", 5000, 3, [], "Confirmation message is not displayed");
    await performAction("click", "[data-test='back-to-products']", null, 5000, 3, [], "Failed to click back to home button");
    await performAction("click", "#react-burger-menu-btn", null, 5000, 3, [], "Failed to click burger bar");
    await performAction("click", "#logout_sidebar_link", null, 5000, 3, [], "Failed to click logout");

  } finally {
    await browser.close();
  }
});
