import { test, expect, chromium } from "@playwright/test";

test("Demowebshop purchase flow", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Helper function to handle actions with retries and fallbacks
  async function performAction(action: string, selector: string, value: string | null, waitTimeoutMs: number, retry: number, fallbacks: string[], errorMessage: string) {
    for (let i = 0; i <= retry; i++) {
      try {
        switch (action) {
          case "navigate":
            await page.goto(selector, { waitUntil: 'networkidle' });
            break;
          case "click":
            if (fallbacks.includes("scrollIntoView")) {
              await page.locator(selector).scrollIntoViewIfNeeded();
            }
            await page.locator(selector).click({ timeout: waitTimeoutMs });
            break;
          case "fill":
            await page.locator(selector).fill(value!, { timeout: waitTimeoutMs });
            break;
          case "check":
            await page.locator(selector).check({ timeout: waitTimeoutMs });
            break;
          case "waitForSelector":
            await page.locator(selector).waitFor({ timeout: waitTimeoutMs });
            break;
          default:
            throw new Error(`Unknown action: ${action}`);
        }
        return; // Success, exit the retry loop
      } catch (error) {
        console.error(`Attempt ${i + 1} failed for action ${action} on selector ${selector}: ${error}`);
        if (i === retry) {
          console.error(`All retries failed: ${errorMessage}`);
          throw new Error(errorMessage); // Fail the test if all retries fail
        }
        // Wait before retrying (optional)
        await page.waitForTimeout(500);
      }
    }
  }

  try {
    // Test steps
    await performAction(
      "navigate",
      "https://demowebshop.tricentis.com",
      null,
      5000,
      3,
      [],
      "Failed to navigate to https://demowebshop.tricentis.com after multiple retries."
    );

    await performAction(
      "click",
      "a.ico-login",
      null,
      5000,
      3,
      ["scrollIntoView"],
      "Failed to click the login link after multiple retries. Ensure the link is visible and enabled."
    );

    await performAction(
      "fill",
      "input#Email",
      "snaptest@yopmail.com",
      5000,
      3,
      [],
      "Failed to fill the email input field after multiple retries. Ensure the input field is present and enabled."
    );

    await performAction(
      "fill",
      "input#Password",
      "snaptest@123",
      5000,
      3,
      [],
      "Failed to fill the password input field after multiple retries. Ensure the input field is present and enabled."
    );

    await performAction(
      "click",
      "input[value='Log in']",
      null,
      5000,
      3,
      ["scrollIntoView"],
      "Failed to click the login button after multiple retries. Ensure the button is visible and enabled."
    );

    await performAction(
        "waitForSelector",
        "a.account",
        null,
        10000,
        3,
        [],
        "The logged-in email ID did not appear in the header after login within the specified timeout."
    );

    await performAction(
      "click",
      "ul.top-menu > li > a[href='/books']",
      null,
      5000,
      3,
      ["scrollIntoView"],
      "Failed to click the Books link after multiple retries. Ensure the link is visible and enabled."
    );

    await performAction(
      "click",
      "div.product-grid > div.item-box > div.product-item > div.picture > a",
      null,
      5000,
      3,
      ["scrollIntoView"],
      "Failed to click a product link after multiple retries. Ensure the link is visible and enabled."
    );

    await performAction(
      "click",
      "input[value='Add to cart']",
      null,
      5000,
      3,
      ["scrollIntoView"],
      "Failed to click the Add to cart button after multiple retries. Ensure the button is visible and enabled."
    );

    await performAction(
      "click",
      "span.cart-label",
      null,
      5000,
      3,
      ["scrollIntoView"],
      "Failed to click the Shopping cart link after multiple retries. Ensure the link is visible and enabled."
    );

    await performAction(
        "waitForSelector",
        "div.cart-item-row",
        null,
        10000,
        3,
        [],
        "The product did not appear in the shopping cart within the specified timeout."
    );

    await performAction(
      "check",
      "input#termsofservice",
      null,
      5000,
      3,
      [],
      "Failed to check the Terms of service checkbox after multiple retries. Ensure the checkbox is present and enabled."
    );

    await performAction(
      "click",
      "button#checkout",
      null,
      5000,
      3,
      ["scrollIntoView"],
      "Failed to click the Checkout button after multiple retries. Ensure the button is visible and enabled."
    );

    await performAction(
      "click",
      "input[value='Continue']",
      null,
      5000,
      3,
      ["scrollIntoView"],
      "Failed to click the Continue button on the billing address section after multiple retries. Ensure the button is visible and enabled."
    );

    await performAction(
        "waitForSelector",
        "div.shipping-address-page",
        null,
        10000,
        3,
        [],
        "The shipping address section did not appear within the specified timeout."
    );

    await performAction(
      "click",
      "input[value='Continue']",
      null,
      5000,
      3,
      ["scrollIntoView"],
      "Failed to click the Continue button on the shipping address section after multiple retries. Ensure the button is visible and enabled."
    );

    await performAction(
        "waitForSelector",
        "div.shipping-method-page",
        null,
        10000,
        3,
        [],
        "The shipping method section did not appear within the specified timeout."
    );

    await performAction(
      "click",
      "input[value='Continue']",
      null,
      5000,
      3,
      ["scrollIntoView"],
      "Failed to click the Continue button on the shipping method section after multiple retries. Ensure the button is visible and enabled."
    );

    await performAction(
      "check",
      "input#paymentmethod_0",
      null,
      5000,
      3,
      [],
      "Cash On Delivery was not selected by default."
    );

    await performAction(
      "click",
      "input[value='Continue']",
      null,
      5000,
      3,
      ["scrollIntoView"],
      "Failed to click the Continue button on the payment method section after multiple retries. Ensure the button is visible and enabled."
    );

    await performAction(
        "waitForSelector",
        "div.payment-info-page",
        null,
        10000,
        3,
        [],
        "The payment information section did not appear within the specified timeout."
    );

    await performAction(
      "click",
      "input[value='Continue']",
      null,
      5000,
      3,
      ["scrollIntoView"],
      "Failed to click the Continue button on the payment information section after multiple retries. Ensure the button is visible and enabled."
    );

    await performAction(
      "click",
      "input[value='Confirm']",
      null,
      5000,
      3,
      ["scrollIntoView"],
      "Failed to click the Confirm button on the confirm order section after multiple retries. Ensure the button is visible and enabled."
    );

    await performAction(
        "waitForSelector",
        "div.order-completed",
        null,
        10000,
        3,
        [],
        "The order completion message did not appear within the specified timeout."
    );

  } finally {
    await browser.close();
  }
});
