import { test, expect, chromium } from "@playwright/test";

test("Generated Test", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Step 1: Navigate to https://www.saucedemo.com/.
  try {
    await page.goto("https://www.saucedemo.com/", { waitUntil: 'networkidle' , timeout: 10000 });
  } catch (error) {
    console.error("Navigation to saucedemo failed.");
    throw error;
  }

  // Step 2: Enter "standard_user" in the username field with id 'user-name'.
  const usernameSelectors = ['[data-test="username"]', '#user-name'];
  let usernameFilled = false;
  for (let i = 0; i < usernameSelectors.length; i++) {
    const selector = usernameSelectors[i];
    try {
      await page.locator(selector).fill("standard_user", { timeout: 5000, retries: 2 });
      usernameFilled = true;
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} to fill username with selector ${selector} failed: ${error}`);
    }
  }
  if (!usernameFilled) {
    console.error("Could not enter username.");
    throw new Error("Could not enter username.");
  }

  // Step 3: Enter "secret_sauce" in the password field with id 'password'.
  const passwordSelectors = ['[data-test="password"]', '#password'];
  let passwordFilled = false;
  for (let i = 0; i < passwordSelectors.length; i++) {
    const selector = passwordSelectors[i];
    try {
      await page.locator(selector).fill("secret_sauce", { timeout: 5000, retries: 2 });
      passwordFilled = true;
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} to fill password with selector ${selector} failed: ${error}`);
    }
  }
  if (!passwordFilled) {
    console.error("Could not enter password.");
    throw new Error("Could not enter password.");
  }

  // Step 4: Click the Login button with id 'login-button'.
  const loginButtonSelectors = ['[data-test="login-button"]', '#login-button'];
  let loginButtonClicked = false;
  for (let i = 0; i < loginButtonSelectors.length; i++) {
    const selector = loginButtonSelectors[i];
    try {
      await page.locator(selector).click({ timeout: 5000, retries: 3 });
      loginButtonClicked = true;
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} to click login button with selector ${selector} failed: ${error}`);
    }
  }
  if (!loginButtonClicked) {
    console.error("Could not click login button.");
    throw new Error("Could not click login button.");
  }

  // Step 5: Wait for 3 seconds.
  await page.waitForTimeout(3000);

  // Step 6: Click on the product sort filter dropdown.
  try {
    await page.locator('[data-test="product_sort_container"]').click({ timeout: 5000, retries: 2 });
  } catch (error) {
    console.error("Could not click product sort filter dropdown.");
    throw new Error("Could not click product sort filter dropdown.");
  }

  // Step 7: Click on Name (Z to A) option.
  try {
    await page.locator('option[value="za"]').click({ timeout: 5000, retries: 2 });
  } catch (error) {
    console.error("Could not click Name (Z to A) option.");
    throw new Error("Could not click Name (Z to A) option.");
  }

  // Step 8: Wait for 3 seconds.
  await page.waitForTimeout(3000);

  // Step 9: Locate the product "Sauce Labs Backpack" and click the Add to Cart button with id 'add-to-cart-sauce-labs-backpack'.
  const addToCartSelectors = ['[data-test="add-to-cart-sauce-labs-backpack"]', '#add-to-cart-sauce-labs-backpack'];
  let addToCartClicked = false;
  for (let i = 0; i < addToCartSelectors.length; i++) {
    const selector = addToCartSelectors[i];
    try {
      await page.locator(selector).click({ timeout: 5000, retries: 3 });
      addToCartClicked = true;
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} to click Add to Cart button with selector ${selector} failed: ${error}`);
    }
  }
  if (!addToCartClicked) {
    console.error("Could not click Add to Cart button for Sauce Labs Backpack.");
    throw new Error("Could not click Add to Cart button for Sauce Labs Backpack.");
  }

  // Step 10: Click on the cart icon with class 'shopping_cart_link'.
  const cartIconSelectors = ['[data-test="shopping-cart-link"]', '.shopping_cart_link'];
  let cartIconClicked = false;
  for (let i = 0; i < cartIconSelectors.length; i++) {
    const selector = cartIconSelectors[i];
    try {
      await page.locator(selector).click({ timeout: 5000, retries: 3 });
      cartIconClicked = true;
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} to click cart icon with selector ${selector} failed: ${error}`);
    }
  }
  if (!cartIconClicked) {
    console.error("Could not click cart icon.");
    throw new Error("Could not click cart icon.");
  }

  // Step 11: Wait for 3 seconds.
  await page.waitForTimeout(3000);

  // Step 12: Ensure that the product "Sauce Labs Backpack" is present in the cart.
  try {
    await page.locator("//div[@class='cart_item_label']//div[@class='inventory_item_name' and text()='Sauce Labs Backpack']").waitFor({ timeout: 5000, retries: 2, state: 'visible' });
  } catch (error) {
    console.error("Sauce Labs Backpack is not present in the cart.");
    throw new Error("Sauce Labs Backpack is not present in the cart.");
  }

  // Step 13: Wait for 3 seconds.
  await page.waitForTimeout(3000);

  // Step 14: Then click on the checkout button with id 'checkout'.
  const checkoutSelectors = ['[data-test="checkout"]', '#checkout'];
  let checkoutClicked = false;
  for (let i = 0; i < checkoutSelectors.length; i++) {
    const selector = checkoutSelectors[i];
    try {
      await page.locator(selector).click({ timeout: 5000, retries: 3 });
      checkoutClicked = true;
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} to click checkout button with selector ${selector} failed: ${error}`);
    }
  }
  if (!checkoutClicked) {
    console.error("Could not click checkout button.");
    throw new Error("Could not click checkout button.");
  }

  // Step 15: Wait for 3 seconds.
  await page.waitForTimeout(3000);

  // Step 16: Enter the first name as chaitanya in the first name field with id 'first-name'.
  const firstNameSelectors = ['[data-test="firstName"]', '#first-name'];
  let firstNameFilled = false;
  for (let i = 0; i < firstNameSelectors.length; i++) {
    const selector = firstNameSelectors[i];
    try {
      await page.locator(selector).fill("chaitanya", { timeout: 5000, retries: 2 });
      firstNameFilled = true;
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} to fill first name with selector ${selector} failed: ${error}`);
    }
  }
  if (!firstNameFilled) {
    console.error("Could not enter first name.");
    throw new Error("Could not enter first name.");
  }

  // Step 17: Enter the last name as Kompella in the last name field with id 'last-name'.
  const lastNameSelectors = ['[data-test="lastName"]', '#last-name'];
  let lastNameFilled = false;
  for (let i = 0; i < lastNameSelectors.length; i++) {
    const selector = lastNameSelectors[i];
    try {
      await page.locator(selector).fill("Kompella", { timeout: 5000, retries: 2 });
      lastNameFilled = true;
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} to fill last name with selector ${selector} failed: ${error}`);
    }
  }
  if (!lastNameFilled) {
    console.error("Could not enter last name.");
    throw new Error("Could not enter last name.");
  }

  // Step 18: Enter the postal code as 62567352 in postal code field with id 'postal-code'.
  const postalCodeSelectors = ['[data-test="postalCode"]', '#postal-code'];
  let postalCodeFilled = false;
  for (let i = 0; i < postalCodeSelectors.length; i++) {
    const selector = postalCodeSelectors[i];
    try {
      await page.locator(selector).fill("62567352", { timeout: 5000, retries: 2 });
      postalCodeFilled = true;
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} to fill postal code with selector ${selector} failed: ${error}`);
    }
  }
  if (!postalCodeFilled) {
    console.error("Could not enter postal code.");
    throw new Error("Could not enter postal code.");
  }

  // Step 19: Wait for 3 seconds.
  await page.waitForTimeout(3000);

  // Step 20: Click on continue button with id 'continue'.
  const continueSelectors = ['[data-test="continue"]', '#continue'];
  let continueClicked = false;
  for (let i = 0; i < continueSelectors.length; i++) {
    const selector = continueSelectors[i];
    try {
      await page.locator(selector).click({ timeout: 5000, retries: 3 });
      continueClicked = true;
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} to click continue button with selector ${selector} failed: ${error}`);
    }
  }
  if (!continueClicked) {
    console.error("Could not click continue button.");
    throw new Error("Could not click continue button.");
  }

  // Step 21: Wait for 3 seconds.
  await page.waitForTimeout(3000);

  // Step 22: Click on finish button with id 'finish'.
  const finishSelectors = ['[data-test="finish"]', '#finish'];
  let finishClicked = false;
  for (let i = 0; i < finishSelectors.length; i++) {
    const selector = finishSelectors[i];
    try {
      await page.locator(selector).click({ timeout: 5000, retries: 3 });
      finishClicked = true;
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} to click finish button with selector ${selector} failed: ${error}`);
    }
  }
  if (!finishClicked) {
    console.error("Could not click finish button.");
    throw new Error("Could not click finish button.");
  }

  // Step 23: You should see a message “Thank you for your order!”
  try {
    await page.locator("//h2[text()='Thank you for your order!']").waitFor({ timeout: 5000, retries: 2, state: 'visible' });
  } catch (error) {
    console.error("Thank you message is not displayed.");
    throw new Error("Thank you message is not displayed.");
  }

  // Step 24: Wait for 3 seconds.
  await page.waitForTimeout(3000);

  // Step 25: Then click on back to home button with id 'back-to-products'.
  const backToProductsSelectors = ['[data-test="back-to-products"]', '#back-to-products'];
  let backToProductsClicked = false;
  for (let i = 0; i < backToProductsSelectors.length; i++) {
    const selector = backToProductsSelectors[i];
    try {
      await page.locator(selector).click({ timeout: 5000, retries: 3 });
      backToProductsClicked = true;
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} to click back to home button with selector ${selector} failed: ${error}`);
    }
  }
  if (!backToProductsClicked) {
    console.error("Could not click back to home button.");
    throw new Error("Could not click back to home button.");
  }

  // Step 26: Wait for 3 seconds.
  await page.waitForTimeout(3000);

  // Step 27: Click on the burger bar.
  try {
    await page.locator("#react-burger-menu-btn").click({ timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("Could not click burger bar.");
    throw new Error("Could not click burger bar.");
  }

  // Step 28: Wait for 3 seconds.
  await page.waitForTimeout(3000);

  // Step 29: Click on logout.
  try {
    await page.locator("#logout_sidebar_link").click({ timeout: 5000, retries: 3 });
  } catch (error) {
    console.error("Could not click logout.");
    throw new Error("Could not click logout.");
  }

  // Step 30: Keep the browser open after the test execution is complete.
  // No action needed, browser.close() is not called.
});
