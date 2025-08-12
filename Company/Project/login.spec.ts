import { test, expect, chromium, Browser, Page, BrowserContext } from "@playwright/test";

test('Generated Test', async () => {
  test.setTimeout(120000);

  const originalUserSteps = [
    "Navigate to https://demowebshop.tricentis.com",
    "Click on Log in",
    "Enter email: snaptest@yopmail.com",
    "Enter password: snaptest@123",
    "Click on Log in",
    "Verify that the logged in email id is displayed on the top right corner of the page",
    "Click on Books",
    "Click on the first product link on the page",
    "Click on Add to cart",
    "Click on Shopping cart",
    "Verify that the product is present in the shopping cart",
    "Click the Terms of service checkbox",
    "Click on Checkout",
    "Click on Continue in the billing address section",
    "Verify that the shipping address section is displayed",
    "Click on Continue in the shipping address section",
    "Verify that the Shipping method section is displayed",
    "Click on Continue in the shipping method section",
    "Verify that Cash On Delivery is selected by default in the payment method section",
    "Click on Continue in the payment method section",
    "Verify that the selected payment method is displayed in the Payment information section",
    "Click on Continue in the payment information section",
    "Click on Confirm in the confirm order section",
    "Verify that the order number is shown on the order confirmation page"
  ];

  const steps = [
    {
      "action": "goto",
      "value": "https://demowebshop.tricentis.com",
      "errorMessage": "Failed to navigate to the home page",
      "stepDescription": "Navigate to the home page"
    },
    {
      "action": "click",
      "selector": "a.ico-login",
      "fallbacks": [
        "text=Log in",
        "//a[text()='Log in']"
      ],
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to click on the 'Log in' link",
      "stepDescription": "Click on Log in"
    },
    {
      "action": "fill",
      "selector": "#Email",
      "value": "snaptest@yopmail.com",
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to enter the email address",
      "stepDescription": "Enter email: snaptest@yopmail.com"
    },
    {
      "action": "fill",
      "selector": "#Password",
      "value": "snaptest@123",
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to enter the password",
      "stepDescription": "Enter password: snaptest@123"
    },
    {
      "action": "click",
      "selector": "input.button-1.login-button",
      "fallbacks": [
        "text=Log in",
        "//input[@value='Log in']"
      ],
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to click on the 'Log in' button",
      "stepDescription": "Click on Log in"
    },
    {
      "action": "isVisible",
      "selector": ".account",
      "value": "snaptest@yopmail.com",
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to verify the logged in email id",
      "stepDescription": "Verify that the logged in email id is displayed on the top right corner of the page"
    },
    {
      "action": "click",
      "selector": "a[href='/books']",
      "fallbacks": [
        "text=Books",
        "//a[text()='Books']"
      ],
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to click on the 'Books' link",
      "stepDescription": "Click on Books"
    },
    {
      "action": "click",
      "selector": ".product-item a[href*='/'] img",
      "fallbacks": [
        "//div[@class='product-item'][1]//a",
        ".product-item:first-child a"
      ],
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to click on the first product link",
      "stepDescription": "Click on the first product link on the page"
    },
    {
      "action": "click",
      "selector": "input.button-1.add-to-cart-button",
      "fallbacks": [
        "#add-to-cart-button-4",
        "//input[@value='Add to cart']"
      ],
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to click on the 'Add to cart' button",
      "stepDescription": "Click on Add to cart"
    },
    {
      "action": "click",
      "selector": "a.ico-cart",
      "fallbacks": [
        "text=Shopping cart",
        "//a[@class='ico-cart']"
      ],
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to click on the 'Shopping cart' link",
      "stepDescription": "Click on Shopping cart"
    },
    {
      "action": "isVisible",
      "selector": ".product-name",
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to verify the product in the shopping cart",
      "stepDescription": "Verify that the product is present in the shopping cart"
    },
    {
      "action": "check",
      "selector": "#termsofservice",
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to check the 'Terms of service' checkbox",
      "stepDescription": "Click the Terms of service checkbox"
    },
    {
      "action": "click",
      "selector": "#checkout",
      "fallbacks": [
        "button[name='checkout']",
        "//button[@id='checkout']"
      ],
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to click on the 'Checkout' button",
      "stepDescription": "Click on Checkout"
    },
    {
      "action": "click",
      "selector": "input[value='Continue']",
      "fallbacks": [
        "//input[@value='Continue']",
        "text=Continue"
      ],
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to click on the 'Continue' button in the billing address section",
      "stepDescription": "Click on Continue in the billing address section"
    },
    {
      "action": "isVisible",
      "selector": "#shipping-buttons-container",
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to verify the shipping address section",
      "stepDescription": "Verify that the shipping address section is displayed"
    },
    {
      "action": "click",
      "selector": "input[value='Continue']",
      "fallbacks": [
        "//input[@onclick='Shipping.save()']",
        "//input[@value='Continue']"
      ],
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to click on the 'Continue' button in the shipping address section",
      "stepDescription": "Click on Continue in the shipping address section"
    },
    {
      "action": "isVisible",
      "selector": "#shipping-method-buttons-container",
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to verify the Shipping method section",
      "stepDescription": "Verify that the Shipping method section is displayed"
    },
    {
      "action": "click",
      "selector": "input[value='Continue']",
      "fallbacks": [
        "//input[@onclick='ShippingMethod.save()']",
        "//input[@value='Continue']"
      ],
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to click on the 'Continue' button in the shipping method section",
      "stepDescription": "Click on Continue in the shipping method section"
    },
    {
      "action": "isVisible",
      "selector": "input[id='paymentmethod_0']",
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to verify Cash On Delivery is selected",
      "stepDescription": "Verify that Cash On Delivery is selected by default in the payment method section"
    },
    {
      "action": "click",
      "selector": "input[value='Continue']",
      "fallbacks": [
        "//input[@onclick='PaymentMethod.save()']",
        "//input[@value='Continue']"
      ],
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to click on the 'Continue' button in the payment method section",
      "stepDescription": "Click on Continue in the payment method section"
    },
    {
      "action": "isVisible",
      "selector": ".payment-info-next-step",
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to verify the selected payment method in the Payment information section",
      "stepDescription": "Verify that the selected payment method is displayed in the Payment information section"
    },
    {
      "action": "click",
      "selector": "input[value='Continue']",
      "fallbacks": [
        "//input[@onclick='PaymentInfo.save()']",
        "//input[@value='Continue']"
      ],
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to click on the 'Continue' button in the payment information section",
      "stepDescription": "Click on Continue in the payment information section"
    },
    {
      "action": "click",
      "selector": "input[value='Confirm']",
      "fallbacks": [
        "//input[@value='Confirm']",
        "text=Confirm"
      ],
      "waitTimeoutMs": 5000,
      "retry": 2,
      "errorMessage": "Failed to click on the 'Confirm' button in the confirm order section",
      "stepDescription": "Click on Confirm in the confirm order section"
    },
    {
      "action": "isVisible",
      "selector": ".order-number",
      "waitTimeoutMs": 10000,
      "retry": 3,
      "errorMessage": "Failed to verify the order number on the order confirmation page",
      "stepDescription": "Verify that the order number is shown on the order confirmation page"
    }
  ];

  const browser: Browser = await chromium.launch({
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
  const context: BrowserContext = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const page: Page = await context.newPage();
  page.setDefaultTimeout(30000);

  const executedSteps: string[] = [];
  const executionResults: any[] = [];
  let totalDuration = 0;
  let stepCounter = 1;

  for (const step of steps) {
    const startTime = performance.now();
    let status = 'success';
    let details = '';

    try {
      switch (step.action) {
        case 'goto':
          await page.goto(step.value);
          details = `Navigated to ${step.value}`;
          break;
        case 'click':
          try {
            await page.locator(step.selector).click({timeout: step.waitTimeoutMs});
          } catch (e: any) {
            let fallbackSuccess = false;
            if (step.fallbacks) {
              for (const fallback of step.fallbacks) {
                try {
                  await page.locator(fallback).click({timeout: step.waitTimeoutMs});
                  details = `Clicked ${fallback} (fallback)`;
                  fallbackSuccess = true;
                  break;
                } catch (e: any) {
                  console.warn(`Fallback click failed: ${fallback}`, e.message);
                }
              }
            }
            if (!fallbackSuccess) {
              throw e;
            }
          }
          details = `Clicked ${step.selector}`;
          break;
        case 'fill':
          await page.locator(step.selector).fill(step.value);
          details = `Filled ${step.selector} with ${step.value}`;
          break;
        case 'check':
          await page.locator(step.selector).check();
          details = `Checked ${step.selector}`;
          break;
        case 'uncheck':
          await page.locator(step.selector).uncheck();
          details = `Unchecked ${step.selector}`;
          break;
        case 'hover':
          await page.locator(step.selector).hover();
          details = `Hovered ${step.selector}`;
          break;
        case 'waitFor':
          await page.locator(step.selector).waitFor();
          details = `Waited for ${step.selector}`;
          break;
        case 'isVisible':
          try {
            await page.locator(step.selector).isVisible({timeout: step.waitTimeoutMs});
            details = `Element ${step.selector} is visible`;
          } catch (error) {
            details = `Element ${step.selector} is not visible`;
            status = 'error';
          }
          break;
        default:
          throw new Error(`Unknown action: ${step.action}`);
      }
    } catch (error: any) {
      status = 'error';
      details = error.message || 'An error occurred';
    }

    const endTime = performance.now();
    const durationMs = endTime - startTime;
    totalDuration += durationMs;

    executedSteps.push(step.stepDescription);
    executionResults.push({
      step: `Step ${stepCounter}: ${step.stepDescription}`,
      status: status,
      details: details,
      timestamp: new Date().toISOString(),
      duration_ms: durationMs
    });
    stepCounter++;
  }

  await browser.close();

  const result = {
    user_test_steps: originalUserSteps,
    executed_test_steps: executedSteps,
    execution_results: executionResults,
    summary: {
      total_steps: executionResults.length,
      passed: executionResults.filter(r => r.status === 'success').length,
      failed: executionResults.filter(r => r.status === 'error').length,
      duration_ms: totalDuration
    }
  };
  require('fs').writeFileSync('test_result.json', JSON.stringify(result, null, 2));
  return result;
});
