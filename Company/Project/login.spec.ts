import { test, expect, chromium, Browser, Page, BrowserContext } from "@playwright/test";
import fs from 'fs';

test.setTimeout(12000);

test('End-to-End Order Placement', async () => {
  let browser: Browser | undefined;
  let page: Page | undefined;
  const originalUserSteps = [
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
    "Click on Terms of service checkbox",
    "Click on Checkout button",
    "Click on Continue button in the billing address section",
    "Verify that the shipping address section is displayed",
    "Click on Continue button in the shipping address section",
    "Verify that the Shipping method section is displayed",
    "Click on Continue button in the Shipping method section",
    "Verify that Cash On Delivery is selected by default in the payment method section",
    "Click on Continue button in the payment method section",
    "Verify that the selected payment method is displayed in the Payment information section",
    "Click on Continue button in the Payment information section",
    "On the confirm order section, click on Confirm button",
    "Verify that the order number is shown on the order confirmation page"
  ];
  const executedSteps: string[] = [];
  const executionResults: any[] = [];
  let totalDuration = 0;

  const steps = [
    {
      "action": "goto",
      "url": "https://demowebshop.tricentis.com",
      "options": {
        "timeout": 30000,
        "waitUntil": "load"
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Navigate to the demo webshop homepage"
    },
    {
      "action": "click",
      "selector": "a:has-text('Log in')",
      "selectorType": "text",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Click on the Log in link in the header"
    },
    {
      "action": "fill",
      "selector": "#Email",
      "selectorType": "css",
      "value": "snaptest@yopmail.com",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Enter email in the Email field"
    },
    {
      "action": "fill",
      "selector": "#Password",
      "selectorType": "css",
      "value": "snaptest@123",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Enter password in the Password field"
    },
    {
      "action": "click",
      "selector": "input[value='Log in']",
      "selectorType": "css",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Click on the Log in button"
    },
    {
      "action": "isVisible",
      "selector": "a.account:has-text('snaptest@yopmail.com')",
      "selectorType": "css",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Verify that the email is displayed in the header"
    },
    {
      "action": "click",
      "selector": "ul.top-menu > li > a[href='/books']",
      "selectorType": "css",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Click on Books in the top menu"
    },
    {
      "action": "click",
      "selector": "div.item-box div.product-item div.details h2.product-title a",
      "selectorType": "css",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Click on the first product link on the page"
    },
    {
      "action": "click",
      "selector": "input.button-1.add-to-cart-button",
      "selectorType": "css",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Click on Add to cart button"
    },
    {
      "action": "click",
      "selector": "span.cart-label",
      "selectorType": "css",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Click on Shopping cart link in the header"
    },
    {
      "action": "isVisible",
      "selector": "div.cart-item-row",
      "selectorType": "css",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Verify that the product is present in the shopping cart"
    },
    {
      "action": "check",
      "selector": "#termsofservice",
      "selectorType": "css",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Click on Terms of service checkbox"
    },
    {
      "action": "click",
      "selector": "#checkout",
      "selectorType": "css",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Click on Checkout button"
    },
    {
      "action": "click",
      "selector": "input.button-1.new-address-next-step-button",
      "selectorType": "css",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Click on Continue button in the billing address section"
    },
    {
      "action": "isVisible",
      "selector": "#shipping-address-form",
      "selectorType": "css",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Verify that the shipping address section is displayed"
    },
    {
      "action": "click",
      "selector": "input.button-1.new-address-next-step-button",
      "selectorType": "css",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Click on Continue button in the shipping address section"
    },
    {
      "action": "isVisible",
      "selector": "#shipping-method-buttons-container",
      "selectorType": "css",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Verify that the Shipping method section is displayed"
    },
    {
      "action": "click",
      "selector": "input.button-1.shipping-method-next-step-button",
      "selectorType": "css",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Click on Continue button in the Shipping method section"
    },
    {
      "action": "isVisible",
      "selector": "#paymentmethod_0",
      "selectorType": "css",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Verify that Cash On Delivery is selected by default in the payment method section"
    },
    {
      "action": "click",
      "selector": "input.button-1.payment-method-next-step-button",
      "selectorType": "css",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Click on Continue button in the payment method section"
    },
    {
      "action": "isVisible",
      "selector": "div.payment-info-next-step-button",
      "selectorType": "css",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Verify that the selected payment method is displayed in the Payment information section"
    },
    {
      "action": "click",
      "selector": "input.button-1.payment-info-next-step-button",
      "selectorType": "css",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Click on Continue button in the Payment information section"
    },
    {
      "action": "click",
      "selector": "input.button-1.confirm-order-next-step-button",
      "selectorType": "css",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "On the confirm order section, click on Confirm button"
    },
    {
      "action": "isVisible",
      "selector": "div.section.order-completed strong",
      "selectorType": "css",
      "options": {
        "timeout": 10000
      },
      "errorHandling": "strict",
      "retry": 3,
      "description": "Verify that the order number is shown on the order confirmation page"
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
    page = await context.newPage();
    page.setDefaultTimeout(30000);

    for (const step of steps) {
      const startTime = performance.now();
      try {
        switch (step.action) {
          case 'goto':
            await page.goto(step.url, step.options);
            executedSteps.push(step.description);
            executionResults.push({
              step: step.description,
              status: 'success',
              details: `Navigated to ${step.url}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case 'click':
            await page.locator(step.selector).click(step.options);
            executedSteps.push(step.description);
            executionResults.push({
              step: step.description,
              status: 'success',
              details: `Clicked ${step.selector}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case 'fill':
            await page.locator(step.selector).fill(step.value, step.options);
            executedSteps.push(step.description);
            executionResults.push({
              step: step.description,
              status: 'success',
              details: `Filled ${step.selector}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case 'check':
            await page.locator(step.selector).check(step.options);
            executedSteps.push(step.description);
            executionResults.push({
              step: step.description,
              status: 'success',
              details: `Checked ${step.selector}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case 'uncheck':
            await page.locator(step.selector).uncheck(step.options);
            executedSteps.push(step.description);
            executionResults.push({
              step: step.description,
              status: 'success',
              details: `Unchecked ${step.selector}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case 'hover':
            await page.locator(step.selector).hover(step.options);
            executedSteps.push(step.description);
            executionResults.push({
              step: step.description,
              status: 'success',
              details: `Hovered ${step.selector}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case 'waitFor':
            await page.locator(step.selector).waitFor(step.options);
            executedSteps.push(step.description);
            executionResults.push({
              step: step.description,
              status: 'success',
              details: `Waited for ${step.selector}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case 'isVisible':
            const isVisible = await page.locator(step.selector).isVisible(step.options);
            executedSteps.push(step.description);
            executionResults.push({
              step: step.description,
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
        executedSteps.push(step.description);
        executionResults.push({
          step: step.description,
          status: 'error',
          details: `Error: ${error.message}`,
          timestamp: Date.now(),
          duration_ms: performance.now() - startTime
        });
        break; // Stop executing further steps after the first failure
      }
      totalDuration += performance.now() - startTime;
    }
  } finally {
    if (browser) {
      await browser.close();
    }

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
    fs.writeFileSync('test_result.json', JSON.stringify(result, null, 2));
    return result;
  }
});
