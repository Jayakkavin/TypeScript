import { test, expect, chromium } from "@playwright/test";

test("SauceDemo Test", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to https://www.saucedemo.com/.
  try {
    await page.goto("https://www.saucedemo.com/", {
      waitUntil: "networkidle",
      timeout: 10000,
    });
  } catch (error) {
    console.error("Navigation to saucedemo.com failed:", error);
    throw new Error("Navigation to saucedemo.com failed.");
  }

  // Enter "standard_user" in the username field with id 'user-name'.
  try {
    await page.locator("#user-name").fill("standard_user", { timeout: 5000, retries: 2 });
  } catch (error) {
    console.error("Failed to enter username:", error);
    throw new Error("Failed to enter username.");
  }

  // Enter "secret_sauce" in the password field with id 'password'.
  try {
    await page.locator("#password").fill("secret_sauce", { timeout: 5000, retries: 2 });
  } catch (error) {
    console.error("Failed to enter password:", error);
    throw new Error("Failed to enter password.");
  }

  // Click the Login button with id 'login-button'.
  try {
    await page.locator("#login-button").click({ timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("Login button click failed:", error);
    throw new Error("Login button click failed.");
  }

  // Click on the product sort filter dropdown with class 'product_sort_container'.
  try {
    await page.locator(".product_sort_container").click({ timeout: 5000, retries: 2 });
  } catch (error) {
    console.error("Failed to click product sort dropdown:", error);
    throw new Error("Failed to click product sort dropdown.");
  }

  // Select 'Name (Z to A)' from the product sort filter dropdown with class 'product_sort_container'.
  try {
    await page.locator(".product_sort_container").selectOption("za", { timeout: 5000, retries: 2 });
  } catch (error) {
    console.error("Failed to select 'Name (Z to A)':", error);
    throw new Error("Failed to select 'Name (Z to A)'.");
  }

  // Locate the product "Sauce Labs Backpack" and click the Add to cart button with id 'add-to-cart-sauce-labs-backpack'.
  try {
    await page.locator("#add-to-cart-sauce-labs-backpack").click({ timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("Failed to add 'Sauce Labs Backpack' to cart:", error);
    throw new Error("Failed to add 'Sauce Labs Backpack' to cart.");
  }

  // Click on the cart icon with class 'shopping_cart_link'.
  try {
    await page.locator(".shopping_cart_link").click({ timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("Failed to click the cart icon:", error);
    throw new Error("Failed to click the cart icon.");
  }

  // Ensure that the product 'Sauce Labs Backpack' is present in the cart.
  try {
    await page.locator(".inventory_item_name:has-text('Sauce Labs Backpack')").waitFor({ timeout: 5000, retries: 2 });
  } catch (error) {
    console.error("'Sauce Labs Backpack' not found in cart:", error);
    throw new Error("'Sauce Labs Backpack' not found in cart.");
  }

  // Click on the checkout button with id 'checkout'.
  try {
    await page.locator("#checkout").click({ timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("Checkout button click failed:", error);
    throw new Error("Checkout button click failed.");
  }

  // Enter the first name as chaitanya in the first name field with id 'first-name'.
  try {
    await page.locator("#first-name").fill("chaitanya", { timeout: 5000, retries: 2 });
  } catch (error) {
    console.error("Failed to enter first name:", error);
    throw new Error("Failed to enter first name.");
  }

  // Enter the last name as Kompella in the last name field with id 'last-name'.
  try {
    await page.locator("#last-name").fill("Kompella", { timeout: 5000, retries: 2 });
  } catch (error) {
    console.error("Failed to enter last name:", error);
    throw new Error("Failed to enter last name.");
  }

  // Enter the postal code as 62567352 in postal code field with id 'postal-code'.
  try {
    await page.locator("#postal-code").fill("62567352", { timeout: 5000, retries: 2 });
  } catch (error) {
    console.error("Failed to enter postal code:", error);
    throw new Error("Failed to enter postal code.");
  }

  // Click on continue button with id 'continue'.
  try {
    await page.locator("#continue").click({ timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("Continue button click failed:", error);
    throw new Error("Continue button click failed.");
  }

  // Click on finish button with id 'finish'.
  try {
    await page.locator("#finish").click({ timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("Finish button click failed:", error);
    throw new Error("Finish button click failed.");
  }

  // You should see a message “Thank you for your order!”.
  try {
    await page.locator("text=Thank you for your order!").waitFor({ timeout: 5000, retries: 2 });
  } catch (error) {
    console.error("Confirmation message not found:", error);
    throw new Error("Confirmation message not found.");
  }

  // Then click on back to home button with id 'back-to-products'.
  try {
    await page.locator("#back-to-products").click({ timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("Back to home button click failed:", error);
    throw new Error("Back to home button click failed.");
  }

  // Click on the burger bar with id 'react-burger-menu-btn'.
  try {
    await page.locator("#react-burger-menu-btn").click({ timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("Burger menu button click failed:", error);
    throw new Error("Burger menu button click failed.");
  }

  // Click on logout with id 'logout_sidebar_link'.
  try {
    await page.locator("#logout_sidebar_link").click({ timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("Logout button click failed:", error);
    throw new Error("Logout button click failed.");
  }

  // Keep the browser open after the test execution is complete.
  await browser.close();
});
