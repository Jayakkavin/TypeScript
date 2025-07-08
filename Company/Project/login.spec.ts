import { test, expect } from "@playwright/test";

test("Saucedemo Workflow", async ({ page }) => {
  // Step 1: Navigate to saucedemo
  const navigateSelector = "https://www.saucedemo.com/";
  const navigateWaitTimeoutMs = 10000;
  const navigateRetry = 3;
  const navigateErrorMessage = "Navigation to saucedemo failed after multiple retries.";

  for (let i = 0; i <= navigateRetry; i++) {
    try {
      await page.goto(navigateSelector, { waitUntil: 'networkidle' , timeout: navigateWaitTimeoutMs});
      break;
    } catch (error) {
      if (i === navigateRetry) {
        console.error(navigateErrorMessage, error);
        throw new Error(navigateErrorMessage);
      }
      console.log(`Navigation attempt ${i + 1} failed, retrying...`);
    }
  }

  // Step 2: Type username
  const usernameSelector = "#user-name";
  const usernameValue = "standard_user";
  const usernameWaitTimeoutMs = 5000;
  const usernameRetry = 2;
  const usernameErrorMessage = "Failed to type username after multiple retries.";

  for (let i = 0; i <= usernameRetry; i++) {
    try {
      await page.locator(usernameSelector).waitFor({ timeout: usernameWaitTimeoutMs });
      await page.locator(usernameSelector).fill(usernameValue, { timeout: usernameWaitTimeoutMs });
      break;
    } catch (error) {
      if (i === usernameRetry) {
        console.error(usernameErrorMessage, error);
        throw new Error(usernameErrorMessage);
      }
      console.log(`Type username attempt ${i + 1} failed, retrying...`);
    }
  }

  // Step 3: Type password
  const passwordSelector = "#password";
  const passwordValue = "secret_sauce";
  const passwordWaitTimeoutMs = 5000;
  const passwordRetry = 2;
  const passwordErrorMessage = "Failed to type password after multiple retries.";

  for (let i = 0; i <= passwordRetry; i++) {
    try {
      await page.locator(passwordSelector).waitFor({ timeout: passwordWaitTimeoutMs });
      await page.locator(passwordSelector).fill(passwordValue, { timeout: passwordWaitTimeoutMs });
      break;
    } catch (error) {
      if (i === passwordRetry) {
        console.error(passwordErrorMessage, error);
        throw new Error(passwordErrorMessage);
      }
      console.log(`Type password attempt ${i + 1} failed, retrying...`);
    }
  }

  // Step 4: Click login button
  const loginButtonSelector = "#login-button";
  const loginButtonWaitTimeoutMs = 7000;
  const loginButtonRetry = 3;
  const loginButtonErrorMessage = "Login button click failed after multiple retries.";

  for (let i = 0; i <= loginButtonRetry; i++) {
    try {
      await page.locator(loginButtonSelector).waitFor({ timeout: loginButtonWaitTimeoutMs });
      await page.locator(loginButtonSelector).click({ timeout: loginButtonWaitTimeoutMs });
      break;
    } catch (error) {
      if (i === loginButtonRetry) {
        console.error(loginButtonErrorMessage, error);
        throw new Error(loginButtonErrorMessage);
      }
      console.log(`Login button click attempt ${i + 1} failed, retrying...`);
    }
  }

  // Step 5: Click product sort dropdown
  const productSortDropdownSelector = ".product_sort_container";
  const productSortDropdownWaitTimeoutMs = 5000;
  const productSortDropdownRetry = 2;
  const productSortDropdownErrorMessage = "Product sort dropdown click failed after multiple retries.";

  for (let i = 0; i <= productSortDropdownRetry; i++) {
    try {
      await page.locator(productSortDropdownSelector).waitFor({ timeout: productSortDropdownWaitTimeoutMs });
      await page.locator(productSortDropdownSelector).click({ timeout: productSortDropdownWaitTimeoutMs });
      break;
    } catch (error) {
      if (i === productSortDropdownRetry) {
        console.error(productSortDropdownErrorMessage, error);
        throw new Error(productSortDropdownErrorMessage);
      }
      console.log(`Product sort dropdown click attempt ${i + 1} failed, retrying...`);
    }
  }

  // Step 6: Click Name (Z to A) option
  const nameZToAOptionSelector = "option[value='za']";
  const nameZToAOptionWaitTimeoutMs = 5000;
  const nameZToAOptionRetry = 2;
  const nameZToAOptionErrorMessage = "Name (Z to A) option click failed after multiple retries.";

  for (let i = 0; i <= nameZToAOptionRetry; i++) {
    try {
      await page.locator(nameZToAOptionSelector).waitFor({ timeout: nameZToAOptionWaitTimeoutMs });
      await page.locator(nameZToAOptionSelector).click({ timeout: nameZToAOptionWaitTimeoutMs });
      break;
    } catch (error) {
      if (i === nameZToAOptionRetry) {
        console.error(nameZToAOptionErrorMessage, error);
        throw new Error(nameZToAOptionErrorMessage);
      }
      console.log(`Name (Z to A) option click attempt ${i + 1} failed, retrying...`);
    }
  }

  // Step 7: Click Add to cart button
  const addToCartButtonSelector = "#add-to-cart-sauce-labs-backpack";
  const addToCartButtonWaitTimeoutMs = 7000;
  const addToCartButtonRetry = 3;
  const addToCartButtonErrorMessage = "Add to cart button click failed after multiple retries.";

  for (let i = 0; i <= addToCartButtonRetry; i++) {
    try {
      await page.locator(addToCartButtonSelector).waitFor({ timeout: addToCartButtonWaitTimeoutMs });
      await page.locator(addToCartButtonSelector).click({ timeout: addToCartButtonWaitTimeoutMs });
      break;
    } catch (error) {
      if (i === addToCartButtonRetry) {
        console.error(addToCartButtonErrorMessage, error);
        throw new Error(addToCartButtonErrorMessage);
      }
      console.log(`Add to cart button click attempt ${i + 1} failed, retrying...`);
    }
  }

  // Step 8: Click shopping cart icon
  const shoppingCartIconSelector = ".shopping_cart_link";
  const shoppingCartIconWaitTimeoutMs = 7000;
  const shoppingCartIconRetry = 3;
  const shoppingCartIconErrorMessage = "Shopping cart icon click failed after multiple retries.";

  for (let i = 0; i <= shoppingCartIconRetry; i++) {
    try {
      await page.locator(shoppingCartIconSelector).waitFor({ timeout: shoppingCartIconWaitTimeoutMs });
      await page.locator(shoppingCartIconSelector).click({ timeout: shoppingCartIconWaitTimeoutMs });
      break;
    } catch (error) {
      if (i === shoppingCartIconRetry) {
        console.error(shoppingCartIconErrorMessage, error);
        throw new Error(shoppingCartIconErrorMessage);
      }
      console.log(`Shopping cart icon click attempt ${i + 1} failed, retrying...`);
    }
  }

  // Step 9: Wait for product in cart
  const cartItemSelector = ".cart_item";
  const cartItemWaitTimeoutMs = 7000;
  const cartItemRetry = 3;
  const cartItemErrorMessage = "Product not found in cart after multiple retries.";

  for (let i = 0; i <= cartItemRetry; i++) {
    try {
      await page.locator(cartItemSelector).waitFor({ timeout: cartItemWaitTimeoutMs });
      break;
    } catch (error) {
      if (i === cartItemRetry) {
        console.error(cartItemErrorMessage, error);
        throw new Error(cartItemErrorMessage);
      }
      console.log(`Wait for product in cart attempt ${i + 1} failed, retrying...`);
    }
  }

  // Step 10: Click checkout button
  const checkoutButtonSelector = "#checkout";
  const checkoutButtonWaitTimeoutMs = 7000;
  const checkoutButtonRetry = 3;
  const checkoutButtonErrorMessage = "Checkout button click failed after multiple retries.";

  for (let i = 0; i <= checkoutButtonRetry; i++) {
    try {
      await page.locator(checkoutButtonSelector).waitFor({ timeout: checkoutButtonWaitTimeoutMs });
      await page.locator(checkoutButtonSelector).click({ timeout: checkoutButtonWaitTimeoutMs });
      break;
    } catch (error) {
      if (i === checkoutButtonRetry) {
        console.error(checkoutButtonErrorMessage, error);
        throw new Error(checkoutButtonErrorMessage);
      }
      console.log(`Checkout button click attempt ${i + 1} failed, retrying...`);
    }
  }

  // Step 11: Type first name
  const firstNameSelector = "#first-name";
  const firstNameValue = "chaitanya";
  const firstNameWaitTimeoutMs = 5000;
  const firstNameRetry = 2;
  const firstNameErrorMessage = "Failed to type first name after multiple retries.";

  for (let i = 0; i <= firstNameRetry; i++) {
    try {
      await page.locator(firstNameSelector).waitFor({ timeout: firstNameWaitTimeoutMs });
      await page.locator(firstNameSelector).fill(firstNameValue, { timeout: firstNameWaitTimeoutMs });
      break;
    } catch (error) {
      if (i === firstNameRetry) {
        console.error(firstNameErrorMessage, error);
        throw new Error(firstNameErrorMessage);
      }
      console.log(`Type first name attempt ${i + 1} failed, retrying...`);
    }
  }

  // Step 12: Type last name
  const lastNameSelector = "#last-name";
  const lastNameValue = "Kompella";
  const lastNameWaitTimeoutMs = 5000;
  const lastNameRetry = 2;
  const lastNameErrorMessage = "Failed to type last name after multiple retries.";

  for (let i = 0; i <= lastNameRetry; i++) {
    try {
      await page.locator(lastNameSelector).waitFor({ timeout: lastNameWaitTimeoutMs });
      await page.locator(lastNameSelector).fill(lastNameValue, { timeout: lastNameWaitTimeoutMs });
      break;
    } catch (error) {
      if (i === lastNameRetry) {
        console.error(lastNameErrorMessage, error);
        throw new Error(lastNameErrorMessage);
      }
      console.log(`Type last name attempt ${i + 1} failed, retrying...`);
    }
  }

  // Step 13: Type postal code
  const postalCodeSelector = "#postal-code";
  const postalCodeValue = "62567352";
  const postalCodeWaitTimeoutMs = 5000;
  const postalCodeRetry = 2;
  const postalCodeErrorMessage = "Failed to type postal code after multiple retries.";

  for (let i = 0; i <= postalCodeRetry; i++) {
    try {
      await page.locator(postalCodeSelector).waitFor({ timeout: postalCodeWaitTimeoutMs });
      await page.locator(postalCodeSelector).fill(postalCodeValue, { timeout: postalCodeWaitTimeoutMs });
      break;
    } catch (error) {
      if (i === postalCodeRetry) {
        console.error(postalCodeErrorMessage, error);
        throw new Error(postalCodeErrorMessage);
      }
      console.log(`Type postal code attempt ${i + 1} failed, retrying...`);
    }
  }

  // Step 14: Click continue button
  const continueButtonSelector = "#continue";
  const continueButtonWaitTimeoutMs = 7000;
  const continueButtonRetry = 3;
  const continueButtonErrorMessage = "Continue button click failed after multiple retries.";

  for (let i = 0; i <= continueButtonRetry; i++) {
    try {
      await page.locator(continueButtonSelector).waitFor({ timeout: continueButtonWaitTimeoutMs });
      await page.locator(continueButtonSelector).click({ timeout: continueButtonWaitTimeoutMs });
      break;
    } catch (error) {
      if (i === continueButtonRetry) {
        console.error(continueButtonErrorMessage, error);
        throw new Error(continueButtonErrorMessage);
      }
      console.log(`Continue button click attempt ${i + 1} failed, retrying...`);
    }
  }

  // Step 15: Click finish button
  const finishButtonSelector = "#finish";
  const finishButtonWaitTimeoutMs = 7000;
  const finishButtonRetry = 3;
  const finishButtonErrorMessage = "Finish button click failed after multiple retries.";

  for (let i = 0; i <= finishButtonRetry; i++) {
    try {
      await page.locator(finishButtonSelector).waitFor({ timeout: finishButtonWaitTimeoutMs });
      await page.locator(finishButtonSelector).click({ timeout: finishButtonWaitTimeoutMs });
      break;
    } catch (error) {
      if (i === finishButtonRetry) {
        console.error(finishButtonErrorMessage, error);
        throw new Error(finishButtonErrorMessage);
      }
      console.log(`Finish button click attempt ${i + 1} failed, retrying...`);
    }
  }

    // Step 16: Wait for Thank you message
  const completeHeaderSelector = ".complete-header";
  const completeHeaderValue = "Thank you for your order!";
  const completeHeaderWaitTimeoutMs = 7000;
  const completeHeaderRetry = 3;
  const completeHeaderErrorMessage = "Thank you message is not displayed";

  for (let i = 0; i <= completeHeaderRetry; i++) {
    try {
      await page.locator(completeHeaderSelector).waitFor({ timeout: completeHeaderWaitTimeoutMs });
      await expect(page.locator(completeHeaderSelector)).toContainText(completeHeaderValue);
      break;
    } catch (error) {
      if (i === completeHeaderRetry) {
        console.error(completeHeaderErrorMessage, error);
        throw new Error(completeHeaderErrorMessage);
      }
      console.log(`Wait for Thank you message attempt ${i + 1} failed, retrying...`);
    }
  }

  // Step 17: Click back to products button
  const backToProductsButtonSelector = "#back-to-products";
  const backToProductsButtonWaitTimeoutMs = 7000;
  const backToProductsButtonRetry = 3;
  const backToProductsButtonErrorMessage = "Back to home button click failed after multiple retries.";

  for (let i = 0; i <= backToProductsButtonRetry; i++) {
    try {
      await page.locator(backToProductsButtonSelector).waitFor({ timeout: backToProductsButtonWaitTimeoutMs });
      await page.locator(backToProductsButtonSelector).click({ timeout: backToProductsButtonWaitTimeoutMs });
      break;
    } catch (error) {
      if (i === backToProductsButtonRetry) {
        console.error(backToProductsButtonErrorMessage, error);
        throw new Error(backToProductsButtonErrorMessage);
      }
      console.log(`Back to home button click attempt ${i + 1} failed, retrying...`);
    }
  }

  // Step 18: Click burger bar
  const burgerBarSelector = "#react-burger-menu-btn";
  const burgerBarWaitTimeoutMs = 7000;
  const burgerBarRetry = 3;
  const burgerBarErrorMessage = "Burger bar click failed after multiple retries.";

  for (let i = 0; i <= burgerBarRetry; i++) {
    try {
      await page.locator(burgerBarSelector).waitFor({ timeout: burgerBarWaitTimeoutMs });
      await page.locator(burgerBarSelector).click({ timeout: burgerBarWaitTimeoutMs });
      break;
    } catch (error) {
      if (i === burgerBarRetry) {
        console.error(burgerBarErrorMessage, error);
        throw new Error(burgerBarErrorMessage);
      }
      console.log(`Burger bar click attempt ${i + 1} failed, retrying...`);
    }
  }

  // Step 19: Click logout
  const logoutSelector = "#logout_sidebar_link";
  const logoutWaitTimeoutMs = 7000;
  const logoutRetry = 3;
  const logoutErrorMessage = "Logout click failed after multiple retries.";

  for (let i = 0; i <= logoutRetry; i++) {
    try {
      await page.locator(logoutSelector).waitFor({ timeout: logoutWaitTimeoutMs });
      await page.locator(logoutSelector).click({ timeout: logoutWaitTimeoutMs });
      break;
    } catch (error) {
      if (i === logoutRetry) {
        console.error(logoutErrorMessage, error);
        throw new Error(logoutErrorMessage);
      }
      console.log(`Logout click attempt ${i + 1} failed, retrying...`);
    }
  }

  // Step 20: Pause to keep browser open.
  await page.pause();
});
