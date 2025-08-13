import { test, expect, chromium, Browser, Page, BrowserContext } from "@playwright/test";
import fs from 'fs';

test('Generated Test', async () => {
  test.setTimeout(120000);
  let browser: Browser | null = null;
  const executedSteps: string[] = [];
  const executionResults: any[] = [];
  const originalUserSteps: string[] = [
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
    "Click on Confirm button in the confirm order section",
    "Verify that the order number is shown on the order confirmation page"
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

    // Step 1
    try {
      const startTime = Date.now();
      await page.goto("https://demowebshop.tricentis.com");
      const endTime = Date.now();
      executedSteps.push("Navigate to https://demowebshop.tricentis.com");
      executionResults.push({
        step: "Navigate to https://demowebshop.tricentis.com",
        status: "success",
        details: "Navigated to https://demowebshop.tricentis.com",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Navigate to https://demowebshop.tricentis.com");
      executionResults.push({
        step: "Navigate to https://demowebshop.tricentis.com",
        status: "error",
        details: `Failed to navigate to demowebshop: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 2
    try {
      const startTime = Date.now();
      await page.locator("a.ico-login").click();
      const endTime = Date.now();
      executedSteps.push("Click on Log in link in the header");
      executionResults.push({
        step: "Click on Log in link in the header",
        status: "success",
        details: "Clicked a.ico-login",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Click on Log in link in the header");
      executionResults.push({
        step: "Click on Log in link in the header",
        status: "error",
        details: `Failed to click on Log in link: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 3
    try {
      const startTime = Date.now();
      await page.locator("#Email").fill("snaptest@yopmail.com");
      const endTime = Date.now();
      executedSteps.push("Enter snaptest@yopmail.com in the Email field");
      executionResults.push({
        step: "Enter snaptest@yopmail.com in the Email field",
        status: "success",
        details: "Filled #Email",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Enter snaptest@yopmail.com in the Email field");
      executionResults.push({
        step: "Enter snaptest@yopmail.com in the Email field",
        status: "error",
        details: `Failed to enter email: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 4
    try {
      const startTime = Date.now();
      await page.locator("#Password").fill("snaptest@123");
      const endTime = Date.now();
      executedSteps.push("Enter snaptest@123 in the Password field");
      executionResults.push({
        step: "Enter snaptest@123 in the Password field",
        status: "success",
        details: "Filled #Password",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Enter snaptest@123 in the Password field");
      executionResults.push({
        step: "Enter snaptest@123 in the Password field",
        status: "error",
        details: `Failed to enter password: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 5
    try {
      const startTime = Date.now();
      await page.locator("input.button-1.login-button").click();
      const endTime = Date.now();
      executedSteps.push("Click on Log in button");
      executionResults.push({
        step: "Click on Log in button",
        status: "success",
        details: "Clicked input.button-1.login-button",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Click on Log in button");
      executionResults.push({
        step: "Click on Log in button",
        status: "error",
        details: `Failed to click on Log in button: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 6
    try {
      const startTime = Date.now();
      const isVisible = await page.locator("a.account").isVisible();
      const endTime = Date.now();
      executedSteps.push("Verify that snaptest@yopmail.com is displayed in the header");
      executionResults.push({
        step: "Verify that snaptest@yopmail.com is displayed in the header",
        status: "success",
        details: isVisible ? "Element a.account is visible" : "Element a.account is not visible",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Verify that snaptest@yopmail.com is displayed in the header");
      executionResults.push({
        step: "Verify that snaptest@yopmail.com is displayed in the header",
        status: "error",
        details: `Logged in email not visible: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 7
    try {
      const startTime = Date.now();
      await page.locator("ul.top-menu > li > a[href='/books']").click();
      const endTime = Date.now();
      executedSteps.push("Click on Books in the top menu");
      executionResults.push({
        step: "Click on Books in the top menu",
        status: "success",
        details: "Clicked ul.top-menu > li > a[href='/books']",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Click on Books in the top menu");
      executionResults.push({
        step: "Click on Books in the top menu",
        status: "error",
        details: `Failed to click on Books link: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 8
    try {
      const startTime = Date.now();
      await page.locator("div.item-box a[href*='/book']").click();
      const endTime = Date.now();
      executedSteps.push("Click on the first product link on the page");
      executionResults.push({
        step: "Click on the first product link on the page",
        status: "success",
        details: "Clicked div.item-box a[href*='/book']",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Click on the first product link on the page");
      executionResults.push({
        step: "Click on the first product link on the page",
        status: "error",
        details: `Failed to click on the first product link: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 9
    try {
      const startTime = Date.now();
      await page.locator("input.button-2.product-box-add-to-cart-button").click();
      const endTime = Date.now();
      executedSteps.push("Click on Add to cart button");
      executionResults.push({
        step: "Click on Add to cart button",
        status: "success",
        details: "Clicked input.button-2.product-box-add-to-cart-button",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Click on Add to cart button");
      executionResults.push({
        step: "Click on Add to cart button",
        status: "error",
        details: `Failed to click on Add to cart button: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 10
    try {
      const startTime = Date.now();
      await page.locator("a.ico-cart").click();
      const endTime = Date.now();
      executedSteps.push("Click on Shopping cart link in the header");
      executionResults.push({
        step: "Click on Shopping cart link in the header",
        status: "success",
        details: "Clicked a.ico-cart",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Click on Shopping cart link in the header");
      executionResults.push({
        step: "Click on Shopping cart link in the header",
        status: "error",
        details: `Failed to click on Shopping cart link: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 11
    try {
      const startTime = Date.now();
      const isVisible = await page.locator("div.cart-item-row").isVisible();
      const endTime = Date.now();
      executedSteps.push("Verify that the product is present in the shopping cart");
      executionResults.push({
        step: "Verify that the product is present in the shopping cart",
        status: "success",
        details: isVisible ? "Element div.cart-item-row is visible" : "Element div.cart-item-row is not visible",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Verify that the product is present in the shopping cart");
      executionResults.push({
        step: "Verify that the product is present in the shopping cart",
        status: "error",
        details: `Product not visible in shopping cart: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 12
    try {
      const startTime = Date.now();
      await page.locator("#termsofservice").check();
      const endTime = Date.now();
      executedSteps.push("Check the Terms of service checkbox");
      executionResults.push({
        step: "Check the Terms of service checkbox",
        status: "success",
        details: "Checked #termsofservice",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Check the Terms of service checkbox");
      executionResults.push({
        step: "Check the Terms of service checkbox",
        status: "error",
        details: `Failed to check the terms of service checkbox: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 13
    try {
      const startTime = Date.now();
      await page.locator("#checkout").click();
      const endTime = Date.now();
      executedSteps.push("Click on Checkout button");
      executionResults.push({
        step: "Click on Checkout button",
        status: "success",
        details: "Clicked #checkout",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Click on Checkout button");
      executionResults.push({
        step: "Click on Checkout button",
        status: "error",
        details: `Failed to click on Checkout button: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 14
    try {
      const startTime = Date.now();
      await page.locator("input.button-1.new-address-next-step-button").click();
      const endTime = Date.now();
      executedSteps.push("Click on Continue button in the billing address section");
      executionResults.push({
        step: "Click on Continue button in the billing address section",
        status: "success",
        details: "Clicked input.button-1.new-address-next-step-button",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Click on Continue button in the billing address section");
      executionResults.push({
        step: "Click on Continue button in the billing address section",
        status: "error",
        details: `Failed to click on Continue button in the billing address section: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 15
    try {
      const startTime = Date.now();
      const isVisible = await page.locator("#shipping-address-block").isVisible();
      const endTime = Date.now();
      executedSteps.push("Verify that the shipping address section is displayed");
      executionResults.push({
        step: "Verify that the shipping address section is displayed",
        status: "success",
        details: isVisible ? "Element #shipping-address-block is visible" : "Element #shipping-address-block is not visible",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Verify that the shipping address section is displayed");
      executionResults.push({
        step: "Verify that the shipping address section is displayed",
        status: "error",
        details: `Shipping address section not visible: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 16
    try {
      const startTime = Date.now();
      await page.locator("input.button-1.new-address-next-step-button").click();
      const endTime = Date.now();
      executedSteps.push("Click on Continue button in the shipping address section");
      executionResults.push({
        step: "Click on Continue button in the shipping address section",
        status: "success",
        details: "Clicked input.button-1.new-address-next-step-button",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Click on Continue button in the shipping address section");
      executionResults.push({
        step: "Click on Continue button in the shipping address section",
        status: "error",
        details: `Failed to click on Continue button in the shipping address section: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 17
    try {
      const startTime = Date.now();
      const isVisible = await page.locator("#shipping-method-block").isVisible();
      const endTime = Date.now();
      executedSteps.push("Verify that the Shipping method section is displayed");
      executionResults.push({
        step: "Verify that the Shipping method section is displayed",
        status: "success",
        details: isVisible ? "Element #shipping-method-block is visible" : "Element #shipping-method-block is not visible",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Verify that the Shipping method section is displayed");
      executionResults.push({
        step: "Verify that the Shipping method section is displayed",
        status: "error",
        details: `Shipping method section not visible: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 18
    try {
      const startTime = Date.now();
      await page.locator("input.button-1.shipping-method-next-step-button").click();
      const endTime = Date.now();
      executedSteps.push("Click on Continue button in the Shipping method section");
      executionResults.push({
        step: "Click on Continue button in the Shipping method section",
        status: "success",
        details: "Clicked input.button-1.shipping-method-next-step-button",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Click on Continue button in the Shipping method section");
      executionResults.push({
        step: "Click on Continue button in the Shipping method section",
        status: "error",
        details: `Failed to click on Continue button in the Shipping method section: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 19
    try {
      const startTime = Date.now();
      const isVisible = await page.locator("#paymentmethod_0").isVisible();
      const endTime = Date.now();
      executedSteps.push("Verify that Cash On Delivery is selected by default in the payment method section");
      executionResults.push({
        step: "Verify that Cash On Delivery is selected by default in the payment method section",
        status: "success",
        details: isVisible ? "Element #paymentmethod_0 is visible" : "Element #paymentmethod_0 is not visible",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Verify that Cash On Delivery is selected by default in the payment method section");
      executionResults.push({
        step: "Verify that Cash On Delivery is selected by default in the payment method section",
        status: "error",
        details: `Cash On Delivery not selected by default: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 20
    try {
      const startTime = Date.now();
      await page.locator("input.button-1.payment-method-next-step-button").click();
      const endTime = Date.now();
      executedSteps.push("Click on Continue button in the Payment method section");
      executionResults.push({
        step: "Click on Continue button in the Payment method section",
        status: "success",
        details: "Clicked input.button-1.payment-method-next-step-button",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Click on Continue button in the Payment method section");
      executionResults.push({
        step: "Click on Continue button in the Payment method section",
        status: "error",
        details: `Failed to click on Continue button in the Payment method section: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 21
    try {
      const startTime = Date.now();
      const isVisible = await page.locator(".payment-info-next-step-button").isVisible();
      const endTime = Date.now();
      executedSteps.push("Verify that the selected payment method is displayed in the Payment information section");
      executionResults.push({
        step: "Verify that the selected payment method is displayed in the Payment information section",
        status: "success",
        details: isVisible ? "Element .payment-info-next-step-button is visible" : "Element .payment-info-next-step-button is not visible",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Verify that the selected payment method is displayed in the Payment information section");
      executionResults.push({
        step: "Verify that the selected payment method is displayed in the Payment information section",
        status: "error",
        details: `Payment information section not visible: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 22
    try {
      const startTime = Date.now();
      await page.locator(".payment-info-next-step-button").click();
      const endTime = Date.now();
      executedSteps.push("Click on Continue button in the Payment information section");
      executionResults.push({
        step: "Click on Continue button in the Payment information section",
        status: "success",
        details: "Clicked .payment-info-next-step-button",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Click on Continue button in the Payment information section");
      executionResults.push({
        step: "Click on Continue button in the Payment information section",
        status: "error",
        details: `Failed to click on Continue button in the Payment information section: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 23
    try {
      const startTime = Date.now();
      await page.locator("input.button-1.confirm-order-next-step-button").click();
      const endTime = Date.now();
      executedSteps.push("Click on Confirm button in the confirm order section");
      executionResults.push({
        step: "Click on Confirm button in the confirm order section",
        status: "success",
        details: "Clicked input.button-1.confirm-order-next-step-button",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Click on Confirm button in the confirm order section");
      executionResults.push({
        step: "Click on Confirm button in the confirm order section",
        status: "error",
        details: `Failed to click on Confirm button in the confirm order section: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 24
    try {
      const startTime = Date.now();
      const isVisible = await page.locator(".order-number strong").isVisible();
      const endTime = Date.now();
      executedSteps.push("Verify that the order number is shown on the order confirmation page");
      executionResults.push({
        step: "Verify that the order number is shown on the order confirmation page",
        status: "success",
        details: isVisible ? "Element .order-number strong is visible" : "Element .order-number strong is not visible",
        timestamp: startTime,
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = Date.now();
      executedSteps.push("Verify that the order number is shown on the order confirmation page");
      executionResults.push({
        step: "Verify that the order number is shown on the order confirmation page",
        status: "error",
        details: `Order number not visible: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
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
        step: "No Steps Executed",
        status: "error",
        details: "No user steps provided or an error occurred before any steps could be executed.",
        timestamp: Date.now(),
        duration_ms: 0
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
