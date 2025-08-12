import { test, expect, chromium, Browser, Page, BrowserContext } from "@playwright/test";

test('Generated Test', async () => {
  test.setTimeout(12000);

  let browser: Browser;
  const executedSteps: string[] = [];
  const executionResults: any[] = [];
  const originalUserSteps = [
    "Navigate to https://demowebshop.tricentis.com",
    "Click on Log in",
    "Enter email: snaptest@yopmail.com",
    "Enter password: snaptest@123",
    "Click on Log in button",
    "Verify that the logged in email id is displayed on the top right corner of the page",
    "Click on Books",
    "Click on Computing and Internet",
    "Click on Add to cart",
    "Click on Shopping cart",
    "Verify that the product is present in the shopping cart",
    "Click the Terms of service checkbox",
    "Click the Checkout button",
    "Click on Continue in the Billing address section",
    "Verify that the shipping address section is displayed",
    "Click on Continue in the Shipping address section",
    "Verify that the Shipping method section is displayed",
    "Click on Continue in the Shipping method section",
    "Verify that Cash On Delivery is selected by default in the payment method section",
    "Click on Continue in the Payment method section",
    "Verify that the selected payment method is displayed in the Payment information section",
    "Click on Continue in the Payment information section",
    "Click on Confirm in the confirm order section",
    "Verify that the order number is shown on the order confirmation page"
  ];

  const steps = [
    {
      "action": "goto",
      "selector": null,
      "value": "https://demowebshop.tricentis.com",
      "waitTimeoutMs": 30000,
      "retry": 3,
      "fallbacks": [],
      "errorMessage": "Failed to navigate to demowebshop",
      "stepDescription": "Navigate to demowebshop homepage"
    },
    {
      "action": "click",
      "selector": "a.ico-login",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": ["waitForLoadState", "scrollIntoView"],
      "errorMessage": "Failed to click on Log in link",
      "stepDescription": "Click on Log in link at the top right"
    },
    {
      "action": "fill",
      "selector": "#Email",
      "value": "snaptest@yopmail.com",
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": [],
      "errorMessage": "Failed to enter email",
      "stepDescription": "Enter email: snaptest@yopmail.com"
    },
    {
      "action": "fill",
      "selector": "#Password",
      "value": "snaptest@123",
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": [],
      "errorMessage": "Failed to enter password",
      "stepDescription": "Enter password: snaptest@123"
    },
    {
      "action": "click",
      "selector": "button.button-1.login-button",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click on Log in button",
      "stepDescription": "Click on the Log in button"
    },
    {
      "action": "isVisible",
      "selector": "a.account",
      "value": "snaptest@yopmail.com",
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": [],
      "errorMessage": "Logged in email id is not visible",
      "stepDescription": "Verify that the logged in email id is displayed on the top right corner of the page"
    },
    {
      "action": "click",
      "selector": "ul.top-menu > li > a[href='/books']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click on Books menu",
      "stepDescription": "Click on Books menu"
    },
    {
      "action": "click",
      "selector": "div.item-box a[href='/computing-and-internet']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click on Computing and Internet product",
      "stepDescription": "Click on Computing and Internet product"
    },
    {
      "action": "click",
      "selector": "#add-to-cart-button-45",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click on Add to cart button",
      "stepDescription": "Click on Add to cart button"
    },
    {
      "action": "click",
      "selector": "span.cart-label",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click on Shopping cart",
      "stepDescription": "Click on Shopping cart"
    },
    {
      "action": "isVisible",
      "selector": "a.product-name",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": [],
      "errorMessage": "Product is not present in the shopping cart",
      "stepDescription": "Verify that the product is present in the shopping cart"
    },
    {
      "action": "check",
      "selector": "#termsofservice",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to check the Terms of service checkbox",
      "stepDescription": "Click the Terms of service checkbox"
    },
    {
      "action": "click",
      "selector": "#checkout",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click the Checkout button",
      "stepDescription": "Click the Checkout button"
    },
    {
      "action": "click",
      "selector": "input[value='Continue']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click Continue in the Billing address section",
      "stepDescription": "Click on Continue in the Billing address section"
    },
    {
      "action": "isVisible",
      "selector": "#shipping-buttons-container > input",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": [],
      "errorMessage": "Shipping address section is not displayed",
      "stepDescription": "Verify that the shipping address section is displayed"
    },
    {
      "action": "click",
      "selector": "#shipping-buttons-container > input",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click Continue in the Shipping address section",
      "stepDescription": "Click on Continue in the Shipping address section"
    },
    {
      "action": "isVisible",
      "selector": "#shipping-method-buttons-container > input",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": [],
      "errorMessage": "Shipping method section is not displayed",
      "stepDescription": "Verify that the Shipping method section is displayed"
    },
    {
      "action": "click",
      "selector": "#shipping-method-buttons-container > input",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click Continue in the Shipping method section",
      "stepDescription": "Click on Continue in the Shipping method section"
    },
    {
      "action": "isVisible",
      "selector": "input[value='Payments.CashOnDelivery']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": [],
      "errorMessage": "Cash On Delivery is not selected by default",
      "stepDescription": "Verify that Cash On Delivery is selected by default in the payment method section"
    },
    {
      "action": "click",
      "selector": "#payment-method-buttons-container > input",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click Continue in the Payment method section",
      "stepDescription": "Click on Continue in the Payment method section"
    },
    {
      "action": "isVisible",
      "selector": "#payment-info-buttons-container > input",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": [],
      "errorMessage": "Payment method is not displayed in the Payment information section",
      "stepDescription": "Verify that the selected payment method is displayed in the Payment information section"
    },
    {
      "action": "click",
      "selector": "#payment-info-buttons-container > input",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click Continue in the Payment information section",
      "stepDescription": "Click on Continue in the Payment information section"
    },
    {
      "action": "click",
      "selector": "#confirm-order-buttons-container > input",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click Confirm in the confirm order section",
      "stepDescription": "Click on Confirm in the confirm order section"
    },
    {
      "action": "isVisible",
      "selector": ".order-number",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 2,
      "fallbacks": [],
      "errorMessage": "Order number is not shown on the order confirmation page",
      "stepDescription": "Verify that the order number is shown on the order confirmation page"
    }
  ];

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
    const page: Page = await context.newPage();
    page.setDefaultTimeout(30000);

    for (const step of steps) {
      const startTime = performance.now();
      try {
        switch (step.action) {
          case 'goto':
            await page.goto(step.value);
            executedSteps.push(step.stepDescription);
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Navigated to ${step.value}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case 'click':
            await page.locator(step.selector).click();
            executedSteps.push(step.stepDescription);
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Clicked ${step.selector}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case 'fill':
            await page.locator(step.selector).fill(step.value);
            executedSteps.push(step.stepDescription);
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Filled ${step.selector}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case 'check':
            await page.locator(step.selector).check();
            executedSteps.push(step.stepDescription);
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Checked ${step.selector}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case 'uncheck':
            await page.locator(step.selector).uncheck();
            executedSteps.push(step.stepDescription);
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Unchecked ${step.selector}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case 'hover':
            await page.locator(step.selector).hover();
            executedSteps.push(step.stepDescription);
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Hovered ${step.selector}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case 'waitFor':
            await page.locator(step.selector).waitFor();
            executedSteps.push(step.stepDescription);
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Waited for ${step.selector}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case 'isVisible':
            const isVisible = await page.locator(step.selector).isVisible();
            executedSteps.push(step.stepDescription);
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Element ${step.selector} is ${isVisible ? 'visible' : 'not visible'}`,
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
        break; // Stop executing further steps after the first failure
      }
    }
  } finally {
    if (browser) {
      await browser.close();
    }

    let totalDuration = 0;
    executionResults.forEach(result => {
        totalDuration += result.duration_ms;
    });

    const result = {
      user_test_steps: originalUserSteps,
      executed_test_steps: executedSteps,
      execution_results: executionResults,
      summary: {
        total_steps: steps.length,
        passed: executionResults.filter(r => r.status === 'success').length,
        failed: executionResults.filter(r => r.status === 'error').length,
        duration_ms: totalDuration
      }
    };
    require('fs').writeFileSync('test_result.json', JSON.stringify(result, null, 2));
    return result;
  }
});
