import { test, expect, chromium, Browser, Page, BrowserContext } from "@playwright/test";
import * as fs from 'fs';

test.setTimeout(10000);

test('Demowebshop E2E Test', async () => {
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

  const steps = [
    {
      "action": "goto",
      "selector": null,
      "value": "https://demowebshop.tricentis.com",
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["waitForLoadState"],
      "errorMessage": "Failed to navigate to demowebshop homepage",
      "stepDescription": "Navigate to demowebshop.tricentis.com"
    },
    {
      "action": "click",
      "selector": "//header//a[text()='Log in']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView", "waitForLoadState"],
      "errorMessage": "Failed to click on Log in link in the header",
      "stepDescription": "Click on Log in link in the header"
    },
    {
      "action": "fill",
      "selector": "#Email",
      "value": "snaptest@yopmail.com",
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to enter email in the Email field",
      "stepDescription": "Enter snaptest@yopmail.com in the Email field"
    },
    {
      "action": "fill",
      "selector": "#Password",
      "value": "snaptest@123",
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Failed to enter password in the Password field",
      "stepDescription": "Enter snaptest@123 in the Password field"
    },
    {
      "action": "click",
      "selector": ".button-1.login-button",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView", "waitForLoadState"],
      "errorMessage": "Failed to click on Log in button",
      "stepDescription": "Click on Log in button"
    },
    {
      "action": "isVisible",
      "selector": "//header//a[@class='account' and text()='snaptest@yopmail.com']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Logged in email not visible",
      "stepDescription": "Verify that snaptest@yopmail.com is displayed in the header"
    },
    {
      "action": "click",
      "selector": "//ul[@class='top-menu']/li/a[text()='Books']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView", "waitForLoadState"],
      "errorMessage": "Failed to click on Books in the top menu",
      "stepDescription": "Click on Books in the top menu"
    },
    {
      "action": "click",
      "selector": "(//div[@class='item-box']//a)[1]",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView", "waitForLoadState"],
      "errorMessage": "Failed to click on the first product link on the page",
      "stepDescription": "Click on the first product link on the page"
    },
    {
      "action": "click",
      "selector": "#add-to-cart-button-45",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView", "waitForLoadState"],
      "errorMessage": "Failed to click on Add to cart button",
      "stepDescription": "Click on Add to cart button"
    },
    {
      "action": "click",
      "selector": "#topcartlink a",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView", "waitForLoadState"],
      "errorMessage": "Failed to click on Shopping cart link in the header",
      "stepDescription": "Click on Shopping cart link in the header"
    },
    {
      "action": "isVisible",
      "selector": "//div[@class='item first']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Product is not present in the shopping cart",
      "stepDescription": "Verify that the product is present in the shopping cart"
    },
    {
      "action": "check",
      "selector": "#termsofservice",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView", "waitForLoadState"],
      "errorMessage": "Failed to click the Terms of service checkbox",
      "stepDescription": "Click the Terms of service checkbox"
    },
    {
      "action": "click",
      "selector": "#checkout",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView", "waitForLoadState"],
      "errorMessage": "Failed to click on Checkout button",
      "stepDescription": "Click on Checkout button"
    },
    {
      "action": "click",
      "selector": "//input[@title='Continue']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView", "waitForLoadState"],
      "errorMessage": "Failed to click on Continue button in the billing address section",
      "stepDescription": "Click on Continue button in the billing address section"
    },
    {
      "action": "isVisible",
      "selector": "//div[@id='shipping-address-section']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Shipping address section is not displayed",
      "stepDescription": "Verify that the shipping address section is displayed"
    },
    {
      "action": "click",
      "selector": "//input[@onclick='Shipping.save()']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView", "waitForLoadState"],
      "errorMessage": "Failed to click on Continue button in the shipping address section",
      "stepDescription": "Click on Continue button in the shipping address section"
    },
    {
      "action": "isVisible",
      "selector": "//div[@id='shipping-method-buttons-container']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Shipping method section is not displayed",
      "stepDescription": "Verify that the Shipping method section is displayed"
    },
    {
      "action": "click",
      "selector": "//li[@id='li-shipping-method-next-step']/input[@title='Continue']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView", "waitForLoadState"],
      "errorMessage": "Failed to click on Continue button in the Shipping method section",
      "stepDescription": "Click on Continue button in the Shipping method section"
    },
    {
      "action": "isVisible",
      "selector": "//input[@id='paymentmethod_0' and @checked]",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Cash On Delivery is not selected by default in the payment method section",
      "stepDescription": "Verify that Cash On Delivery is selected by default in the payment method section"
    },
    {
      "action": "click",
      "selector": "//li[@id='li-payment-method-next-step']/input[@title='Continue']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView", "waitForLoadState"],
      "errorMessage": "Failed to click on Continue button in the Payment method section",
      "stepDescription": "Click on Continue button in the Payment method section"
    },
    {
      "action": "isVisible",
      "selector": "//span[contains(text(),'You will pay by COD')] ",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "The selected payment method is not displayed in the Payment information section",
      "stepDescription": "Verify that the selected payment method is displayed in the Payment information section"
    },
    {
      "action": "click",
      "selector": "//li[@id='li-payment-information-next-step']/input[@title='Continue']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView", "waitForLoadState"],
      "errorMessage": "Failed to click on Continue button in the Payment information section",
      "stepDescription": "Click on Continue button in the Payment information section"
    },
    {
      "action": "click",
      "selector": "//input[@value='Confirm']",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView", "waitForLoadState"],
      "errorMessage": "Failed to click on Confirm button",
      "stepDescription": "On the confirm order section, click on Confirm button"
    },
    {
      "action": "isVisible",
      "selector": "//div[@class='order-number']/strong",
      "value": null,
      "waitTimeoutMs": 10000,
      "retry": 3,
      "fallbacks": ["scrollIntoView"],
      "errorMessage": "Order number is not shown on the order confirmation page",
      "stepDescription": "Verify that the order number is shown on the order confirmation page"
    }
  ];

  const executedSteps: string[] = [];
  const executionResults: any[] = [];
  let browser: Browser | undefined;
  let totalDuration: number = 0;
  let passedCount: number = 0;
  let failedCount: number = 0;

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

    if (steps.length === 0) {
      executionResults.push({
        step: "No steps",
        status: "error",
        details: "No user steps provided",
        timestamp: Date.now(),
        duration_ms: 0
      });
    } else {
      for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        const stepStartTime = Date.now();
        let stepStatus: "success" | "error" = "success";
        let stepDetails: string = "";

        try {
          executedSteps.push(step.stepDescription);

          switch (step.action) {
            case "goto":
              await page.goto(step.value);
              stepDetails = `Navigated to ${step.value}`;
              break;
            case "click":
              await page.locator(step.selector).click();
              stepDetails = `Clicked ${step.selector}`;
              break;
            case "fill":
              await page.locator(step.selector).fill(step.value);
              stepDetails = `Filled ${step.selector} with ${step.value}`;
              break;
            case "check":
              await page.locator(step.selector).check();
              stepDetails = `Checked ${step.selector}`;
              break;
            case "uncheck":
              await page.locator(step.selector).uncheck();
              stepDetails = `Unchecked ${step.selector}`;
              break;
            case "hover":
              await page.locator(step.selector).hover();
              stepDetails = `Hovered ${step.selector}`;
              break;
            case "waitFor":
              await page.locator(step.selector).waitFor();
              stepDetails = `Waited for ${step.selector}`;
              break;
            case "isVisible":
              const isVisible = await page.locator(step.selector).isVisible();
              stepDetails = `Element ${step.selector} is ${isVisible ? 'visible' : 'not visible'}`;
              break;
            default:
              stepStatus = "error";
              stepDetails = `Unknown action: ${step.action}`;
          }
          passedCount++;
        } catch (error: any) {
          stepStatus = "error";
          stepDetails = error.message || `Step failed: ${step.stepDescription}`;
          failedCount++;
        } finally {
          const stepEndTime = Date.now();
          const stepDuration = stepEndTime - stepStartTime;
          totalDuration += stepDuration;

          executionResults.push({
            step: `Step ${i + 1}`,
            status: stepStatus,
            details: stepDetails,
            timestamp: stepStartTime,
            duration_ms: stepDuration
          });
        }
      }
    }
  } catch (error: any) {
    executionResults.push({
      step: "Setup/Teardown",
      status: "error",
      details: error.message || "Browser setup/teardown failed",
      timestamp: Date.now(),
      duration_ms: 0
    });
    failedCount++;
  } finally {
    if (executionResults.length === 0) {
      executionResults.push({
        step: "No steps",
        status: "error",
        details: "No steps were executed",
        timestamp: Date.now(),
        duration_ms: 0
      });
    }

    const summary = {
      total_steps: steps.length > 0 ? steps.length : 1,
      passed: passedCount,
      failed: failedCount,
      duration_ms: totalDuration
    };

    const results = {
      "user_test_steps": userTestSteps,
      "executed_test_steps": executedSteps,
      "execution_results": executionResults,
      "summary": summary
    };

    fs.writeFileSync('test_result.json', JSON.stringify(results, null, 2));
    if (browser) {
      await browser.close();
    }
    return results;
  }
});
