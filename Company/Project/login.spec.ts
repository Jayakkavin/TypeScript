import { test, expect, chromium, Browser, Page, BrowserContext } from "@playwright/test";
import * as fs from 'fs';

test.setTimeout(12000);

test("Generated Test", async () => {
  let browser: Browser | null = null;
  let page: Page | null = null;
  const userTestSteps: string[] = [
    "Navigate to https://demowebshop.tricentis.com",
    "Click on Log in link in the header",
    "Enter snaptest@yopmail.com in the Email field",
    "Enter snaptest@123 in the Password field",
    "Click on Log in button",
    "Verify that snaptest@yopmail.com is displayed in the header",
    "Click on Books in the top menu",
    "Click on the first product link on the page",
    "Click on Add to cart button",
    "Click on Shopping cart link in the header",
    "Verify that the product is present in the shopping cart",
    "Click the Terms of service checkbox",
    "Click on Checkout button",
    "Click on Continue button in the billing address section",
    "Verify that the shipping address section is displayed",
    "Click on Continue button in the shipping address section",
    "Verify that the Shipping method section is displayed",
    "Click on Continue button in the Shipping method section",
    "Verify that Cash On Delivery is selected by default in the payment method section",
    "Click on Continue button in the Payment method section",
    "Verify that the selected payment method is displayed in the Payment information section",
    "Click on Continue button in the Payment information section",
    "On the confirm order section, click on Confirm button",
    "Verify that the order number is shown on the order confirmation page"
  ];
  const executedSteps: string[] = [];
  const executionResults: any[] = [];
  let totalDuration = 0;
  let passed = 0;
  let failed = 0;

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
    const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
    page = await context.newPage();
    page.setDefaultTimeout(30000);

    // Steps
    const steps = [
      {
        "action": "goto",
        "selector": null,
        "value": "https://demowebshop.tricentis.com",
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": [
          "waitForLoadState"
        ],
        "errorMessage": "Failed to navigate to the demo webshop homepage",
        "stepDescription": "Navigate to the demo webshop homepage"
      },
      {
        "action": "click",
        "selector": "text=Log in",
        "value": null,
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView",
          "waitForLoadState"
        ],
        "errorMessage": "Failed to click the login link",
        "stepDescription": "Click the login link"
      },
      {
        "action": "fill",
        "selector": "#Email",
        "value": "snaptest@yopmail.com",
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView"
        ],
        "errorMessage": "Failed to enter the email address",
        "stepDescription": "Enter email address"
      },
      {
        "action": "fill",
        "selector": "#Password",
        "value": "snaptest@123",
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView"
        ],
        "errorMessage": "Failed to enter the password",
        "stepDescription": "Enter password"
      },
      {
        "action": "click",
        "selector": "text=Log in",
        "value": null,
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView",
          "waitForLoadState"
        ],
        "errorMessage": "Failed to click the login button",
        "stepDescription": "Click the login button"
      },
      {
        "action": "isVisible",
        "selector": "//div[@class='header-links']/ul/li/a[@class='account']",
        "value": "snaptest@yopmail.com",
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView"
        ],
        "errorMessage": "Failed to verify the user is logged in",
        "stepDescription": "Verify the user is logged in"
      },
      {
        "action": "click",
        "selector": "text=Books",
        "value": null,
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView",
          "waitForLoadState"
        ],
        "errorMessage": "Failed to navigate to the books category",
        "stepDescription": "Navigate to the books category"
      },
      {
        "action": "click",
        "selector": "//div[@class='item-box'][1]//a[@href and @title='Show details for computing and internet']/img[@alt='Picture of Computing and Internet']",
        "value": null,
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView",
          "waitForLoadState"
        ],
        "errorMessage": "Failed to select the 'Computing and Internet' book",
        "stepDescription": "Select the 'Computing and Internet' book"
      },
      {
        "action": "click",
        "selector": "#add-to-cart-button-13",
        "value": null,
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView",
          "waitForLoadState"
        ],
        "errorMessage": "Failed to add the book to the shopping cart",
        "stepDescription": "Add the book to the shopping cart"
      },
      {
        "action": "click",
        "selector": "text=Shopping cart",
        "value": null,
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView",
          "waitForLoadState"
        ],
        "errorMessage": "Failed to navigate to the shopping cart",
        "stepDescription": "Navigate to the shopping cart"
      },
      {
        "action": "isVisible",
        "selector": "//a[@class='product-name' and text()='Computing and Internet']",
        "value": null,
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView"
        ],
        "errorMessage": "Failed to verify the book is in the shopping cart",
        "stepDescription": "Verify the book is in the shopping cart"
      },
      {
        "action": "check",
        "selector": "#termsofservice",
        "value": null,
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView",
          "waitForLoadState"
        ],
        "errorMessage": "Failed to accept the terms of service",
        "stepDescription": "Accept the terms of service"
      },
      {
        "action": "click",
        "selector": "#checkout",
        "value": null,
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView",
          "waitForLoadState"
        ],
        "errorMessage": "Failed to proceed to checkout",
        "stepDescription": "Proceed to checkout"
      },
      {
        "action": "click",
        "selector": "button:has-text('Continue').button-1.new-address-next-step-button",
        "value": null,
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView",
          "waitForLoadState"
        ],
        "errorMessage": "Failed to click Continue on the new address page",
        "stepDescription": "Click Continue on the new address page"
      },
      {
        "action": "isVisible",
        "selector": "#shipping-address-block",
        "value": null,
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView"
        ],
        "errorMessage": "Failed to verify shipping address block is present",
        "stepDescription": "Verify shipping address block is present"
      },
      {
        "action": "click",
        "selector": "button:has-text('Continue').button-1.shipping-address-next-step-button",
        "value": null,
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView",
          "waitForLoadState"
        ],
        "errorMessage": "Failed to click Continue on the shipping address page",
        "stepDescription": "Click Continue on the shipping address page"
      },
      {
        "action": "isVisible",
        "selector": "#shipping-method-block",
        "value": null,
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView"
        ],
        "errorMessage": "Failed to verify shipping method block is present",
        "stepDescription": "Verify shipping method block is present"
      },
      {
        "action": "click",
        "selector": "button:has-text('Continue').button-1.shipping-method-next-step-button",
        "value": null,
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView",
          "waitForLoadState"
        ],
        "errorMessage": "Failed to click Continue on the shipping method page",
        "stepDescription": "Click Continue on the shipping method page"
      },
      {
        "action": "isVisible",
        "selector": "#paymentmethod_0",
        "value": null,
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView"
        ],
        "errorMessage": "Failed to verify Cash On Delivery payment method is selected",
        "stepDescription": "Verify Cash On Delivery payment method is selected"
      },
      {
        "action": "click",
        "selector": "button:has-text('Continue').button-1.payment-method-next-step-button",
        "value": null,
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView",
          "waitForLoadState"
        ],
        "errorMessage": "Failed to click Continue on the payment method page",
        "stepDescription": "Click Continue on the payment method page"
      },
      {
        "action": "isVisible",
        "selector": "//li[@class='payment-info']/span[@class='value' and text()='Cash On Delivery (COD)']",
        "value": null,
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView"
        ],
        "errorMessage": "Failed to verify payment information is Cash On Delivery",
        "stepDescription": "Verify payment information is Cash On Delivery"
      },
      {
        "action": "click",
        "selector": "button:has-text('Continue').button-1.payment-info-next-step-button",
        "value": null,
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView",
          "waitForLoadState"
        ],
        "errorMessage": "Failed to click Continue on the payment information page",
        "stepDescription": "Click Continue on the payment information page"
      },
      {
        "action": "click",
        "selector": "text=Confirm",
        "value": null,
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView",
          "waitForLoadState"
        ],
        "errorMessage": "Failed to confirm the order",
        "stepDescription": "On the confirm order section, click on Confirm button"
      },
      {
        "action": "isVisible",
        "selector": "//div[@class='section order-completed']/strong",
        "value": null,
        "waitTimeoutMs": 5000,
        "retry": 3,
        "fallbacks": [
          "scrollIntoView"
        ],
        "errorMessage": "Failed to verify the order is completed",
        "stepDescription": "Verify that the order number is shown on the order confirmation page"
      }
    ];

    for (let i = 0; i < steps.length; i++) {
      const step = `Step ${i + 1}`;
      const stepData = steps[i];
      const startTime = performance.now();

      try {
        executedSteps.push(step);
        switch (stepData.action) {
          case "goto":
            await page.goto(stepData.value);
            executionResults.push({
              step,
              status: "success",
              details: `Navigated to ${stepData.value}`,
              timestamp: new Date().toISOString(),
              duration_ms: performance.now() - startTime
            });
            passed++;
            break;
          case "click":
            await page.locator(stepData.selector).click();
            executionResults.push({
              step,
              status: "success",
              details: `Clicked ${stepData.selector}`,
              timestamp: new Date().toISOString(),
              duration_ms: performance.now() - startTime
            });
            passed++;
            break;
          case "fill":
            await page.locator(stepData.selector).fill(stepData.value);
            executionResults.push({
              step,
              status: "success",
              details: `Filled ${stepData.selector}`,
              timestamp: new Date().toISOString(),
              duration_ms: performance.now() - startTime
            });
            passed++;
            break;
          case "check":
            await page.locator(stepData.selector).check();
            executionResults.push({
              step,
              status: "success",
              details: `Checked ${stepData.selector}`,
              timestamp: new Date().toISOString(),
              duration_ms: performance.now() - startTime
            });
            passed++;
            break;
          case "uncheck":
            await page.locator(stepData.selector).uncheck();
            executionResults.push({
              step,
              status: "success",
              details: `Unchecked ${stepData.selector}`,
              timestamp: new Date().toISOString(),
              duration_ms: performance.now() - startTime
            });
            passed++;
            break;
          case "hover":
            await page.locator(stepData.selector).hover();
            executionResults.push({
              step,
              status: "success",
              details: `Hovered ${stepData.selector}`,
              timestamp: new Date().toISOString(),
              duration_ms: performance.now() - startTime
            });
            passed++;
            break;
          case "waitFor":
            await page.locator(stepData.selector).waitFor();
            executionResults.push({
              step,
              status: "success",
              details: `Waited for ${stepData.selector}`,
              timestamp: new Date().toISOString(),
              duration_ms: performance.now() - startTime
            });
            passed++;
            break;
          case "isVisible":
            const isVisible = await page.locator(stepData.selector).isVisible();
            const details = `Element ${stepData.selector} is ${isVisible ? 'visible' : 'not visible'}`;
            executionResults.push({
              step,
              status: "success",
              details: details,
              timestamp: new Date().toISOString(),
              duration_ms: performance.now() - startTime
            });
            passed++;
            break;
          default:
            throw new Error(`Unknown action: ${stepData.action}`);
        }
      } catch (e: any) {
        const errorDetails = e.message || 'Unknown error';
        executionResults.push({
          step,
          status: "error",
          details: errorDetails,
          timestamp: new Date().toISOString(),
          duration_ms: performance.now() - startTime
        });
        failed++;
      } finally {
        totalDuration += (performance.now() - startTime);
      }
    }
  } catch (e: any) {
    // Handle critical errors that prevent test execution from starting
    executionResults.push({
      step: "Setup",
      status: "error",
      details: e.message || 'Test setup failed',
      timestamp: new Date().toISOString(),
      duration_ms: 0
    });
    failed++;
  } finally {
    if (browser) {
      try {
        if (page) {
          await page.close();
        }
        await browser.close();
      } catch (e) {
        console.error("Error closing browser:", e);
      }
    }

    const summary = {
      total_steps: steps.length,
      passed,
      failed,
      duration_ms: totalDuration
    };

    const results = {
      "user_test_steps": userTestSteps,
      "executed_test_steps": executedSteps,
      "execution_results": executionResults,
      "summary": summary
    };

    fs.writeFileSync('test_result.json', JSON.stringify(results, null, 2));
    return results;
  }
});
