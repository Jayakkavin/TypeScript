import { test, expect, Page } from '@playwright/test';
import fs from 'fs';

const USER_TEST_STEPS = [
  "Navigate to https://www.saucedemo.com/.",
  "Enter \"standard_user\" in the username field with id 'user-name'.",
  "Enter \"secret_sauce\" in the password field with id 'password'.",
  "Click the Login button with id 'login-button'.",
  "Wait for 3 seconds for page to load.",
  "Click on the product sort filter dropdown.",
  "Click on Name (Z to A) option.",
  "Wait for 3 seconds for page to load.",
  "Locate the product \"Sauce Labs Backpack\" and click the Add to Cart button with id 'add-to-cart-sauce-labs-backpack'.",
  "Click on the cart icon with class 'shopping_cart_link'.",
  "Wait for 3 seconds for page to load.",
  "Ensure that the product 'Sauce Labs Backpack' is present in the cart.",
  "Wait for 3 seconds for page to load.",
  "Then click on the checkout button with id 'checkout'.",
  "Wait for 3 seconds for page to load.",
  "Enter the first name as chaitanya in the first name field with id 'first-name'.",
  "Enter the last name as Kompella in the last name field with id 'last-name'.",
  "Enter the postal code as 62567352 in postal code field with id 'postal-code'.",
  "Wait for 3 seconds for page to load.",
  "Click on continue button with id 'continue'.",
  "Wait for 3 seconds for page to load.",
  "Click on finish button with id 'finish'.",
  "You should see a message “Thank you for your order!”.",
  "Wait for 3 seconds for page to load.",
  "Then click on back to home button with id 'back-to-products'.",
  "Wait for 3 seconds for page to load.",
  "Click on the burger bar button with id 'react-burger-menu-btn'.",
  "Wait for 3 seconds for page to load.",
  "Click on logout button with id 'logout_sidebar_link'.",
  "Keep the browser open after the test execution is complete."
];

const testSuiteName = 'SauceDemoTest';
const outputFileName = 'test-results.json';

test.describe(testSuiteName, () => {
  let page: Page;
  let executionResults: any[] = [];
  let executedSteps: string[] = [];

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.afterAll(async () => {
    await page.close();
    // Write results to file
    fs.writeFileSync(outputFileName, JSON.stringify(executionResults, null, 2));
    console.log(JSON.stringify(executionResults, null, 2));
  });

  async function executeStep(stepDescription: string, stepFunction: () => Promise<void>, executionResults: any[], executedSteps: string[]) {
    let startTime = Date.now();
    let endTime;
    let success = false;
    let errorMessage = '';

    try {
      await stepFunction();
      success = true;
      executedSteps.push(stepDescription);
    } catch (e: any) {
      success = false;
      errorMessage = e.message;
      console.error(`Step "${stepDescription}" failed: ${errorMessage}`);
      try {
        await page.screenshot({ path: `screenshots/${stepDescription.replace(/[^a-zA-Z0-9]/g, '_')}.png` });
      } catch (screenshotError: any) {
        console.error(`Failed to capture screenshot for step "${stepDescription}": ${screenshotError.message}`);
      }
    } finally {
      endTime = Date.now();
      const duration = endTime - startTime;

      executionResults.push({
        step: stepDescription,
        success: success,
        errorMessage: errorMessage,
        duration: duration,
        timestamp: new Date().toISOString()
      });
    }
  }

  test('SauceDemo Test', async () => {
    await test.step("Navigate to https://www.saucedemo.com/", async () => {
      await executeStep(
        "Navigate to https://www.saucedemo.com/",
        async () => {
          await page.goto("https://www.saucedemo.com/", { waitUntil: 'networkidle' });
        },
        executionResults,
        executedSteps
      );
    });

    await test.step("Enter username", async () => {
      await executeStep(
        "Enter 'standard_user' in the username field",
        async () => {
          await page.locator("#user-name").waitFor({ timeout: 5000 });
          await page.locator("#user-name").fill("standard_user");
        },
        executionResults,
        executedSteps
      );
    });

    await test.step("Enter password", async () => {
      await executeStep(
        "Enter 'secret_sauce' in the password field",
        async () => {
          await page.locator("#password").waitFor({ timeout: 5000 });
          await page.locator("#password").fill("secret_sauce");
        },
        executionResults,
        executedSteps
      );
    });

    await test.step("Click login", async () => {
      await executeStep(
        "Click the Login button",
        async () => {
          await page.locator("#login-button").waitFor({ timeout: 5000 });
          await page.locator("#login-button").click();
          await page.waitForSelector("#inventory_container", { timeout: 5000 });
        },
        executionResults,
        executedSteps
      );
    });

    await test.step("Sort products", async () => {
      await executeStep(
        "Click on the product sort filter dropdown",
        async () => {
          await page.locator(".product_sort_container").waitFor({ timeout: 5000 });
          await page.locator(".product_sort_container").click();
        },
        executionResults,
        executedSteps
      );

      await executeStep(
        "Click on Name (Z to A) option",
        async () => {
          await page.locator("xpath=//option[text()='Name (Z to A)']").waitFor({ timeout: 5000 });
          await page.locator("xpath=//option[text()='Name (Z to A)']").click();
        },
        executionResults,
        executedSteps
      );

      await executeStep(
        "Wait for the sorting to complete",
        async () => {
          await page.waitForTimeout(3000);
        },
        executionResults,
        executedSteps
      );
    });

    await test.step("Add to cart", async () => {
      await executeStep(
        "Locate the product 'Sauce Labs Backpack' and click the Add to Cart button",
        async () => {
          await page.locator("#add-to-cart-sauce-labs-backpack").waitFor({ timeout: 5000 });
          await page.locator("#add-to-cart-sauce-labs-backpack").click();
        },
        executionResults,
        executedSteps
      );
    });

    await test.step("Go to cart", async () => {
      await executeStep(
        "Click on the cart icon",
        async () => {
          await page.locator(".shopping_cart_link").waitFor({ timeout: 5000 });
          await page.locator(".shopping_cart_link").click();
          await page.waitForSelector(".cart_list", { timeout: 5000 });
        },
        executionResults,
        executedSteps
      );
    });

    await test.step("Verify item in cart", async () => {
      await executeStep(
        "Ensure that the product 'Sauce Labs Backpack' is present in the cart",
        async () => {
          await page.locator("xpath=//div[@class='inventory_item_name' and text()='Sauce Labs Backpack']").waitFor({ timeout: 5000 });
          expect(await page.locator("xpath=//div[@class='inventory_item_name' and text()='Sauce Labs Backpack']").isVisible()).toBe(true);
        },
        executionResults,
        executedSteps
      );

      await executeStep(
        "Wait for a few seconds",
        async () => {
          await page.waitForTimeout(3000);
        },
        executionResults,
        executedSteps
      );
    });

    await test.step("Go to checkout", async () => {
      await executeStep(
        "Click on the checkout button",
        async () => {
          await page.locator("#checkout").waitFor({ timeout: 5000 });
          await page.locator("#checkout").click();
          await page.waitForSelector("#checkout_info_container", { timeout: 5000 });
        },
        executionResults,
        executedSteps
      );
    });

    await test.step("Fill checkout information", async () => {
      await executeStep(
        "Enter the first name as 'chaitanya' in the first name field",
        async () => {
          await page.locator("#first-name").waitFor({ timeout: 5000 });
          await page.locator("#first-name").fill("chaitanya");
        },
        executionResults,
        executedSteps
      );

      await executeStep(
        "Enter the last name as 'Kompella' in the last name field",
        async () => {
          await page.locator("#last-name").waitFor({ timeout: 5000 });
          await page.locator("#last-name").fill("Kompella");
        },
        executionResults,
        executedSteps
      );

      await executeStep(
        "Enter the postal code as '62567352' in postal code field",
        async () => {
          await page.locator("#postal-code").waitFor({ timeout: 5000 });
          await page.locator("#postal-code").fill("62567352");
        },
        executionResults,
        executedSteps
      );

      await executeStep(
        "Wait for a few seconds",
        async () => {
          await page.waitForTimeout(3000);
        },
        executionResults,
        executedSteps
      );
    });

    await test.step("Continue checkout", async () => {
      await executeStep(
        "Click on continue button",
        async () => {
          await page.locator("#continue").waitFor({ timeout: 5000 });
          await page.locator("#continue").click();
          await page.waitForSelector(".summary_info", { timeout: 5000 });
        },
        executionResults,
        executedSteps
      );
    });

    await test.step("Finish checkout", async () => {
      await executeStep(
        "Click on finish button",
        async () => {
          await page.locator("#finish").waitFor({ timeout: 5000 });
          await page.locator("#finish").click();
        },
        executionResults,
        executedSteps
      );
    });

    await test.step("Verify thank you message", async () => {
      await executeStep(
        "Verify the 'Thank you for your order!' message is displayed",
        async () => {
          await page.locator("xpath=//h2[text()='Thank you for your order!']").waitFor({ timeout: 5000 });
          expect(await page.locator("xpath=//h2[text()='Thank you for your order!']").isVisible()).toBe(true);
        },
        executionResults,
        executedSteps
      );

      await executeStep(
        "Wait for a few seconds",
        async () => {
          await page.waitForTimeout(3000);
        },
        executionResults,
        executedSteps
      );
    });

    await test.step("Go back home", async () => {
      await executeStep(
        "Click on back to home button",
        async () => {
          await page.locator("#back-to-products").waitFor({ timeout: 5000 });
          await page.locator("#back-to-products").click();
        },
        executionResults,
        executedSteps
      );

      await executeStep(
        "Wait for a few seconds",
        async () => {
          await page.waitForTimeout(3000);
        },
        executionResults,
        executedSteps
      );
    });

    await test.step("Logout", async () => {
      await executeStep(
        "Click on the burger bar",
        async () => {
          await page.locator("#react-burger-menu-btn").waitFor({ timeout: 5000 });
          await page.locator("#react-burger-menu-btn").click();
          await page.waitForSelector(".bm-menu", { timeout: 5000 });
        },
        executionResults,
        executedSteps
      );

      await executeStep(
        "Click on logout",
        async () => {
          await page.locator("#logout_sidebar_link").waitFor({ timeout: 5000 });
          await page.locator("#logout_sidebar_link").click();
        },
        executionResults,
        executedSteps
      );
    });
  });
});
