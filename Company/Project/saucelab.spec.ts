import { test, expect, chromium, Browser, Page, BrowserContext } from "@playwright/test";

test.setTimeout(120000);

test('Generated Test', async () => {
  const originalUserSteps = [
    "Navigate to https://www.saucedemo.com/",
    "Enter \"standard_user\" in the username field with id 'user-name'",
    "Enter \"secret_sauce\" in the password field with id 'password'",
    "Click the Login button with id 'login-button'",
    "Wait for the page to load completely",
    "Click on the product sort filter dropdown with class name 'product_sort_container'",
    "Click on Name (Z to A) option",
    "Wait for the page to load completely",
    "Locate the product \"Sauce Labs Backpack\" and click the Add to Cart button with id 'add-to-cart-sauce-labs-backpack'",
    "Click on the cart icon with class name 'shopping_cart_link'",
    "Wait for the page to load completely",
    "Ensure that the product \"Sauce Labs Backpack\" is present in the cart",
    "Wait for the page to load completely",
    "Click on the checkout button with id 'checkout'",
    "Wait for the page to load completely",
    "Enter the first name as \"chaitanya\" in the first name field with id 'first-name'",
    "Enter the last name as \"Kompella\" in the last name field with id 'last-name'",
    "Enter the postal code as \"62567352\" in postal code field with id 'postal-code'",
    "Wait for the page to load completely",
    "Click on continue button with id 'continue'",
    "Wait for the page to load completely",
    "Click on finish button with id 'finish'",
    "Verify the message “Thank you for your order!” is displayed",
    "Wait for the page to load completely",
    "Then click on back to home button with id 'back-to-products'",
    "Wait for the page to load completely",
    "Click on the burger bar with id 'react-burger-menu-btn'",
    "Wait for the page to load completely",
    "Click on logout with id 'logout_sidebar_link'",
    "Keep the browser open after the test execution is complete"
  ];

  const executedSteps: string[] = [];
  const executionResults: any[] = [];
  let totalDuration = 0;

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
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const page: Page = await context.newPage();
  page.setDefaultTimeout(30000);

  const steps = [
    {
      "action": "goto",
      "selector": "https://www.saucedemo.com/",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["waitForLoadState"],
      "errorMessage": "Navigation to saucedemo failed.",
      "stepDescription": "Navigate to the login page"
    },
    {
      "action": "fill",
      "selector": "#user-name",
      "value": "standard_user",
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": [],
      "errorMessage": "Failed to fill username field.",
      "stepDescription": "Enter username"
    },
    {
      "action": "fill",
      "selector": "#password",
      "value": "secret_sauce",
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": [],
      "errorMessage": "Failed to fill password field.",
      "stepDescription": "Enter password"
    },
    {
      "action": "click",
      "selector": "#login-button",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click login button.",
      "stepDescription": "Click login button"
    },
    {
      "action": "click",
      "selector": ".product_sort_container",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click product sort filter dropdown.",
      "stepDescription": "Click on the product sort filter dropdown"
    },
    {
      "action": "click",
      "selector": "text=Name (Z to A)",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click Name (Z to A) option.",
      "stepDescription": "Click on Name (Z to A) option"
    },
    {
      "action": "click",
      "selector": "#add-to-cart-sauce-labs-backpack",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to add Sauce Labs Backpack to cart.",
      "stepDescription": "Add Sauce Labs Backpack to cart"
    },
    {
      "action": "click",
      "selector": ".shopping_cart_link",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click on the cart icon.",
      "stepDescription": "Click on the cart icon"
    },
    {
      "action": "isVisible",
      "selector": "div.cart_item div.inventory_item_name:has-text(\"Sauce Labs Backpack\")",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": [],
      "errorMessage": "Sauce Labs Backpack is not present in the cart.",
      "stepDescription": "Ensure that the product \"Sauce Labs Backpack\" is present in the cart"
    },
    {
      "action": "click",
      "selector": "#checkout",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click on the checkout button.",
      "stepDescription": "Click on the checkout button"
    },
    {
      "action": "fill",
      "selector": "#first-name",
      "value": "chaitanya",
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": [],
      "errorMessage": "Failed to fill first name field.",
      "stepDescription": "Enter first name"
    },
    {
      "action": "fill",
      "selector": "#last-name",
      "value": "Kompella",
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": [],
      "errorMessage": "Failed to fill last name field.",
      "stepDescription": "Enter last name"
    },
    {
      "action": "fill",
      "selector": "#postal-code",
      "value": "62567352",
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": [],
      "errorMessage": "Failed to fill postal code field.",
      "stepDescription": "Enter postal code"
    },
    {
      "action": "click",
      "selector": "#continue",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click on continue button.",
      "stepDescription": "Click on continue button"
    },
    {
      "action": "click",
      "selector": "#finish",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click on finish button.",
      "stepDescription": "Click on finish button"
    },
    {
      "action": "isVisible",
      "selector": "text=Thank you for your order!",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": [],
      "errorMessage": "The message “Thank you for your order!” is not displayed.",
      "stepDescription": "Verify the message “Thank you for your order!” is displayed"
    },
    {
      "action": "click",
      "selector": "#back-to-products",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click on back to home button.",
      "stepDescription": "Click on back to home button"
    },
    {
      "action": "click",
      "selector": "#react-burger-menu-btn",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click on the burger bar.",
      "stepDescription": "Click on the burger bar"
    },
    {
      "action": "click",
      "selector": "#logout_sidebar_link",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click on logout.",
      "stepDescription": "Click on logout"
    }
  ];

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    const startTime = performance.now();
    let status = 'success';
    let details = '';

    try {
      switch (step.action) {
        case 'goto':
          await page.goto(step.selector);
          details = `Navigated to ${step.selector}`;
          break;
        case 'click':
          await page.locator(step.selector).click();
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
          const isVisible = await page.locator(step.selector).isVisible();
          details = `Element ${step.selector} is ${isVisible ? 'visible' : 'not visible'}`;
          if (!isVisible) {
            throw new Error(`Element ${step.selector} is not visible`);
          }
          break;
        default:
          throw new Error(`Unknown action: ${step.action}`);
      }
    } catch (error: any) {
      status = 'error';
      details = error.message || `Failed to execute action: ${step.action}`;
    }

    const endTime = performance.now();
    const durationMs = endTime - startTime;
    totalDuration += durationMs;

    executedSteps.push(step.stepDescription);
    executionResults.push({
      step: step.stepDescription,
      status: status,
      details: details,
      timestamp: new Date().toISOString(),
      duration_ms: durationMs
    });
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
