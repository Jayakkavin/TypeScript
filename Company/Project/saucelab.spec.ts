import { test, expect, chromium, Browser, Page, BrowserContext } from "@playwright/test";

test("Saucedemo Test", async () => {
  const browser: Browser = await chromium.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-gpu',
      '--disable-extensions'
    ]
  });
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const page = await context.newPage();
  page.setDefaultTimeout(30000);
  page.setDefaultNavigationTimeout(30000);

  const steps = [
    {
      "action": "goto",
      "selector": "https://www.saucedemo.com/",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["waitForLoadState"],
      "errorMessage": "Failed to navigate to the login page",
      "stepDescription": "Navigate to the Saucedemo login page."
    },
    {
      "action": "fill",
      "selector": "[data-test='user-name']",
      "value": "standard_user",
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView", "waitForLoadState"],
      "errorMessage": "Failed to enter username",
      "stepDescription": "Enter 'standard_user' in the username field."
    },
    {
      "action": "fill",
      "selector": "[data-test='password']",
      "value": "secret_sauce",
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView", "waitForLoadState"],
      "errorMessage": "Failed to enter password",
      "stepDescription": "Enter 'secret_sauce' in the password field."
    },
    {
      "action": "click",
      "selector": "[data-test='login-button']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click login button",
      "stepDescription": "Click the Login button."
    },
    {
      "action": "waitFor",
      "selector": "body",
      "value": null,
      "waitTimeoutMs": 3000,
      "retry": 0,
      "fallbacks": [],
      "errorMessage": "Failed to wait for page load",
      "stepDescription": "Wait for 3 seconds for the page to load."
    },
    {
      "action": "click",
      "selector": "[data-test='product_sort_container']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click product sort filter",
      "stepDescription": "Click on the product sort filter dropdown."
    },
    {
      "action": "click",
      "selector": "select[data-test='product_sort_container'] option[value='za']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to select Name (Z to A)",
      "stepDescription": "Click on the 'Name (Z to A)' option in the sort dropdown."
    },
    {
      "action": "waitFor",
      "selector": "body",
      "value": null,
      "waitTimeoutMs": 3000,
      "retry": 0,
      "fallbacks": [],
      "errorMessage": "Failed to wait for page load",
      "stepDescription": "Wait for 3 seconds for the page to load."
    },
    {
      "action": "click",
      "selector": "[data-test='add-to-cart-sauce-labs-backpack']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click add to cart button",
      "stepDescription": "Locate the product 'Sauce Labs Backpack' and click the Add to Cart button."
    },
    {
      "action": "click",
      "selector": "[data-test='shopping-cart-link']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click cart icon",
      "stepDescription": "Click on the cart icon."
    },
    {
      "action": "waitFor",
      "selector": "body",
      "value": null,
      "waitTimeoutMs": 3000,
      "retry": 0,
      "fallbacks": [],
      "errorMessage": "Failed to wait for page load",
      "stepDescription": "Wait for 3 seconds for the page to load."
    },
    {
      "action": "isVisible",
      "selector": "div.cart_item div.inventory_item_name:has-text('Sauce Labs Backpack')",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": [],
      "errorMessage": "Failed to assert backpack in cart",
      "stepDescription": "Ensure that the product 'Sauce Labs Backpack' is present in the cart."
    },
    {
      "action": "waitFor",
      "selector": "body",
      "value": null,
      "waitTimeoutMs": 3000,
      "retry": 0,
      "fallbacks": [],
      "errorMessage": "Failed to wait for page load",
      "stepDescription": "Wait for 3 seconds for the page to load."
    },
    {
      "action": "click",
      "selector": "[data-test='checkout']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click checkout button",
      "stepDescription": "Click on the checkout button."
    },
    {
      "action": "waitFor",
      "selector": "body",
      "value": null,
      "waitTimeoutMs": 3000,
      "retry": 0,
      "fallbacks": [],
      "errorMessage": "Failed to wait for page load",
      "stepDescription": "Wait for 3 seconds for the page to load."
    },
    {
      "action": "fill",
      "selector": "[data-test='first-name']",
      "value": "chaitanya",
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView", "waitForLoadState"],
      "errorMessage": "Failed to enter first name",
      "stepDescription": "Enter 'chaitanya' in the first name field."
    },
    {
      "action": "fill",
      "selector": "[data-test='last-name']",
      "value": "Kompella",
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView", "waitForLoadState"],
      "errorMessage": "Failed to enter last name",
      "stepDescription": "Enter 'Kompella' in the last name field."
    },
    {
      "action": "fill",
      "selector": "[data-test='postal-code']",
      "value": "62567352",
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView", "waitForLoadState"],
      "errorMessage": "Failed to enter postal code",
      "stepDescription": "Enter '62567352' in postal code field."
    },
    {
      "action": "waitFor",
      "selector": "body",
      "value": null,
      "waitTimeoutMs": 3000,
      "retry": 0,
      "fallbacks": [],
      "errorMessage": "Failed to wait for page load",
      "stepDescription": "Wait for 3 seconds for the page to load."
    },
    {
      "action": "click",
      "selector": "[data-test='continue']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click continue button",
      "stepDescription": "Click on continue button."
    },
    {
      "action": "waitFor",
      "selector": "body",
      "value": null,
      "waitTimeoutMs": 3000,
      "retry": 0,
      "fallbacks": [],
      "errorMessage": "Failed to wait for page load",
      "stepDescription": "Wait for 3 seconds for the page to load."
    },
    {
      "action": "click",
      "selector": "[data-test='finish']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click finish button",
      "stepDescription": "Click on finish button."
    },
    {
      "action": "isVisible",
      "selector": "text=Thank you for your order!",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": [],
      "errorMessage": "Failed to assert thank you message",
      "stepDescription": "Verify the presence of the message “Thank you for your order!”."
    },
    {
      "action": "waitFor",
      "selector": "body",
      "value": null,
      "waitTimeoutMs": 3000,
      "retry": 0,
      "fallbacks": [],
      "errorMessage": "Failed to wait for page load",
      "stepDescription": "Wait for 3 seconds for the page to load."
    },
    {
      "action": "click",
      "selector": "[data-test='back-to-products']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click back to home button",
      "stepDescription": "Click on back to home button."
    },
    {
      "action": "waitFor",
      "selector": "body",
      "value": null,
      "waitTimeoutMs": 3000,
      "retry": 0,
      "fallbacks": [],
      "errorMessage": "Failed to wait for page load",
      "stepDescription": "Wait for 3 seconds for the page to load."
    },
    {
      "action": "click",
      "selector": "[data-test='react-burger-menu-btn']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click open menu button",
      "stepDescription": "Click on the burger bar button."
    },
    {
      "action": "waitFor",
      "selector": "body",
      "value": null,
      "waitTimeoutMs": 3000,
      "retry": 0,
      "fallbacks": [],
      "errorMessage": "Failed to wait for menu to open",
      "stepDescription": "Wait for Menu to Open"
    },
    {
      "action": "click",
      "selector": "[data-test='logout_sidebar_link']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to click logout button",
      "stepDescription": "Click on logout button."
    }
  ];

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    let status = "success";
    let details = "";

    try {
      switch (step.action) {
        case "goto":
          await page.goto(step.selector);
          details = `Navigated to ${step.selector}`;
          break;
        case "click":
          await page.locator(step.selector).click();
          details = `Clicked ${step.selector}`;
          break;
        case "fill":
          await page.locator(step.selector).fill(step.value);
          details = `Filled ${step.selector}`;
          break;
        case "check":
          await page.locator(step.selector).check();
          details = `Checked ${step.selector}`;
          break;
        case "uncheck":
          await page.locator(step.selector).uncheck();
          details = `Unchecked ${step.selector}`;
          break;
        case "hover":
          await page.locator(step.selector).hover();
          details = `Hovered ${step.selector}`;
          break;
        case "waitFor":
          await page.locator(step.selector).waitFor({ timeout: step.waitTimeoutMs });
          details = `Waited for ${step.selector}`;
          break;
        case "isVisible":
          const isVisible = await page.locator(step.selector).isVisible();
          details = `Element ${step.selector} is ${isVisible ? "visible" : "not visible"}`;
          break;
        default:
          throw new Error(`Unknown action: ${step.action}`);
      }
    } catch (error: any) {
      status = "error";
      details = error.message;
    }

    console.log(`Step ${i + 1} Result:`);
    console.log(`Action: ${step.action}`);
    if (step.selector) {
      console.log(`Selector: ${step.selector}`);
    }
    console.log(`Status: ${status}`);
    console.log(`Details: ${details}`);
  }

  // Keep browser open
});
