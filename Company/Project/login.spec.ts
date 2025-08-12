import { test, expect, chromium, Browser, Page, BrowserContext } from "@playwright/test";

test.setTimeout(12000); // Extend test timeout for the entire test

test("Demowebshop Test", async () => {
  const steps = [
    {
      "action": "goto",
      "selector": "https://demowebshop.tricentis.com",
      "value": null,
      "waitTimeout": 10000,
      "retries": 3,
      "fallbackStrategies": [],
      "errorMessage": "Navigation to demowebshop failed after multiple retries.",
      "stepDescription": "Navigate to https://demowebshop.tricentis.com"
    },
    {
      "action": "click",
      "selector": ".ico-login",
      "value": null,
      "waitTimeout": 5000,
      "retries": 2,
      "fallbackStrategies": [],
      "errorMessage": "Failed to click on the Log in link in the header.",
      "stepDescription": "Click on Log in link in the header"
    },
    {
      "action": "fill",
      "selector": "#Email",
      "value": "snaptest@yopmail.com",
      "waitTimeout": 5000,
      "retries": 2,
      "fallbackStrategies": [],
      "errorMessage": "Failed to enter email in the Email field.",
      "stepDescription": "Enter snaptest@yopmail.com in the Email field"
    },
    {
      "action": "fill",
      "selector": "#Password",
      "value": "snaptest@123",
      "waitTimeout": 5000,
      "retries": 2,
      "fallbackStrategies": [],
      "errorMessage": "Failed to enter password in the Password field.",
      "stepDescription": "Enter snaptest@123 in the Password field"
    },
    {
      "action": "click",
      "selector": ".button-1.login-button",
      "value": null,
      "waitTimeout": 5000,
      "retries": 2,
      "fallbackStrategies": [],
      "errorMessage": "Failed to click on the Log in button.",
      "stepDescription": "Click on Log in button"
    },
    {
      "action": "isVisible",
      "selector": ".account",
      "value": "snaptest@yopmail.com",
      "waitTimeout": 5000,
      "retries": 3,
      "fallbackStrategies": [],
      "errorMessage": "Verification failed: snaptest@yopmail.com is not displayed in the header.",
      "stepDescription": "Verify that snaptest@yopmail.com is displayed in the header"
    },
    {
      "action": "click",
      "selector": "//ul[@class='top-menu notmobile']//a[contains(text(),'Books')]",
      "value": null,
      "waitTimeout": 5000,
      "retries": 2,
      "fallbackStrategies": [],
      "errorMessage": "Failed to click on Books in the top menu.",
      "stepDescription": "Click on Books in the top menu"
    },
    {
      "action": "click",
      "selector": "text='Computing and Internet'",
      "value": null,
      "waitTimeout": 5000,
      "retries": 2,
      "fallbackStrategies": [],
      "errorMessage": "Failed to click on the first product link on the page.",
      "stepDescription": "Click on the first product link on the page"
    },
    {
      "action": "click",
      "selector": "#add-to-cart-button-13",
      "value": null,
      "waitTimeout": 5000,
      "retries": 2,
      "fallbackStrategies": [],
      "errorMessage": "Failed to click on Add to cart button.",
      "stepDescription": "Click on Add to cart button"
    },
    {
      "action": "click",
      "selector": ".ico-cart",
      "value": null,
      "waitTimeout": 5000,
      "retries": 2,
      "fallbackStrategies": [],
      "errorMessage": "Failed to click on Shopping cart link in the header.",
      "stepDescription": "Click on Shopping cart link in the header"
    },
    {
      "action": "isVisible",
      "selector": ".product-name",
      "value": null,
      "waitTimeout": 5000,
      "retries": 3,
      "fallbackStrategies": [],
      "errorMessage": "Verification failed: The product is not present in the shopping cart.",
      "stepDescription": "Verify that the product is present in the shopping cart"
    },
    {
      "action": "check",
      "selector": "#termsofservice",
      "value": null,
      "waitTimeout": 5000,
      "retries": 2,
      "fallbackStrategies": [],
      "errorMessage": "Failed to check the Terms of service checkbox.",
      "stepDescription": "Click the Terms of service checkbox"
    },
    {
      "action": "click",
      "selector": "#checkout",
      "value": null,
      "waitTimeout": 5000,
      "retries": 2,
      "fallbackStrategies": [],
      "errorMessage": "Failed to click on Checkout button.",
      "stepDescription": "Click on Checkout button"
    },
    {
      "action": "click",
      "selector": ".button-1.new-address-next-step-button",
      "value": null,
      "waitTimeout": 5000,
      "retries": 2,
      "fallbackStrategies": [],
      "errorMessage": "Failed to click on Continue button in the Billing address section.",
      "stepDescription": "Click on Continue button in the Billing address section"
    },
    {
      "action": "isVisible",
      "selector": "#shipping-buttons-container",
      "value": null,
      "waitTimeout": 5000,
      "retries": 3,
      "fallbackStrategies": [],
      "errorMessage": "Verification failed: The Shipping address section is not displayed.",
      "stepDescription": "Verify that the Shipping address section is displayed"
    },
    {
      "action": "click",
      "selector": ".button-1.new-address-next-step-button",
      "value": null,
      "waitTimeout": 5000,
      "retries": 2,
      "fallbackStrategies": [],
      "errorMessage": "Failed to click on Continue button in the Shipping address section.",
      "stepDescription": "Click on Continue button in the Shipping address section"
    },
    {
      "action": "isVisible",
      "selector": "#shipping-method-buttons-container",
      "value": null,
      "waitTimeout": 5000,
      "retries": 3,
      "fallbackStrategies": [],
      "errorMessage": "Verification failed: The Shipping method section is not displayed.",
      "stepDescription": "Verify that the Shipping method section is displayed"
    },
    {
      "action": "click",
      "selector": ".button-1.shipping-method-next-step-button",
      "value": null,
      "waitTimeout": 5000,
      "retries": 2,
      "fallbackStrategies": [],
      "errorMessage": "Failed to click on Continue button in the Shipping method section.",
      "stepDescription": "Click on Continue button in the Shipping method section"
    },
    {
      "action": "isVisible",
      "selector": ".payment-method-options",
      "value": null,
      "waitTimeout": 5000,
      "retries": 3,
      "fallbackStrategies": [],
      "errorMessage": "Verification failed: Cash On Delivery is not selected by default in the Payment method section.",
      "stepDescription": "Verify that Cash On Delivery is selected by default in the Payment method section"
    },
    {
      "action": "click",
      "selector": ".button-1.payment-method-next-step-button",
      "value": null,
      "waitTimeout": 5000,
      "retries": 2,
      "fallbackStrategies": [],
      "errorMessage": "Failed to click on Continue button in the Payment method section.",
      "stepDescription": "Click on Continue button in the Payment method section"
    },
    {
      "action": "isVisible",
      "selector": ".payment-info-display",
      "value": null,
      "waitTimeout": 5000,
      "retries": 3,
      "fallbackStrategies": [],
      "errorMessage": "Verification failed: The selected payment method is not displayed in the Payment information section.",
      "stepDescription": "Verify that the selected payment method is displayed in the Payment information section"
    },
    {
      "action": "click",
      "selector": ".button-1.payment-info-next-step-button",
      "value": null,
      "waitTimeout": 5000,
      "retries": 2,
      "fallbackStrategies": [],
      "errorMessage": "Failed to click on Continue button in the Payment information section.",
      "stepDescription": "Click on Continue button in the Payment information section"
    },
    {
      "action": "click",
      "selector": ".button-1.confirm-order-next-step-button",
      "value": null,
      "waitTimeout": 5000,
      "retries": 2,
      "fallbackStrategies": [],
      "errorMessage": "Failed to click on Confirm button in the Confirm order section.",
      "stepDescription": "Click on Confirm button in the Confirm order section"
    },
    {
      "action": "isVisible",
      "selector": ".order-completed .order-number",
      "value": null,
      "waitTimeout": 10000,
      "retries": 3,
      "fallbackStrategies": [],
      "errorMessage": "Verification failed: The order number is not shown on the order confirmation page.",
      "stepDescription": "Verify that the order number is shown on the order confirmation page"
    }
  ];

  let browser: Browser | undefined;
  let context: BrowserContext | undefined;
  let page: Page | undefined;

  const userTestSteps: string[] = steps.map(step => step.stepDescription);
  const executedSteps: string[] = [];
  const executionResults: any[] = [];
  let failureOccurred = false;
  let startTimeTotal = performance.now();

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
    page.setDefaultTimeout(30000);

    for (const step of steps) {
      const startTime = performance.now();
      try {
        executedSteps.push(step.stepDescription);
        switch (step.action) {
          case "goto":
            await page.goto(step.selector, { waitUntil: 'domcontentloaded', timeout: step.waitTimeout });
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Navigated to ${step.selector}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case "click":
            await page.locator(step.selector).click({ timeout: step.waitTimeout });
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Clicked ${step.selector}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case "fill":
            await page.locator(step.selector).fill(step.value, { timeout: step.waitTimeout });
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Filled ${step.selector}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case "check":
            await page.locator(step.selector).check({ timeout: step.waitTimeout });
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Checked ${step.selector}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case "uncheck":
            await page.locator(step.selector).uncheck({ timeout: step.waitTimeout });
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Unchecked ${step.selector}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case "hover":
            await page.locator(step.selector).hover({ timeout: step.waitTimeout });
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Hovered ${step.selector}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case "waitFor":
            await page.locator(step.selector).waitFor({ timeout: step.waitTimeout });
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Waited for ${step.selector}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case "isVisible":
            const isVisible = await page.locator(step.selector).isVisible({ timeout: step.waitTimeout });
            const visibilityText = isVisible ? "is visible" : "is not visible";
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Element ${step.selector} ${visibilityText}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          default:
            throw new Error(`Unknown action: ${step.action}`);
        }
      } catch (error: any) {
        executedSteps.push(step.stepDescription);
        executionResults.push({
          step: step.stepDescription,
          status: 'error',
          details: `Error: ${error.message}`,
          timestamp: Date.now(),
          duration_ms: performance.now() - startTime
        });
        failureOccurred = true;
        break; // Stop executing further steps
      }
    }
  } catch (topLevelError: any) {
    // Catch any errors during browser launch or context/page creation
    executionResults.push({
      step: 'Setup',
      status: 'error',
      details: `Setup error: ${topLevelError.message}`,
      timestamp: Date.now(),
      duration_ms: 0
    });
    failureOccurred = true;
  } finally {
    let totalSteps = steps.length;
    let passedSteps = executionResults.filter(result => result.status === 'success').length;
    let failedSteps = executionResults.filter(result => result.status === 'error').length;
    let totalDuration = performance.now() - startTimeTotal;

    if (browser) {
      try {
        if (page) {
          await page.close();
        }
        if (context) {
          await context.close();
        }
        await browser.close();
      } catch (e) {
        console.error("Error during browser cleanup:", e);
      }
    }

    const results = {
      "user_test_steps": userTestSteps,
      "executed_test_steps": executedSteps,
      "execution_results": executionResults,
      "summary": {
        "total_steps": totalSteps,
        "passed": passedSteps,
        "failed": failedSteps,
        "duration_ms": totalDuration
      }
    };
    return results;
  }
});
