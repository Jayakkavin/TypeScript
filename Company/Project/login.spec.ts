import { test, expect } from "@playwright/test";

test("SauceDemo Workflow", async ({ page }) => {
  // Step 1: Navigate to the Saucedemo website
  const gotoSelector = "https://www.saucedemo.com/";
  const gotoErrorMessage = "Failed to navigate to https://www.saucedemo.com/";
  for (let i = 0; i < 3; i++) {
    try {
      await page.goto(gotoSelector, { waitUntil: 'networkidle' , timeout: 5000});
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${gotoErrorMessage}`, error);
      if (i === 2) {
        throw new Error(gotoErrorMessage);
      }
    }
  }

  // Step 2: Fill username field
  const usernameSelector = "[data-test=\"username\"]";
  const usernameValue = "standard_user";
  const usernameErrorMessage = `Failed to fill username field with '${usernameValue}'`;
  for (let i = 0; i < 3; i++) {
    try {
      await page.locator(usernameSelector).waitFor({ timeout: 5000 });
      await page.locator(usernameSelector).fill(usernameValue, { timeout: 5000 });
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${usernameErrorMessage}`, error);
      if (i === 2) {
        throw new Error(usernameErrorMessage);
      }
    }
  }

  // Step 3: Fill password field
  const passwordSelector = "[data-test=\"password\"]";
  const passwordValue = "secret_sauce";
  const passwordErrorMessage = `Failed to fill password field with '${passwordValue}'`;
  for (let i = 0; i < 3; i++) {
    try {
      await page.locator(passwordSelector).waitFor({ timeout: 5000 });
      await page.locator(passwordSelector).fill(passwordValue, { timeout: 5000 });
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${passwordErrorMessage}`, error);
      if (i === 2) {
        throw new Error(passwordErrorMessage);
      }
    }
  }

  // Step 4: Click the Login button
  const loginButtonSelector = "[data-test=\"login-button\"]";
  const loginButtonErrorMessage = "Failed to click the Login button";
  for (let i = 0; i < 3; i++) {
    try {
      await page.locator(loginButtonSelector).waitFor({ timeout: 5000 });
      await page.locator(loginButtonSelector).click({ timeout: 5000 });
      await page.waitForLoadState('networkidle');
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${loginButtonErrorMessage}`, error);
      if (i === 2) {
        throw new Error(loginButtonErrorMessage);
      }
    }
  }

  // Step 5: Click the Add to Cart button for 'Sauce Labs Backpack'
  const addToCartSelector = "[data-test=\"add-to-cart-sauce-labs-backpack\"]";
  const addToCartErrorMessage = "Failed to click the Add to Cart button for 'Sauce Labs Backpack'";
  for (let i = 0; i < 3; i++) {
    try {
      await page.locator(addToCartSelector).waitFor({ timeout: 5000 });
      await page.locator(addToCartSelector).click({ timeout: 5000 });
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${addToCartErrorMessage}`, error);
      if (i === 2) {
        throw new Error(addToCartErrorMessage);
      }
    }
  }

  // Step 6: Click the cart icon
  const cartIconSelector = "[data-test=\"shopping-cart-link\"]";
  const cartIconErrorMessage = "Failed to click the cart icon";
  for (let i = 0; i < 3; i++) {
    try {
      await page.locator(cartIconSelector).waitFor({ timeout: 5000 });
      await page.locator(cartIconSelector).click({ timeout: 5000 });
      await page.waitForLoadState('networkidle');
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${cartIconErrorMessage}`, error);
      if (i === 2) {
        throw new Error(cartIconErrorMessage);
      }
    }
  }

  // Step 7: Verify product is visible in the cart
  const cartItemSelector = ".cart_item";
  const cartItemErrorMessage = "Product is not visible in the cart";
  for (let i = 0; i < 3; i++) {
    try {
      await page.locator(cartItemSelector).waitFor({ timeout: 5000 });
      await expect(page.locator(cartItemSelector)).toBeVisible({ timeout: 5000 });
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${cartItemErrorMessage}`, error);
      if (i === 2) {
        throw new Error(cartItemErrorMessage);
      }
    }
  }

  // Step 8: Verify product name contains 'Sauce Labs Backpack'
  const productNameSelector = "[data-test=\"inventory-item-name\"]";
  const productNameValue = "Sauce Labs Backpack";
  const productNameErrorMessage = `Product name does not contain '${productNameValue}'`;
  for (let i = 0; i < 3; i++) {
    try {
      await page.locator(productNameSelector).waitFor({ timeout: 5000 });
      await expect(page.locator(productNameSelector)).toContainText(productNameValue, { timeout: 5000 });
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${productNameErrorMessage}`, error);
      if (i === 2) {
        throw new Error(productNameErrorMessage);
      }
    }
  }

  // Step 9: Click the checkout button
  const checkoutButtonSelector = "[data-test=\"checkout\"]";
  const checkoutButtonErrorMessage = "Failed to click the checkout button";
  for (let i = 0; i < 3; i++) {
    try {
      await page.locator(checkoutButtonSelector).waitFor({ timeout: 5000 });
      await page.locator(checkoutButtonSelector).click({ timeout: 5000 });
      await page.waitForLoadState('networkidle');
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${checkoutButtonErrorMessage}`, error);
      if (i === 2) {
        throw new Error(checkoutButtonErrorMessage);
      }
    }
  }

  // Step 10: Fill first name field
  const firstNameSelector = "[data-test=\"firstName\"]";
  const firstNameValue = "chaitanya";
  const firstNameErrorMessage = `Failed to fill first name field with '${firstNameValue}'`;
  for (let i = 0; i < 3; i++) {
    try {
      await page.locator(firstNameSelector).waitFor({ timeout: 5000 });
      await page.locator(firstNameSelector).fill(firstNameValue, { timeout: 5000 });
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${firstNameErrorMessage}`, error);
      if (i === 2) {
        throw new Error(firstNameErrorMessage);
      }
    }
  }

  // Step 11: Fill last name field
  const lastNameSelector = "[data-test=\"lastName\"]";
  const lastNameValue = "Kompella";
  const lastNameErrorMessage = `Failed to fill last name field with '${lastNameValue}'`;
  for (let i = 0; i < 3; i++) {
    try {
      await page.locator(lastNameSelector).waitFor({ timeout: 5000 });
      await page.locator(lastNameSelector).fill(lastNameValue, { timeout: 5000 });
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${lastNameErrorMessage}`, error);
      if (i === 2) {
        throw new Error(lastNameErrorMessage);
      }
    }
  }

  // Step 12: Fill postal code field
  const postalCodeSelector = "[data-test=\"postalCode\"]";
  const postalCodeValue = "62567352";
  const postalCodeErrorMessage = `Failed to fill postal code field with '${postalCodeValue}'`;
  for (let i = 0; i < 3; i++) {
    try {
      await page.locator(postalCodeSelector).waitFor({ timeout: 5000 });
      await page.locator(postalCodeSelector).fill(postalCodeValue, { timeout: 5000 });
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${postalCodeErrorMessage}`, error);
      if (i === 2) {
        throw new Error(postalCodeErrorMessage);
      }
    }
  }

  // Step 13: Click the continue button
  const continueButtonSelector = "[data-test=\"continue\"]";
  const continueButtonErrorMessage = "Failed to click the continue button";
  for (let i = 0; i < 3; i++) {
    try {
      await page.locator(continueButtonSelector).waitFor({ timeout: 5000 });
      await page.locator(continueButtonSelector).click({ timeout: 5000 });
      await page.waitForLoadState('networkidle');
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${continueButtonErrorMessage}`, error);
      if (i === 2) {
        throw new Error(continueButtonErrorMessage);
      }
    }
  }

  // Step 14: Click the finish button
  const finishButtonSelector = "[data-test=\"finish\"]";
  const finishButtonErrorMessage = "Failed to click the finish button";
  for (let i = 0; i < 3; i++) {
    try {
      await page.locator(finishButtonSelector).waitFor({ timeout: 5000 });
      await page.locator(finishButtonSelector).click({ timeout: 5000 });
      await page.waitForLoadState('networkidle');
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${finishButtonErrorMessage}`, error);
      if (i === 2) {
        throw new Error(finishButtonErrorMessage);
      }
    }
  }

  // Step 15: Verify completion message contains 'Thank you for your order!'
  const completionMessageSelector = ".complete-header";
  const completionMessageValue = "Thank you for your order!";
  const completionMessageErrorMessage = `Completion message does not contain '${completionMessageValue}'`;
  for (let i = 0; i < 3; i++) {
    try {
      await page.locator(completionMessageSelector).waitFor({ timeout: 5000 });
      await expect(page.locator(completionMessageSelector)).toContainText(completionMessageValue, { timeout: 5000 });
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${completionMessageErrorMessage}`, error);
      if (i === 2) {
        throw new Error(completionMessageErrorMessage);
      }
    }
  }

  // Step 16: Click the back to home button
  const backToHomeButtonSelector = "[data-test=\"back-to-products\"]";
  const backToHomeButtonErrorMessage = "Failed to click the back to home button";
  for (let i = 0; i < 3; i++) {
    try {
      await page.locator(backToHomeButtonSelector).waitFor({ timeout: 5000 });
      await page.locator(backToHomeButtonSelector).click({ timeout: 5000 });
      await page.waitForLoadState('networkidle');
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${backToHomeButtonErrorMessage}`, error);
      if (i === 2) {
        throw new Error(backToHomeButtonErrorMessage);
      }
    }
  }

    // Step 17: Click the burger bar
    const burgerBarSelector = "#react-burger-menu-btn";
    const burgerBarErrorMessage = "Failed to click the burger bar";
    for (let i = 0; i < 3; i++) {
      try {
        await page.locator(burgerBarSelector).waitFor({ timeout: 5000 });
        await page.locator(burgerBarSelector).click({ timeout: 5000 });
        break;
      } catch (error) {
        console.error(`Attempt ${i + 1} failed: ${burgerBarErrorMessage}`, error);
        if (i === 2) {
          throw new Error(burgerBarErrorMessage);
        }
      }
    }

  // Step 18: Click the logout button
  const logoutButtonSelector = "#logout_sidebar_link";
  const logoutButtonErrorMessage = "Failed to click the logout button";
  for (let i = 0; i < 3; i++) {
    try {
      await page.locator(logoutButtonSelector).waitFor({ timeout: 5000 });
      await page.locator(logoutButtonSelector).click({ timeout: 5000 });
      await page.waitForLoadState('networkidle');
      break;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${logoutButtonErrorMessage}`, error);
      if (i === 2) {
        throw new Error(logoutButtonErrorMessage);
      }
    }
  }
});
