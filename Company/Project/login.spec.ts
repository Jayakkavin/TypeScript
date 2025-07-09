import { test, expect, chromium } from "@playwright/test";

test("Demowebshop E2E Test", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  const steps = [
    {
      action: "navigate",
      selector: "https://demowebshop.tricentis.com",
      value: null,
      waitTimeoutMs: 10000,
      retry: 3,
      fallbacks: ["waitForLoadState"],
      errorMessage: "Failed to navigate to https://demowebshop.tricentis.com",
    },
    {
      action: "click",
      selector: 'a.ico-login[href="/login"]',
      value: null,
      waitTimeoutMs: 5000,
      retry: 3,
      fallbacks: [],
      errorMessage: "Failed to click the 'Log in' link",
    },
    {
      action: "fill",
      selector: "#Email",
      value: "snaptest@yopmail.com",
      waitTimeoutMs: 5000,
      retry: 3,
      fallbacks: [],
      errorMessage: "Failed to enter the email address",
    },
    {
      action: "fill",
      selector: "#Password",
      value: "snaptest@123",
      waitTimeoutMs: 5000,
      retry: 3,
      fallbacks: [],
      errorMessage: "Failed to enter the password",
    },
    {
      action: "click",
      selector: 'input.button-1.login-button[type="submit"]',
      value: 'Log in',
      waitTimeoutMs: 5000,
      retry: 3,
      fallbacks: [],
      errorMessage: "Failed to click the 'Log in' button",
    },
    {
      action: "assert",
      selector: "a.account",
      value: "snaptest@yopmail.com",
      waitTimeoutMs: 10000,
      retry: 3,
      fallbacks: [],
      errorMessage: "Failed to validate that the logged-in email is displayed",
    },
    {
      action: "click",
      selector: '.top-menu li a[href="/books"]',
      value: null,
      waitTimeoutMs: 5000,
      retry: 3,
      fallbacks: [],
      errorMessage: "Failed to click the 'Books' menu",
    },
    {
      action: "click",
      selector: 'div.product-item a[href="/computing-and-internet"]',
      value: null,
      waitTimeoutMs: 5000,
      retry: 3,
      fallbacks: [],
      errorMessage: "Failed to click on Computing and Internet link",
    },
    {
      action: "click",
      selector: "#add-to-cart-button-45",
      value: null,
      waitTimeoutMs: 10000,
      retry: 3,
      fallbacks: [],
      errorMessage: "Failed to click the 'Add to cart' button",
    },
    {
      action: "click",
      selector: "a.ico-cart",
      value: null,
      waitTimeoutMs: 5000,
      retry: 3,
      fallbacks: [],
      errorMessage: "Failed to click the 'Shopping cart' link",
    },
    {
      action: "assert",
      selector: 'a[href="/computing-and-internet"]',
      value: null,
      waitTimeoutMs: 10000,
      retry: 3,
      fallbacks: [],
      errorMessage: "Failed to find 'Computing and Internet' in the cart",
    },
    {
      action: "click",
      selector: "#termsofservice",
      value: null,
      waitTimeoutMs: 5000,
      retry: 3,
      fallbacks: [],
      errorMessage: "Failed to click the 'Terms of service' checkbox",
    },
    {
      action: "click",
      selector: "#checkout.button-1.checkout-button",
      value: null,
      waitTimeoutMs: 5000,
      retry: 3,
      fallbacks: [],
      errorMessage: "Failed to click the 'Checkout' button",
    },
    {
      action: "click",
      selector: 'button[name="billingaddress.nextstep"]',
      value: null,
      waitTimeoutMs: 10000,
      retry: 3,
      fallbacks: [],
      errorMessage:
        "Failed to click the 'Continue' button on the billing address section",
    },
    {
      action: "assert",
      selector: "#shipping-address-block",
      value: null,
      waitTimeoutMs: 10000,
      retry: 3,
      fallbacks: [],
      errorMessage: "Shipping address section is not displayed",
    },
    {
      action: "click",
      selector: 'button[name="shippingaddress.nextstep"]',
      value: null,
      waitTimeoutMs: 10000,
      retry: 3,
      fallbacks: [],
      errorMessage:
        "Failed to click the 'Continue' button in the shipping address section",
    },
    {
      action: "assert",
      selector: "#shipping-method-block",
      value: null,
      waitTimeoutMs: 10000,
      retry: 3,
      fallbacks: [],
      errorMessage: "Shipping method section is not displayed",
    },
    {
      action: "click",
      selector: 'button[name="shippingmethod.nextstep"]',
      value: null,
      waitTimeoutMs: 10000,
      retry: 3,
      fallbacks: [],
      errorMessage:
        "Failed to click the 'Continue' button in the shipping method section",
    },
    {
      action: "assert",
      selector: "#paymentmethod_0",
      value: null,
      waitTimeoutMs: 5000,
      retry: 3,
      fallbacks: [],
      errorMessage: "'By Cash On Delivery' is not selected by default",
    },
    {
      action: "click",
      selector: 'button[name="paymentmethod.nextstep"]',
      value: null,
      waitTimeoutMs: 5000,
      retry: 3,
      fallbacks: [],
      errorMessage:
        "Failed to click the 'Continue' button in the payment method section",
    },
    {
      action: "assert",
      selector: ".payment-method-name",
      value: "Cash On Delivery",
      waitTimeoutMs: 10000,
      retry: 3,
      fallbacks: [],
      errorMessage: "The selected payment method is not 'Cash On Delivery'",
    },
    {
      action: "click",
      selector: 'button[name="paymentinfo.nextstep"]',
      value: null,
      waitTimeoutMs: 5000,
      retry: 3,
      fallbacks: [],
      errorMessage:
        "Failed to click the 'Continue' button in the payment information section",
    },
    {
      action: "click",
      selector: ".button-1.confirm-order-button",
      value: null,
      waitTimeoutMs: 5000,
      retry: 3,
      fallbacks: [],
      errorMessage:
        "Failed to click the 'Confirm' button on the confirm order section",
    },
    {
      action: "assert",
      selector: "div.order-number",
      value: null,
      waitTimeoutMs: 10000,
      retry: 3,
      fallbacks: [],
      errorMessage: "Order number is not displayed",
    },
  ];

  for (const step of steps) {
    try {
      await test.step(step.errorMessage, async () => {
        for (let i = 0; i <= step.retry; i++) {
          try {
            if (step.action === "navigate") {
              await page.goto(step.selector, {
                waitUntil: "networkidle",
                timeout: step.waitTimeoutMs,
              });
              break;
            } else if (step.action === "click") {
              await page.locator(step.selector).click({ timeout: step.waitTimeoutMs });
              break;
            } else if (step.action === "fill") {
              await page.locator(step.selector).fill(step.value, { timeout: step.waitTimeoutMs });
              break;
            } else if (step.action === "check") {
              await page.locator(step.selector).check({ timeout: step.waitTimeoutMs });
              break;
            } else if (step.action === "assert") {
              if (step.value) {
                await expect(page.locator(step.selector)).toContainText(step.value, { timeout: step.waitTimeoutMs });
              } else {
                await expect(page.locator(step.selector)).toBeVisible({ timeout: step.waitTimeoutMs });
              }
              break;
            }
          } catch (error) {
            if (i === step.retry) {
              console.error(
                `Failed after ${step.retry + 1} attempts: ${step.errorMessage}`
              );
              throw error;
            }
            console.log(`Attempt ${i + 1} failed. Retrying...`);
            await page.waitForTimeout(1000); // Wait before retrying
          }
        }
      });
    } catch (error) {
      console.error(`Test failed: ${error}`);
      throw error; // Exit with a clear error
    }
  }

  await browser.close();
});
