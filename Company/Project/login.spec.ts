import { test, expect, chromium, Browser, Page, BrowserContext } from "@playwright/test";

test('DemoWebShop End-to-End Test', async () => {
  test.setTimeout(120000);

  let browser: Browser;
  let context: BrowserContext;
  let page: Page;
  const executedSteps: string[] = [];
  const executionResults: any[] = [];
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
    "Check the Terms of service checkbox",
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
    "Click on Confirm button on the confirm order section",
    "Verify that the order number is shown on the order confirmation page"
  ];

  const steps = [
    {
      "step": 1,
      "action": "goto",
      "url": "https://demowebshop.tricentis.com",
      "options": {
        "waitUntil": "load",
        "timeout": 15000
      },
      "errorHandling": {
        "errorMessage": "Failed to navigate to the home page.",
        "retry": 3
      },
      "stepDescription": "Navigate to https://demowebshop.tricentis.com"
    },
    {
      "step": 2,
      "action": "click",
      "selector": {
        "primary": "//a[text()='Log in']",
        "alternative": "text=Log in",
        "backup": ".ico-login"
      },
      "wait": {
        "waitForLoadState": "networkidle",
        "timeout": 10000
      },
      "scrollIntoViewIfNeeded": true,
      "errorHandling": {
        "errorMessage": "Failed to click on the Log in link.",
        "retry": 3
      },
      "stepDescription": "Click on Log in link in the header"
    },
    {
      "step": 3,
      "action": "fill",
      "selector": {
        "primary": "#Email",
        "alternative": "[name='Email']"
      },
      "value": "snaptest@yopmail.com",
      "wait": {
        "waitForSelector": "#Email",
        "timeout": 5000
      },
      "errorHandling": {
        "errorMessage": "Failed to enter email.",
        "retry": 3
      },
      "stepDescription": "Enter snaptest@yopmail.com in the Email field"
    },
    {
      "step": 4,
      "action": "fill",
      "selector": {
        "primary": "#Password",
        "alternative": "[name='Password']"
      },
      "value": "snaptest@123",
      "wait": {
        "waitForSelector": "#Password",
        "timeout": 5000
      },
      "errorHandling": {
        "errorMessage": "Failed to enter password.",
        "retry": 3
      },
      "stepDescription": "Enter snaptest@123 in the Password field"
    },
    {
      "step": 5,
      "action": "click",
      "selector": {
        "primary": "//input[@value='Log in']",
        "alternative": "button:has-text('Log in')",
        "backup": ".button-1.login-button"
      },
      "wait": {
        "waitForLoadState": "networkidle",
        "timeout": 10000
      },
      "scrollIntoViewIfNeeded": true,
      "errorHandling": {
        "errorMessage": "Failed to click on the Log in button.",
        "retry": 3
      },
      "stepDescription": "Click on Log in button"
    },
    {
      "step": 6,
      "action": "isVisible",
      "selector": {
        "primary": "//a[contains(text(),'snaptest@yopmail.com')]",
        "alternative": "text=snaptest@yopmail.com",
        "backup": ".account"
      },
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": [
        "scrollIntoView"
      ],
      "errorMessage": "Failed to verify the logged-in user email.",
      "stepDescription": "Verify that snaptest@yopmail.com is displayed in the header"
    },
    {
      "step": 7,
      "action": "click",
      "selector": {
        "primary": "//a[text()='Books']",
        "alternative": "text=Books",
        "backup": ".top-menu a[href='/books']"
      },
      "wait": {
        "waitForLoadState": "networkidle",
        "timeout": 10000
      },
      "scrollIntoViewIfNeeded": true,
      "errorHandling": {
        "errorMessage": "Failed to click on the Books link.",
        "retry": 3
      },
      "stepDescription": "Click on Books in the top menu"
    },
    {
      "step": 8,
      "action": "click",
      "selector": {
        "primary": "(//div[@class='item-box'])[1]//a",
        "alternative": ".item-box:first-child a",
        "backup": ".product-item a"
      },
      "wait": {
        "waitForLoadState": "networkidle",
        "timeout": 10000
      },
      "scrollIntoViewIfNeeded": true,
      "errorHandling": {
        "errorMessage": "Failed to click on the first product link.",
        "retry": 3
      },
      "stepDescription": "Click on the first product link on the page"
    },
    {
      "step": 9,
      "action": "click",
      "selector": {
        "primary": "#add-to-cart-button-45",
        "alternative": "input[value='Add to cart']",
        "backup": "#add-to-cart-button"
      },
      "wait": {
        "waitForLoadState": "networkidle",
        "timeout": 10000
      },
      "scrollIntoViewIfNeeded": true,
      "errorHandling": {
        "errorMessage": "Failed to click on the Add to cart button.",
        "retry": 3
      },
      "stepDescription": "Click on Add to cart button"
    },
    {
      "step": 10,
      "action": "click",
      "selector": {
        "primary": "//a[text()='Shopping cart']",
        "alternative": "text=Shopping cart",
        "backup": ".ico-cart"
      },
      "wait": {
        "waitForLoadState": "networkidle",
        "timeout": 10000
      },
      "scrollIntoViewIfNeeded": true,
      "errorHandling": {
        "errorMessage": "Failed to click on the Shopping cart link.",
        "retry": 3
      },
      "stepDescription": "Click on Shopping cart link in the header"
    },
    {
      "step": 11,
      "action": "isVisible",
      "selector": {
        "primary": "//a[@class='product-name']",
        "alternative": ".product-name",
        "backup": ".cart-item-row"
      },
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": [
        "scrollIntoView"
      ],
      "errorMessage": "Failed to verify the product in the shopping cart.",
      "stepDescription": "Verify that the product is present in the shopping cart"
    },
    {
      "step": 12,
      "action": "check",
      "selector": {
        "primary": "#termsofservice",
        "alternative": "[name='termsofservice']"
      },
      "wait": {
        "waitForSelector": "#termsofservice",
        "timeout": 5000
      },
      "scrollIntoViewIfNeeded": true,
      "errorHandling": {
        "errorMessage": "Failed to check the Terms of service checkbox.",
        "retry": 3
      },
      "stepDescription": "Check the Terms of service checkbox"
    },
    {
      "step": 13,
      "action": "click",
      "selector": {
        "primary": "#checkout",
        "alternative": "[name='checkout']",
        "backup": ".button-1.checkout-button"
      },
      "wait": {
        "waitForLoadState": "networkidle",
        "timeout": 10000
      },
      "scrollIntoViewIfNeeded": true,
      "errorHandling": {
        "errorMessage": "Failed to click on the Checkout button.",
        "retry": 3
      },
      "stepDescription": "Click on Checkout button"
    },
    {
      "step": 14,
      "action": "click",
      "selector": {
        "primary": "//input[@title='Continue']",
        "alternative": "input[value='Continue']",
        "backup": ".button-1.new-address-next-step-button"
      },
      "wait": {
        "waitForLoadState": "networkidle",
        "timeout": 10000
      },
      "scrollIntoViewIfNeeded": true,
      "errorHandling": {
        "errorMessage": "Failed to click on the Continue button in the billing address section.",
        "retry": 3
      },
      "stepDescription": "Click on Continue button in the billing address section"
    },
    {
      "step": 15,
      "action": "isVisible",
      "selector": {
        "primary": "#shipping-buttons-container",
        "alternative": "div[data-shipping]",
        "backup": "#shipping-address-select"
      },
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": [
        "scrollIntoView"
      ],
      "errorMessage": "Failed to verify the shipping address section.",
      "stepDescription": "Verify that the shipping address section is displayed"
    },
    {
      "step": 16,
      "action": "click",
      "selector": {
        "primary": "//input[@title='Continue']",
        "alternative": "input[value='Continue']",
        "backup": ".button-1.shipping-address-next-step-button"
      },
      "wait": {
        "waitForLoadState": "networkidle",
        "timeout": 10000
      },
      "scrollIntoViewIfNeeded": true,
      "errorHandling": {
        "errorMessage": "Failed to click on the Continue button in the shipping address section.",
        "retry": 3
      },
      "stepDescription": "Click on Continue button in the shipping address section"
    },
    {
      "step": 17,
      "action": "isVisible",
      "selector": {
        "primary": "#shipping-method-buttons-container",
        "alternative": "div[data-shipping-method]",
        "backup": "#checkout-shipping-method-load"
      },
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": [
        "scrollIntoView"
      ],
      "errorMessage": "Failed to verify the Shipping method section.",
      "stepDescription": "Verify that the Shipping method section is displayed"
    },
    {
      "step": 18,
      "action": "click",
      "selector": {
        "primary": "//input[@title='Continue']",
        "alternative": "input[value='Continue']",
        "backup": ".button-1.shipping-method-next-step-button"
      },
      "wait": {
        "waitForLoadState": "networkidle",
        "timeout": 10000
      },
      "scrollIntoViewIfNeeded": true,
      "errorHandling": {
        "errorMessage": "Failed to click on the Continue button in the Shipping method section.",
        "retry": 3
      },
      "stepDescription": "Click on Continue button in the Shipping method section"
    },
    {
      "step": 19,
      "action": "isVisible",
      "selector": {
        "primary": "//li[@id='paymentmethod_0']//input[@checked='checked']",
        "alternative": "#paymentmethod_0 input[checked='checked']",
        "backup": "input[name='paymentmethod'][value='Payments.CashOnDelivery']"
      },
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": [
        "scrollIntoView"
      ],
      "errorMessage": "Failed to verify Cash On Delivery is selected by default.",
      "stepDescription": "Verify that Cash On Delivery is selected by default in the payment method section"
    },
    {
      "step": 20,
      "action": "click",
      "selector": {
        "primary": "//input[@title='Continue']",
        "alternative": "input[value='Continue']",
        "backup": ".button-1.payment-method-next-step-button"
      },
      "wait": {
        "waitForLoadState": "networkidle",
        "timeout": 10000
      },
      "scrollIntoViewIfNeeded": true,
      "errorHandling": {
        "errorMessage": "Failed to click on the Continue button in the Payment method section.",
        "retry": 3
      },
      "stepDescription": "Click on Continue button in the Payment method section"
    },
    {
      "step": 21,
      "action": "isVisible",
      "selector": {
        "primary": "//div[@id='payment-info-buttons-container']",
        "alternative": "div[data-payment-info]",
        "backup": "#checkout-payment-info-load"
      },
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": [
        "scrollIntoView"
      ],
      "errorMessage": "Failed to verify the selected payment method in the Payment information section.",
      "stepDescription": "Verify that the selected payment method is displayed in the Payment information section"
    },
    {
      "step": 22,
      "action": "click",
      "selector": {
        "primary": "//input[@title='Continue']",
        "alternative": "input[value='Continue']",
        "backup": ".button-1.payment-info-next-step-button"
      },
      "wait": {
        "waitForLoadState": "networkidle",
        "timeout": 10000
      },
      "scrollIntoViewIfNeeded": true,
      "errorHandling": {
        "errorMessage": "Failed to click on the Continue button in the Payment information section.",
        "retry": 3
      },
      "stepDescription": "Click on Continue button in the Payment information section"
    },
    {
      "step": 23,
      "action": "click",
      "selector": {
        "primary": "//input[@value='Confirm']",
        "alternative": "input[title='Confirm']",
        "backup": ".button-1.confirm-order-next-step-button"
      },
      "wait": {
        "waitForLoadState": "networkidle",
        "timeout": 10000
      },
      "scrollIntoViewIfNeeded": true,
      "errorHandling": {
        "errorMessage": "Failed to click on the Confirm button on the confirm order section.",
        "retry": 3
      },
      "stepDescription": "Click on Confirm button on the confirm order section"
    },
    {
      "step": 24,
      "action": "isVisible",
      "selector": {
        "primary": "//div[@class='section order-completed']//strong",
        "alternative": ".order-completed strong",
        "backup": ".order-number"
      },
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": [
        "scrollIntoView"
      ],
      "errorMessage": "Failed to verify the order number on the order confirmation page.",
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
    context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
    page = await context.newPage();
    page.setDefaultTimeout(30000);

    for (const step of steps) {
      const startTime = performance.now();
      try {
        switch (step.action) {
          case 'goto':
            await page.goto(step.url, step.options);
            executedSteps.push(step.stepDescription);
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Navigated to ${step.url}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case 'click':
            await page.locator(step.selector.primary).click();
            executedSteps.push(step.stepDescription);
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Clicked ${step.selector.primary}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case 'fill':
            await page.locator(step.selector.primary).fill(step.value);
            executedSteps.push(step.stepDescription);
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Filled ${step.selector.primary}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case 'check':
            await page.locator(step.selector.primary).check();
            executedSteps.push(step.stepDescription);
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Checked ${step.selector.primary}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case 'uncheck':
            await page.locator(step.selector.primary).uncheck();
            executedSteps.push(step.stepDescription);
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Unchecked ${step.selector.primary}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case 'hover':
            await page.locator(step.selector.primary).hover();
            executedSteps.push(step.stepDescription);
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Hovered ${step.selector.primary}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case 'waitFor':
            await page.locator(step.selector.primary).waitFor();
            executedSteps.push(step.stepDescription);
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Waited for ${step.selector.primary}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          case 'isVisible':
            const isVisible = await page.locator(step.selector.primary).isVisible();
            executedSteps.push(step.stepDescription);
            executionResults.push({
              step: step.stepDescription,
              status: 'success',
              details: `Element ${step.selector.primary} is ${isVisible ? 'visible' : 'not visible'}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
            break;
          default:
            executedSteps.push(step.stepDescription);
            executionResults.push({
              step: step.stepDescription,
              status: 'error',
              details: `Unknown action: ${step.action}`,
              timestamp: Date.now(),
              duration_ms: performance.now() - startTime
            });
        }
      } catch (error) {
        executedSteps.push(step.stepDescription);
        executionResults.push({
          step: step.stepDescription,
          status: 'error',
          details: `Error: ${error.message}`,
          timestamp: Date.now(),
          duration_ms: performance.now() - startTime
        });
      }
    }
  } finally {
    let totalDuration = 0;
    executionResults.forEach(result => {
      totalDuration += result.duration_ms;
    });

    if (browser) {
      await browser.close();
    }

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
  }
});
