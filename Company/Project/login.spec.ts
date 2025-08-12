import { test, expect, chromium, Browser, Page, BrowserContext } from "@playwright/test";

test.setTimeout(12000); // Extend timeout to 2 minutes

test("Generated Playwright Test", async () => {
  const testData = {
    "steps": [
      {
        "action": "goto",
        "selector": null,
        "value": "https://demowebshop.tricentis.com",
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["waitForLoadState"],
        "errorMessage": "Failed to navigate to demowebshop",
        "stepDescription": "Navigate to the demo webshop homepage"
      },
      {
        "action": "click",
        "selector": "a.ico-login",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView"],
        "errorMessage": "Failed to click on the login link",
        "stepDescription": "Click on Log in link in the header"
      },
      {
        "action": "fill",
        "selector": "#Email",
        "value": "snaptest@yopmail.com",
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": [],
        "errorMessage": "Failed to enter email",
        "stepDescription": "Enter snaptest@yopmail.com in the Email field"
      },
      {
        "action": "fill",
        "selector": "#Password",
        "value": "snaptest@123",
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": [],
        "errorMessage": "Failed to enter password",
        "stepDescription": "Enter snaptest@123 in the Password field"
      },
      {
        "action": "click",
        "selector": "input.button-1.login-button",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": [],
        "errorMessage": "Failed to click login button",
        "stepDescription": "Click on Log in button"
      },
      {
        "action": "isVisible",
        "selector": "a.account",
        "value": "snaptest@yopmail.com",
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView"],
        "errorMessage": "Logged in email not visible",
        "stepDescription": "Verify that snaptest@yopmail.com is displayed in the header"
      },
      {
        "action": "click",
        "selector": "ul.top-menu > li > a[href='/books']",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": [],
        "errorMessage": "Failed to click on Books menu",
        "stepDescription": "Click on Books in the top menu"
      },
      {
        "action": "click",
        "selector": "div.item-box a[href*='/']",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": [],
        "errorMessage": "Failed to click on the first product link",
        "stepDescription": "Click on the first product link on the page"
      },
      {
        "action": "click",
        "selector": "input.button-1.add-to-cart-button",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": [],
        "errorMessage": "Failed to click on Add to cart button",
        "stepDescription": "Click on Add to cart button"
      },
      {
        "action": "click",
        "selector": "#topcartlink a.ico-cart",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView"],
        "errorMessage": "Failed to click on Shopping cart link",
        "stepDescription": "Click on Shopping cart link in the header"
      },
      {
        "action": "isVisible",
        "selector": "div.cart-item-row",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": [],
        "errorMessage": "Product not present in the shopping cart",
        "stepDescription": "Verify that the product is present in the shopping cart"
      },
      {
        "action": "check",
        "selector": "#termsofservice",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView"],
        "errorMessage": "Failed to check the terms of service checkbox",
        "stepDescription": "Click the Terms of service checkbox"
      },
      {
        "action": "click",
        "selector": "#checkout",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView"],
        "errorMessage": "Failed to click on the checkout button",
        "stepDescription": "Click on Checkout button"
      },
      {
        "action": "click",
        "selector": "div#billing-buttons-container input.button-1",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": [],
        "errorMessage": "Failed to click continue on billing address",
        "stepDescription": "Click on Continue button in the billing address section"
      },
      {
        "action": "isVisible",
        "selector": "#shipping-address-block",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": [],
        "errorMessage": "Shipping address section is not displayed",
        "stepDescription": "Verify that the shipping address section is displayed"
      },
      {
        "action": "click",
        "selector": "div#shipping-buttons-container input.button-1",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": [],
        "errorMessage": "Failed to click continue on shipping address",
        "stepDescription": "Click on Continue button in the shipping address section"
      },
      {
        "action": "isVisible",
        "selector": "#shipping-method-block",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": [],
        "errorMessage": "Shipping method section is not displayed",
        "stepDescription": "Verify that the Shipping method section is displayed"
      },
      {
        "action": "click",
        "selector": "div#shipping-method-buttons-container input.button-1",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": [],
        "errorMessage": "Failed to click continue on shipping method",
        "stepDescription": "Click on Continue button in the Shipping method section"
      },
      {
        "action": "isVisible",
        "selector": "input#paymentmethod_0[checked='checked']",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": [],
        "errorMessage": "Cash On Delivery is not selected by default",
        "stepDescription": "Verify that Cash On Delivery is selected by default in the payment method section"
      },
      {
        "action": "click",
        "selector": "div#payment-method-buttons-container input.button-1",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": [],
        "errorMessage": "Failed to click continue on payment method",
        "stepDescription": "Click on Continue button in the Payment method section"
      },
      {
        "action": "isVisible",
        "selector": "div#payment-info-block",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": [],
        "errorMessage": "Payment information section is not displayed",
        "stepDescription": "Verify that the selected payment method is displayed in the Payment information section"
      },
      {
        "action": "click",
        "selector": "div#payment-info-buttons-container input.button-1",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": [],
        "errorMessage": "Failed to click continue on payment info",
        "stepDescription": "Click on Continue button in the Payment information section"
      },
      {
        "action": "click",
        "selector": "input.button-1.confirm-order-button",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": [],
        "errorMessage": "Failed to click confirm on confirm order",
        "stepDescription": "On the confirm order section, click on Confirm button"
      },
      {
        "action": "isVisible",
        "selector": "div.section.order-completed div.title strong",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": [],
        "errorMessage": "Order number is not displayed",
        "stepDescription": "Verify that the order number is shown on the order confirmation page"
      }
    ]
  };

  const userTestSteps: string[] = testData.steps.map(step => step.stepDescription);
  const executedSteps: string[] = [];
  const executionResults: any[] = [];
  let passedCount = 0;
  let failedCount = 0;
  let totalDuration = 0;

  if (!testData || !testData.steps || testData.steps.length === 0) {
    return {
      "user_test_steps": [],
      "executed_test_steps": [],
      "execution_results": [],
      "summary": {
        "total_steps": 0,
        "passed": 0,
        "failed": 0,
        "duration_ms": 0
      }
    };
  }

  let browser: Browser | null = null;
  let page: Page | null = null;
  let context: BrowserContext | null = null;

  try {
    browser = await chromium.launch({
      headless: false,
      slowMo: 1000,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-web-security',
        '--disable-features=VizDisplayCompositor'
      ]
    });
    context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
    page = await context.newPage();

    for (const step of testData.steps) {
      const startTime = performance.now();
      let status = "passed";
      let details = "";
      let error = null;

      try {
        switch (step.action) {
          case "goto":
            await page.goto(step.value, { waitUntil: 'domcontentloaded', timeout: step.waitTimeoutMs });
            details = `Navigated to ${step.value}`;
            break;
          case "click":
            await page.locator(step.selector).click({ timeout: step.waitTimeoutMs });
            details = `Clicked ${step.selector}`;
            break;
          case "fill":
            await page.locator(step.selector).fill(step.value, { timeout: step.waitTimeoutMs });
            details = `Filled ${step.selector}`;
            break;
          case "check":
            await page.locator(step.selector).check({ timeout: step.waitTimeoutMs });
            details = `Checked ${step.selector}`;
            break;
          case "uncheck":
            await page.locator(step.selector).uncheck({ timeout: step.waitTimeoutMs });
            details = `Unchecked ${step.selector}`;
            break;
          case "hover":
            await page.locator(step.selector).hover({ timeout: step.waitTimeoutMs });
            details = `Hovered ${step.selector}`;
            break;
          case "waitFor":
            await page.locator(step.selector).waitFor({ timeout: step.waitTimeoutMs });
            details = `Waited for ${step.selector}`;
            break;
          case "isVisible":
            const isVisible = await page.locator(step.selector).isVisible({ timeout: step.waitTimeoutMs });
            details = `Element ${step.selector} is ${isVisible ? "visible" : "not visible"}`;
            if (!isVisible) {
              throw new Error(`Element ${step.selector} is not visible`);
            }
            break;
          default:
            throw new Error(`Unknown action: ${step.action}`);
        }
        passedCount++;
      } catch (e: any) {
        status = "error";
        error = e.message;
        failedCount++;
      }

      const endTime = performance.now();
      const durationMs = endTime - startTime;
      totalDuration += durationMs;

      executedSteps.push(step.stepDescription);
      executionResults.push({
        step: step.stepDescription,
        status: status,
        details: details,
        error: error,
        timestamp: new Date().toISOString(),
        duration_ms: durationMs
      });

      if (status === "error") {
        break; // Stop execution on error
      }
    }
  } catch (e: any) {
    // Handle any errors during browser launch or context creation
    executedSteps.push("Setup failed");
    executionResults.push({
      step: "Setup",
      status: "error",
      details: "Browser setup failed",
      error: e.message,
      timestamp: new Date().toISOString(),
      duration_ms: 0
    });
    failedCount++;
  } finally {
    if (browser) {
      try {
        await browser.close();
      } catch (e) {
        console.error("Error closing browser:", e);
      }
    }

    const summary = {
      total_steps: userTestSteps.length,
      passed: passedCount,
      failed: failedCount,
      duration_ms: totalDuration
    };

    return {
      "user_test_steps": userTestSteps,
      "executed_test_steps": executedSteps,
      "execution_results": executionResults,
      "summary": summary
    };
  }
});
