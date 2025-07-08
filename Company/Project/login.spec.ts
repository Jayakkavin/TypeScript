import { test, expect, chromium } from "@playwright/test";

test("Saucedemo Test", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // 1. Navigate to https://www.saucedemo.com/
  try {
    await page.goto("https://www.saucedemo.com/", { waitUntil: 'networkidle' });
  } catch (error) {
    console.error("Failed to navigate to https://www.saucedemo.com/:", error);
    throw new Error("Failed to navigate to https://www.saucedemo.com/");
  }

  // 2. Enter "standard_user" in the username field.
  try {
    await page.locator('[data-test="username"]').fill('standard_user', { timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("Failed to enter username:", error);
    throw new Error("Failed to enter username");
  }

  // 3. Enter "secret_sauce" in the password field.
  try {
    await page.locator('[data-test="password"]').fill('secret_sauce', { timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("Failed to enter password:", error);
    throw new Error("Failed to enter password");
  }

  // 4. Click the Login button.
  try {
    await page.locator('[data-test="login-button"]').click({ timeout: 5000, retries: 3 });
    await page.waitForLoadState('networkidle');
  } catch (error) {
    console.error("Failed to click login button:", error);
    throw new Error("Failed to click login button");
  }

  // 5. Click on the product sort filter dropdown
  try {
    await page.locator('.product_sort_container').click({ timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("Failed to click product sort filter dropdown:", error);
    throw new Error("Failed to click product sort filter dropdown");
  }

  // 6. Click on Name (Z to A) option
  try {
    await page.locator('option[value="za"]').click({ timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("Failed to click Name (Z to A) option:", error);
    throw new Error("Failed to click Name (Z to A) option");
  }

  // 7. Locate the product "Sauce Labs Backpack" and click the Add to Cart button.
  try {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click({ timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("Failed to click Add to Cart button for Sauce Labs Backpack:", error);
    throw new Error("Failed to click Add to Cart button for Sauce Labs Backpack");
  }

  // 8. Click on the cart icon to verify that the product has been added.
  try {
    await page.locator('[data-test="shopping-cart-link"]').click({ timeout: 5000, retries: 3 });
    await page.waitForLoadState('networkidle');
  } catch (error) {
    console.error("Failed to click the cart icon:", error);
    throw new Error("Failed to click the cart icon");
  }

  // 9. Ensure that the product is present in the cart.
  try {
    await page.locator('.cart_item').waitFor({ timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("Product is not present in the cart:", error);
    throw new Error("Product is not present in the cart");
  }

  // 10. Then click on the checkout button
  try {
    await page.locator('[data-test="checkout"]').click({ timeout: 5000, retries: 3 });
    await page.waitForLoadState('networkidle');
  } catch (error) {
    console.error("Failed to click the checkout button:", error);
    throw new Error("Failed to click the checkout button");
  }

  // 11. Enter the first name as chaitanya in the first name field
  try {
    await page.locator('[data-test="firstName"]').fill('chaitanya', { timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("Failed to enter the first name:", error);
    throw new Error("Failed to enter the first name");
  }

  // 12. Enter the last name as Kompella in the last name field
  try {
    await page.locator('[data-test="lastName"]').fill('Kompella', { timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("Failed to enter the last name:", error);
    throw new Error("Failed to enter the last name");
  }

  // 13. Enter the postal code as 62567352 in postal code field
  try {
    await page.locator('[data-test="postalCode"]').fill('62567352', { timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("Failed to enter the postal code:", error);
    throw new Error("Failed to enter the postal code");
  }

  // 14. Click on continue button
  try {
    await page.locator('[data-test="continue"]').click({ timeout: 5000, retries: 3 });
    await page.waitForLoadState('networkidle');
  } catch (error) {
    console.error("Failed to click the continue button:", error);
    throw new Error("Failed to click the continue button");
  }

  // 15. Click on finish button
  try {
    await page.locator('[data-test="finish"]').click({ timeout: 5000, retries: 3 });
    await page.waitForLoadState('networkidle');
  } catch (error) {
    console.error("Failed to click the finish button:", error);
    throw new Error("Failed to click the finish button");
  }

  // 16. You should see a message “Thank you for your order!”
  try {
    await page.locator('text="Thank you for your order!"').waitFor({ timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("The 'Thank you for your order!' message is not displayed:", error);
    throw new Error("The 'Thank you for your order!' message is not displayed");
  }

  // 17. Then click on back to home button
  try {
    await page.locator('[data-test="back-to-products"]').click({ timeout: 5000, retries: 3 });
    await page.waitForLoadState('networkidle');
  } catch (error) {
    console.error("Failed to click the back to home button:", error);
    throw new Error("Failed to click the back to home button");
  }

  // 18. Click to burger bar
  try {
    await page.locator('#react-burger-menu-btn').click({ timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("Failed to click the burger bar:", error);
    throw new Error("Failed to click the burger bar");
  }

  // 19. Click on logout
  try {
    await page.locator('#logout_sidebar_link').click({ timeout: 5000, retries: 3 });
    await page.waitForLoadState('networkidle');
  } catch (error) {
    console.error("Failed to click the logout button:", error);
    throw new Error("Failed to click the logout button");
  }

  // 20. Keep the browser open after the test execution is complete.
  await page.pause();

  await browser.close();
});
