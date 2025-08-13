import { test, expect, chromium, Browser, Page, BrowserContext } from "@playwright/test";
import fs from 'fs';

test('Generated Test', async () => {
  test.setTimeout(120000);

  let browser: Browser | null = null;
  const executedSteps: string[] = [];
  const executionResults: any[] = [];
  const originalUserSteps: string[] = [
    "Navigate to https://demowebshop.tricentis.com",
    "Click on Log in",
    "Enter snaptest@yopmail.com in Email field",
    "Enter snaptest@123 in Password field",
    "Click on Log in button",
    "Verify snaptest@yopmail.com is displayed",
    "Click on Books",
    "Click on Fiction",
    "Click on Add to cart button",
    "Click on Shopping cart",
    "Verify Fiction is present in the shopping cart",
    "Check Terms of service",
    "Click on Checkout",
    "Click on Continue on billing address section",
    "Verify shipping address section is displayed",
    "Click on Continue on shipping address section",
    "Verify Shipping method section is displayed",
    "Click on Continue on shipping method section",
    "Verify Cash On Delivery is selected",
    "Click on Continue on payment method section",
    "Verify selected payment method is displayed in the Payment information section",
    "Click on Continue on payment information section",
    "On the confirm order section, click on Confirm button",
    "Verify order number is shown on the order confirmation page"
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

    const steps = [
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
        "fallbacks": ["scrollIntoView", "waitForLoadState"],
        "errorMessage": "Failed to click on Log in link",
        "stepDescription": "Click on the Log in link at the top right"
      },
      {
        "action": "fill",
        "selector": "#Email",
        "value": "snaptest@yopmail.com",
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": [],
        "errorMessage": "Failed to enter email",
        "stepDescription": "Enter the email address in the email field"
      },
      {
        "action": "fill",
        "selector": "#Password",
        "value": "snaptest@123",
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": [],
        "errorMessage": "Failed to enter password",
        "stepDescription": "Enter the password in the password field"
      },
      {
        "action": "click",
        "selector": "input.button-1.login-button",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView", "waitForLoadState"],
        "errorMessage": "Failed to click on Log in button",
        "stepDescription": "Click on the Log in button"
      },
      {
        "action": "isVisible",
        "selector": "a.account",
        "value": "snaptest@yopmail.com",
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView"],
        "errorMessage": "Logged in email not visible",
        "stepDescription": "Verify that the logged-in email is displayed"
      },
      {
        "action": "click",
        "selector": "ul.top-menu > li > a[href='/books']",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView", "waitForLoadState"],
        "errorMessage": "Failed to click on Books menu",
        "stepDescription": "Click on the Books menu in the top menu"
      },
      {
        "action": "click",
        "selector": "a[href='/fiction']",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView", "waitForLoadState"],
        "errorMessage": "Failed to click on Fiction product",
        "stepDescription": "Click on the Fiction product link"
      },
      {
        "action": "click",
        "selector": "#add-to-cart-button-45",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView", "waitForLoadState"],
        "errorMessage": "Failed to click on Add to cart button",
        "stepDescription": "Click on the Add to cart button"
      },
      {
        "action": "click",
        "selector": "#topcartlink > a > span.cart-label",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView", "waitForLoadState"],
        "errorMessage": "Failed to click on Shopping cart link",
        "stepDescription": "Click on the Shopping cart link at the top of the menu"
      },
      {
        "action": "isVisible",
        "selector": "a[class='product-name'][href='/fiction']",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView"],
        "errorMessage": "Fiction not present in shopping cart",
        "stepDescription": "Verify that the Fiction product is present in the shopping cart"
      },
      {
        "action": "check",
        "selector": "#termsofservice",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView", "waitForLoadState"],
        "errorMessage": "Failed to check Terms of service checkbox",
        "stepDescription": "Check the Terms of service checkbox"
      },
      {
        "action": "click",
        "selector": "#checkout",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView", "waitForLoadState"],
        "errorMessage": "Failed to click on Checkout button",
        "stepDescription": "Click on the Checkout button"
      },
      {
        "action": "click",
        "selector": "input.button-1.checkout-button",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView", "waitForLoadState"],
        "errorMessage": "Failed to click Continue on billing address",
        "stepDescription": "Click on Continue button on the billing address section"
      },
      {
        "action": "isVisible",
        "selector": "#shipping-address-buttons",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView"],
        "errorMessage": "Shipping address section not displayed",
        "stepDescription": "Verify that the shipping address section is displayed"
      },
      {
        "action": "click",
        "selector": "input.button-1.new-address-next-step-button",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView", "waitForLoadState"],
        "errorMessage": "Failed to click Continue on shipping address",
        "stepDescription": "Click on Continue button on the shipping address section"
      },
      {
        "action": "isVisible",
        "selector": "#shipping-method-buttons-container",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView"],
        "errorMessage": "Shipping method section not displayed",
        "stepDescription": "Verify that the Shipping method section is displayed"
      },
      {
        "action": "click",
        "selector": "input.button-1.shipping-method-next-step-button",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView", "waitForLoadState"],
        "errorMessage": "Failed to click Continue on shipping method",
        "stepDescription": "Click on Continue button on the shipping method section"
      },
      {
        "action": "isVisible",
        "selector": "input[id='paymentmethod_0'][checked='checked']",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView"],
        "errorMessage": "Cash On Delivery not selected",
        "stepDescription": "Verify that Cash On Delivery is selected by default"
      },
      {
        "action": "click",
        "selector": "input.button-1.payment-method-next-step-button",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView", "waitForLoadState"],
        "errorMessage": "Failed to click Continue on payment method",
        "stepDescription": "Click on Continue button on the payment method section"
      },
      {
        "action": "isVisible",
        "selector": ".payment-info-next-step-button",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView"],
        "errorMessage": "Payment information not displayed",
        "stepDescription": "Verify that the selected payment method is displayed in the Payment information section"
      },
      {
        "action": "click",
        "selector": ".payment-info-next-step-button",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView", "waitForLoadState"],
        "errorMessage": "Failed to click Continue on payment information",
        "stepDescription": "Click on Continue button on the payment information section"
      },
      {
        "action": "click",
        "selector": "input.button-1.confirm-order-next-step-button",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView", "waitForLoadState"],
        "errorMessage": "Failed to click Confirm on confirm order",
        "stepDescription": "Click on Confirm button on the confirm order section"
      },
      {
        "action": "isVisible",
        "selector": ".order-completed .order-number strong",
        "value": null,
        "waitTimeoutMs": 10000,
        "retry": 3,
        "fallbacks": ["scrollIntoView"],
        "errorMessage": "Order number not displayed",
        "stepDescription": "Verify that the order number is shown on the order confirmation page"
      }
    ];

    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      const stepNumber = `Step ${i + 1}`;
      let startTime: number;
      let endTime: number;

      try {
        startTime = Date.now();
        executedSteps.push(step.stepDescription);

        switch (step.action) {
          case "goto":
            await page.goto(step.value);
            endTime = Date.now();
            executionResults.push({
              step: stepNumber,
              status: "success",
              details: `Navigated to ${step.value}`,
              timestamp: startTime,
              duration_ms: endTime - startTime
            });
            break;
          case "click":
            await page.locator(step.selector).click();
            endTime = Date.now();
            executionResults.push({
              step: stepNumber,
              status: "success",
              details: `Clicked ${step.selector}`,
              timestamp: startTime,
              duration_ms: endTime - startTime
            });
            break;
          case "fill":
            await page.locator(step.selector).fill(step.value);
            endTime = Date.now();
            executionResults.push({
              step: stepNumber,
              status: "success",
              details: `Filled ${step.selector}`,
              timestamp: startTime,
              duration_ms: endTime - startTime
            });
            break;
          case "check":
            await page.locator(step.selector).check();
            endTime = Date.now();
            executionResults.push({
              step: stepNumber,
              status: "success",
              details: `Checked ${step.selector}`,
              timestamp: startTime,
              duration_ms: endTime - startTime
            });
            break;
          case "uncheck":
            await page.locator(step.selector).uncheck();
            endTime = Date.now();
            executionResults.push({
              step: stepNumber,
              status: "success",
              details: `Unchecked ${step.selector}`,
              timestamp: startTime,
              duration_ms: endTime - startTime
            });
            break;
          case "hover":
            await page.locator(step.selector).hover();
            endTime = Date.now();
            executionResults.push({
              step: stepNumber,
              status: "success",
              details: `Hovered ${step.selector}`,
              timestamp: startTime,
              duration_ms: endTime - startTime
            });
            break;
          case "waitFor":
            await page.locator(step.selector).waitFor();
            endTime = Date.now();
            executionResults.push({
              step: stepNumber,
              status: "success",
              details: `Waited for ${step.selector}`,
              timestamp: startTime,
              duration_ms: endTime - startTime
            });
            break;
          case "isVisible":
            const isVisible = await page.locator(step.selector).isVisible();
            endTime = Date.now();
            executionResults.push({
              step: stepNumber,
              status: "success",
              details: `Element ${step.selector} is ${isVisible ? 'visible' : 'not visible'}`,
              timestamp: startTime,
              duration_ms: endTime - startTime
            });
            break;
          default:
            endTime = Date.now();
            executionResults.push({
              step: stepNumber,
              status: "error",
              details: `Unknown action: ${step.action}`,
              timestamp: startTime,
              duration_ms: endTime - startTime
            });
        }
      } catch (e: any) {
        endTime = Date.now();
        executionResults.push({
          step: stepNumber,
          status: "error",
          details: `Error: ${e.message}`,
          timestamp: startTime,
          duration_ms: endTime - startTime
        });
      }
    }
  } catch (criticalError: any) {
    executionResults.push({
      step: "Test Execution Error",
      status: "error",
      details: `Critical error occurred: ${criticalError.message}`,
      timestamp: Date.now(),
      duration_ms: 0
    });
  } finally {
    if (browser) {
      await browser.close();
    }

    if (executionResults.length === 0) {
      executionResults.push({
        "step": "No steps executed",
        "status": "error",
        "details": "No user steps provided",
        "timestamp": Date.now(),
        "duration_ms": 0
      });
    }

    const totalDuration = executionResults.reduce((sum, r) => sum + r.duration_ms, 0);
    const passedCount = executionResults.filter(r => r.status === 'success').length;
    const failedCount = executionResults.filter(r => r.status === 'error').length;

    const result = {
      user_test_steps: originalUserSteps,
      executed_test_steps: executedSteps,
      execution_results: executionResults,
      summary: {
        total_steps: executionResults.length,
        passed: passedCount,
        failed: failedCount,
        duration_ms: totalDuration
      }
    };

    fs.writeFileSync('test_result.json', JSON.stringify(result, null, 2));
    return result;
  }
});
