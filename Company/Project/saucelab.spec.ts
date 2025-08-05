import { test, expect, chromium } from "@playwright/test";

test("SauceDemo Test", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to https://www.saucedemo.com/
  try {
    await page.goto("https://www.saucedemo.com/", { waitUntil: 'networkidle' });
  } catch (error) {
    console.error("Failed to navigate to https://www.saucedemo.com/:", error);
    throw new Error("Failed to navigate to https://www.saucedemo.com/ after multiple retries.");
  }

  // Enter "standard_user" in the username field with id 'user-name'
  try {
    await page.locator("input#user-name").fill("standard_user", { timeout: 3000, retries: 3 });
  } catch (error) {
    console.error("Failed to fill username field with 'standard_user':", error);
    throw new Error("Failed to fill username field with 'standard_user' after multiple retries.");
  }

  // Enter "secret_sauce" in the password field with id 'password'
  try {
    await page.locator("input#password").fill("secret_sauce", { timeout: 3000, retries: 3 });
  } catch (error) {
    console.error("Failed to fill password field with 'secret_sauce':", error);
    throw new Error("Failed to fill password field with 'secret_sauce' after multiple retries.");
  }

  // Click the Login button with id 'login-button'
  try {
    await page.locator("input#login-button").click({ timeout: 3000, retries: 3 });
    await page.waitForLoadState('networkidle');
  } catch (error) {
    console.error("Failed to click the Login button:", error);
    throw new Error("Failed to click the Login button after multiple retries.");
  }

  // Wait for 3 seconds.
  await page.waitForTimeout(3000);

  // Click on the product sort filter dropdown.
  try {
    await page.locator("select.product_sort_container").click({ timeout: 3000, retries: 3 });
  } catch (error) {
    console.error("Failed to click the product sort filter dropdown:", error);
    throw new Error("Failed to click the product sort filter dropdown after multiple retries.");
  }

  // Click on Name (Z to A) option.
  try {
    await page.locator("option[value='za']").click({ timeout: 3000, retries: 3 });
  } catch (error) {
    console.error("Failed to click the Name (Z to A) option:", error);
    throw new Error("Failed to click the Name (Z to A) option after multiple retries.");
  }

  // Wait for 3 seconds.
  await page.waitForTimeout(3000);

  // Locate the product "Sauce Labs Backpack" and click the Add to Cart button with id 'add-to-cart-sauce-labs-backpack'.
  try {
    await page.locator("button#add-to-cart-sauce-labs-backpack").click({ timeout: 3000, retries: 3 });
  } catch (error) {
    console.error("Failed to click the Add to Cart button for 'Sauce Labs Backpack':", error);
    throw new Error("Failed to click the Add to Cart button for 'Sauce Labs Backpack' after multiple retries.");
  }

  // Click on the cart icon with data-test 'shopping-cart-link'.
  try {
    await page.locator("a[data-test='shopping-cart-link']").click({ timeout: 3000, retries: 3 });
    await page.waitForLoadState('networkidle');
  } catch (error) {
    console.error("Failed to click the cart icon:", error);
    throw new Error("Failed to click the cart icon after multiple retries.");
  }

  // Wait for 3 seconds.
  await page.waitForTimeout(3000);

  // Ensure that the product "Sauce Labs Backpack" is present in the cart.
  try {
    await page.locator("div.cart_item div.inventory_item_name:has-text('Sauce Labs Backpack')").waitFor({ timeout: 3000, retries: 3 });
  } catch (error) {
    console.error("Failed to locate the product 'Sauce Labs Backpack' in the cart:", error);
    throw new Error("Failed to locate the product 'Sauce Labs Backpack' in the cart after multiple retries.");
  }

  // Wait for 3 seconds.
  await page.waitForTimeout(3000);

  // Then click on the checkout button with id 'checkout'.
  try {
    await page.locator("button#checkout").click({ timeout: 3000, retries: 3 });
    await page.waitForLoadState('networkidle');
  } catch (error) {
    console.error("Failed to click the checkout button:", error);
    throw new Error("Failed to click the checkout button after multiple retries.");
  }

  // Wait for 3 seconds.
  await page.waitForTimeout(3000);

  // Enter the first name as chaitanya in the first name field with id 'first-name'.
  try {
    await page.locator("input#first-name").fill("chaitanya", { timeout: 3000, retries: 3 });
  } catch (error) {
    console.error("Failed to fill first name field with 'chaitanya':", error);
    throw new Error("Failed to fill first name field with 'chaitanya' after multiple retries.");
  }

  // Enter the last name as Kompella in the last name field with id 'last-name'.
  try {
    await page.locator("input#last-name").fill("Kompella", { timeout: 3000, retries: 3 });
  } catch (error) {
    console.error("Failed to fill last name field with 'Kompella':", error);
    throw new Error("Failed to fill last name field with 'Kompella' after multiple retries.");
  }

  // Enter the postal code as 62567352 in postal code field with id 'postal-code'.
  try {
    await page.locator("input#postal-code").fill("62567352", { timeout: 3000, retries: 3 });
  } catch (error) {
    console.error("Failed to fill postal code field with '62567352':", error);
    throw new Error("Failed to fill postal code field with '62567352' after multiple retries.");
  }

  // Wait for 3 seconds.
  await page.waitForTimeout(3000);

  // Click on continue button with id 'continue'.
  try {
    await page.locator("input#continue").click({ timeout: 3000, retries: 3 });
    await page.waitForLoadState('networkidle');
  } catch (error) {
    console.error("Failed to click the continue button:", error);
    throw new Error("Failed to click the continue button after multiple retries.");
  }

  // Wait for 3 seconds.
  await page.waitForTimeout(3000);

  // Click on finish button with id 'finish'.
  try {
    await page.locator("button#finish").click({ timeout: 3000, retries: 3 });
    await page.waitForLoadState('networkidle');
  } catch (error) {
    console.error("Failed to click the finish button:", error);
    throw new Error("Failed to click the finish button after multiple retries.");
  }

  // You should see a message “Thank you for your order!”.
  try {
    await page.locator("h2.complete-header:has-text('Thank you for your order!')").waitFor({ timeout: 3000, retries: 3 });
  } catch (error) {
    console.error("The message “Thank you for your order!” is not displayed:", error);
    throw new Error("The message “Thank you for your order!” is not displayed after multiple retries.");
  }

  // Wait for 3 seconds.
  await page.waitForTimeout(3000);

  // Then click on back to home button with id 'back-to-products'.
  try {
    await page.locator("button#back-to-products").click({ timeout: 3000, retries: 3 });
    await page.waitForLoadState('networkidle');
  } catch (error) {
    console.error("Failed to click the back to home button:", error);
    throw new Error("Failed to click the back to home button after multiple retries.");
  }

  // Wait for 3 seconds.
  await page.waitForTimeout(3000);

  // Click on the burger bar with id 'react-burger-menu-btn'.
  try {
    await page.locator("button#react-burger-menu-btn").click({ timeout: 3000, retries: 3 });
  } catch (error) {
    console.error("Failed to click the burger bar:", error);
    throw new Error("Failed to click the burger bar after multiple retries.");
  }

  // Wait for 3 seconds.
  await page.waitForTimeout(3000);

  // Click on logout with id 'logout_sidebar_link'.
  try {
    await page.locator("a#logout_sidebar_link").click({ timeout: 3000, retries: 3 });
    await page.waitForLoadState('networkidle');
  } catch (error) {
    console.error("Failed to click the logout button:", error);
    throw new Error("Failed to click the logout button after multiple retries.");
  }

  // Keep the browser open after the test execution is complete.
  // await browser.close();
});
