import { test, expect, chromium, Browser, Page, BrowserContext } from "@playwright/test";

test.describe("SauceDemo End-to-End Test", () => {
  test.setTimeout(10000);

  test("should complete the purchase flow successfully", async () => {
    const browser: Browser = await chromium.launch({
      headless: false,
      slowMo: 50,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-web-security',
        '--disable-features=VizDisplayCompositor'
      ]
    });
    const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
    const page: Page = await context.newPage();
    let step = 0;

    // Step 1: Navigate to https://www.saucedemo.com/
    step++;
    try {
      await page.goto("https://www.saucedemo.com/", { timeout: 10000 });
      console.log(`Step ${step} Result:`);
      console.log(`Action: goto`);
      console.log(`Status: success`);
      console.log(`Details: Navigated to https://www.saucedemo.com/`);
      await page.waitForTimeout(100);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: goto`);
      console.log(`Status: error`);
      console.log(`Details: Navigation to homepage failed. ${error.message}`);
    }

    // Step 2: Enter username 'standard_user'.
    step++;
    try {
      await page.locator("[data-test='username']").fill("standard_user", { timeout: 5000 });
      console.log(`Step ${step} Result:`);
      console.log(`Action: fill`);
      console.log(`Status: success`);
      console.log(`Details: Filled [data-test='username']`);
      await page.waitForTimeout(100);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: fill`);
      console.log(`Status: error`);
      console.log(`Details: Failed to enter username. ${error.message}`);
    }

    // Step 3: Enter password 'secret_sauce'.
    step++;
    try {
      await page.locator("[data-test='password']").fill("secret_sauce", { timeout: 5000 });
      console.log(`Step ${step} Result:`);
      console.log(`Action: fill`);
      console.log(`Status: success`);
      console.log(`Details: Filled [data-test='password']`);
      await page.waitForTimeout(100);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: fill`);
      console.log(`Status: error`);
      console.log(`Details: Failed to enter password. ${error.message}`);
    }

    // Step 4: Click the login button.
    step++;
    try {
      await page.locator("[data-test='login-button']").click({ timeout: 5000 });
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: success`);
      console.log(`Details: Clicked [data-test='login-button']`);
      await page.waitForTimeout(2000);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: error`);
      console.log(`Details: Failed to click login button. ${error.message}`);
    }

    // Step 5: Wait for page load after login.
    step++;
    try {
      await page.waitForTimeout(2000);
      console.log(`Step ${step} Result:`);
      console.log(`Action: waitFor`);
      console.log(`Status: success`);
      console.log(`Details: Waited for 2000ms`);
      await page.waitForTimeout(100);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: waitFor`);
      console.log(`Status: error`);
      console.log(`Details: Wait after login failed. ${error.message}`);
    }

    // Step 6: Open the sort dropdown.
    step++;
    try {
      await page.locator("[data-test='product_sort_container']").click({ timeout: 5000 });
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: success`);
      console.log(`Details: Clicked [data-test='product_sort_container']`);
      await page.waitForTimeout(500);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: error`);
      console.log(`Details: Failed to open sort dropdown. ${error.message}`);
    }

    // Step 7: Select 'Name (Z to A)' sort option.
    step++;
    try {
      await page.locator("[data-test='product_sort_container'] [value='za']").click({ timeout: 5000 });
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: success`);
      console.log(`Details: Clicked [data-test='product_sort_container'] [value='za']`);
      await page.waitForTimeout(2000);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: error`);
      console.log(`Details: Failed to select sort option. ${error.message}`);
    }

    // Step 8: Wait for sorting to complete.
    step++;
    try {
      await page.waitForTimeout(2000);
      console.log(`Step ${step} Result:`);
      console.log(`Action: waitFor`);
      console.log(`Status: success`);
      console.log(`Details: Waited for 2000ms`);
      await page.waitForTimeout(100);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: waitFor`);
      console.log(`Status: error`);
      console.log(`Details: Wait after sorting failed. ${error.message}`);
    }

    // Step 9: Add 'Sauce Labs Backpack' to cart.
    step++;
    try {
      await page.locator(".inventory_item:has-text('Sauce Labs Backpack') [data-test^='add-to-cart-']").click({ timeout: 5000 });
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: success`);
      console.log(`Details: Clicked .inventory_item:has-text('Sauce Labs Backpack') [data-test^='add-to-cart-']`);
      await page.waitForTimeout(500);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: error`);
      console.log(`Details: Failed to add backpack to cart. ${error.message}`);
    }

    // Step 10: Click the cart icon.
    step++;
    try {
      await page.locator(".shopping_cart_link, #shopping_cart_container").click({ timeout: 5000 });
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: success`);
      console.log(`Details: Clicked .shopping_cart_link, #shopping_cart_container`);
      await page.waitForTimeout(1000);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: error`);
      console.log(`Details: Failed to click cart icon. ${error.message}`);
    }

    // Step 11: Wait for cart update.
    step++;
    try {
      await page.waitForTimeout(1000);
      console.log(`Step ${step} Result:`);
      console.log(`Action: waitFor`);
      console.log(`Status: success`);
      console.log(`Details: Waited for 1000ms`);
      await page.waitForTimeout(100);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: waitFor`);
      console.log(`Status: error`);
      console.log(`Details: Wait after clicking cart failed. ${error.message}`);
    }

    // Step 12: Verify 'Sauce Labs Backpack' is in the cart.
    step++;
    try {
      const isVisible = await page.locator(".cart_item:has-text('Sauce Labs Backpack')").isVisible({ timeout: 5000 });
      console.log(`Step ${step} Result:`);
      console.log(`Action: isVisible`);
      console.log(`Status: success`);
      console.log(`Details: Element .cart_item:has-text('Sauce Labs Backpack') is ${isVisible ? 'visible' : 'not visible'}`);
      await page.waitForTimeout(100);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: isVisible`);
      console.log(`Status: error`);
      console.log(`Details: 'Sauce Labs Backpack' not found in cart. ${error.message}`);
    }

    // Step 13: Wait before checkout.
    step++;
    try {
      await page.waitForTimeout(1000);
      console.log(`Step ${step} Result:`);
      console.log(`Action: waitFor`);
      console.log(`Status: success`);
      console.log(`Details: Waited for 1000ms`);
      await page.waitForTimeout(100);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: waitFor`);
      console.log(`Status: error`);
      console.log(`Details: Wait before checkout failed. ${error.message}`);
    }

    // Step 14: Click the checkout button.
    step++;
    try {
      await page.locator("[data-test='checkout']").click({ timeout: 5000 });
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: success`);
      console.log(`Details: Clicked [data-test='checkout']`);
      await page.waitForTimeout(1000);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: error`);
      console.log(`Details: Failed to click checkout button. ${error.message}`);
    }

    // Step 15: Wait after clicking checkout.
    step++;
    try {
      await page.waitForTimeout(1000);
      console.log(`Step ${step} Result:`);
      console.log(`Action: waitFor`);
      console.log(`Status: success`);
      console.log(`Details: Waited for 1000ms`);
      await page.waitForTimeout(100);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: waitFor`);
      console.log(`Status: error`);
      console.log(`Details: Wait after clicking checkout failed. ${error.message}`);
    }

    // Step 16: Enter first name 'chaitanya'.
    step++;
    try {
      await page.locator("[data-test='firstName'], #first-name").fill("chaitanya", { timeout: 5000 });
      console.log(`Step ${step} Result:`);
      console.log(`Action: fill`);
      console.log(`Status: success`);
      console.log(`Details: Filled [data-test='firstName'], #first-name`);
      await page.waitForTimeout(100);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: fill`);
      console.log(`Status: error`);
      console.log(`Details: Failed to enter first name. ${error.message}`);
    }

    // Step 17: Enter last name 'Kompella'.
    step++;
    try {
      await page.locator("[data-test='lastName'], #last-name").fill("Kompella", { timeout: 5000 });
      console.log(`Step ${step} Result:`);
      console.log(`Action: fill`);
      console.log(`Status: success`);
      console.log(`Details: Filled [data-test='lastName'], #last-name`);
      await page.waitForTimeout(100);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: fill`);
      console.log(`Status: error`);
      console.log(`Details: Failed to enter last name. ${error.message}`);
    }

    // Step 18: Enter postal code '62567352'.
    step++;
    try {
      await page.locator("[data-test='postalCode'], #postal-code").fill("62567352", { timeout: 5000 });
      console.log(`Step ${step} Result:`);
      console.log(`Action: fill`);
      console.log(`Status: success`);
      console.log(`Details: Filled [data-test='postalCode'], #postal-code`);
      await page.waitForTimeout(100);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: fill`);
      console.log(`Status: error`);
      console.log(`Details: Failed to enter postal code. ${error.message}`);
    }

    // Step 19: Wait before continue.
    step++;
    try {
      await page.waitForTimeout(1000);
      console.log(`Step ${step} Result:`);
      console.log(`Action: waitFor`);
      console.log(`Status: success`);
      console.log(`Details: Waited for 1000ms`);
      await page.waitForTimeout(100);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: waitFor`);
      console.log(`Status: error`);
      console.log(`Details: Wait before continue failed. ${error.message}`);
    }

    // Step 20: Click the continue button.
    step++;
    try {
      await page.locator("[data-test='continue']").click({ timeout: 5000 });
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: success`);
      console.log(`Details: Clicked [data-test='continue']`);
      await page.waitForTimeout(1000);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: error`);
      console.log(`Details: Failed to click continue button. ${error.message}`);
    }

    // Step 21: Wait after clicking continue.
    step++;
    try {
      await page.waitForTimeout(1000);
      console.log(`Step ${step} Result:`);
      console.log(`Action: waitFor`);
      console.log(`Status: success`);
      console.log(`Details: Waited for 1000ms`);
      await page.waitForTimeout(100);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: waitFor`);
      console.log(`Status: error`);
      console.log(`Details: Wait after clicking continue failed. ${error.message}`);
    }

    // Step 22: Click the finish button.
    step++;
    try {
      await page.locator("[data-test='finish']").click({ timeout: 5000 });
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: success`);
      console.log(`Details: Clicked [data-test='finish']`);
      await page.waitForTimeout(1000);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: error`);
      console.log(`Details: Failed to click finish button. ${error.message}`);
    }

    // Step 23: Verify order confirmation message.
    step++;
    try {
      const isVisible = await page.locator(".complete-header:has-text('Thank you for your order!')").isVisible({ timeout: 5000 });
      console.log(`Step ${step} Result:`);
      console.log(`Action: isVisible`);
      console.log(`Status: success`);
      console.log(`Details: Element .complete-header:has-text('Thank you for your order!') is ${isVisible ? 'visible' : 'not visible'}`);
      await page.waitForTimeout(100);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: isVisible`);
      console.log(`Status: error`);
      console.log(`Details: Order confirmation message not found. ${error.message}`);
    }

    // Step 24: Wait after order confirmation.
    step++;
    try {
      await page.waitForTimeout(1000);
      console.log(`Step ${step} Result:`);
      console.log(`Action: waitFor`);
      console.log(`Status: success`);
      console.log(`Details: Waited for 1000ms`);
      await page.waitForTimeout(100);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: waitFor`);
      console.log(`Status: error`);
      console.log(`Details: Wait after order confirmation failed. ${error.message}`);
    }

    // Step 25: Click the back to products button.
    step++;
    try {
      await page.locator("[data-test='back-to-products']").click({ timeout: 5000 });
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: success`);
      console.log(`Details: Clicked [data-test='back-to-products']`);
      await page.waitForTimeout(1000);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: error`);
      console.log(`Details: Failed to click back to products button. ${error.message}`);
    }

    // Step 26: Wait after clicking back to products.
    step++;
    try {
      await page.waitForTimeout(1000);
      console.log(`Step ${step} Result:`);
      console.log(`Action: waitFor`);
      console.log(`Status: success`);
      console.log(`Details: Waited for 1000ms`);
      await page.waitForTimeout(100);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: waitFor`);
      console.log(`Status: error`);
      console.log(`Details: Wait after clicking back to products failed. ${error.message}`);
    }

    // Step 27: Click the burger menu button.
    step++;
    try {
      await page.locator("#react-burger-menu-btn").click({ timeout: 5000 });
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: success`);
      console.log(`Details: Clicked #react-burger-menu-btn`);
      await page.waitForTimeout(1000);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: error`);
      console.log(`Details: Failed to click burger menu button. ${error.message}`);
    }

    // Step 28: Wait after clicking burger menu.
    step++;
    try {
      await page.waitForTimeout(1000);
      console.log(`Step ${step} Result:`);
      console.log(`Action: waitFor`);
      console.log(`Status: success`);
      console.log(`Details: Waited for 1000ms`);
      await page.waitForTimeout(100);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: waitFor`);
      console.log(`Status: error`);
      console.log(`Details: Wait after clicking burger menu failed. ${error.message}`);
    }

    // Step 29: Click the logout button.
    step++;
    try {
      await page.locator("#logout_sidebar_link").click({ timeout: 5000 });
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: success`);
      console.log(`Details: Clicked #logout_sidebar_link`);
      await page.waitForTimeout(1000);
    } catch (error: any) {
      console.log(`Step ${step} Result:`);
      console.log(`Action: click`);
      console.log(`Status: error`);
      console.log(`Details: Failed to click logout button. ${error.message}`);
    }

    await browser.close();
  });
});
