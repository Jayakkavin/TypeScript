import { test, expect, chromium, Browser, Page, BrowserContext } from "@playwright/test";

test('Generated Test', async () => {
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
    "Click the Terms of service checkbox",
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

  try {
    test.setTimeout(120000);

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
    let startTime = performance.now();
    try {
      await page.goto("https://demowebshop.tricentis.com");
      const endTime = performance.now();
      executedSteps.push("Navigate to https://demowebshop.tricentis.com");
      executionResults.push({
        step: "Navigate to https://demowebshop.tricentis.com",
        status: "success",
        details: "Navigated to https://demowebshop.tricentis.com",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Navigate to https://demowebshop.tricentis.com");
      executionResults.push({
        step: "Navigate to https://demowebshop.tricentis.com",
        status: "error",
        details: `Error navigating to https://demowebshop.tricentis.com: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 2
    startTime = performance.now();
    try {
      await page.locator("a[href='/login']").click();
      const endTime = performance.now();
      executedSteps.push("Click on Log in link in the header");
      executionResults.push({
        step: "Click on Log in link in the header",
        status: "success",
        details: "Clicked a[href='/login']",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Click on Log in link in the header");
      executionResults.push({
        step: "Click on Log in link in the header",
        status: "error",
        details: `Error clicking a[href='/login']: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 3
    startTime = performance.now();
    try {
      await page.locator("#Email").fill("snaptest@yopmail.com");
      const endTime = performance.now();
      executedSteps.push("Enter snaptest@yopmail.com in the Email field");
      executionResults.push({
        step: "Enter snaptest@yopmail.com in the Email field",
        status: "success",
        details: "Filled #Email",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Enter snaptest@yopmail.com in the Email field");
      executionResults.push({
        step: "Enter snaptest@yopmail.com in the Email field",
        status: "error",
        details: `Error filling #Email: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 4
    startTime = performance.now();
    try {
      await page.locator("#Password").fill("snaptest@123");
      const endTime = performance.now();
      executedSteps.push("Enter snaptest@123 in the Password field");
      executionResults.push({
        step: "Enter snaptest@123 in the Password field",
        status: "success",
        details: "Filled #Password",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Enter snaptest@123 in the Password field");
      executionResults.push({
        step: "Enter snaptest@123 in the Password field",
        status: "error",
        details: `Error filling #Password: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 5
    startTime = performance.now();
    try {
      await page.locator("input.button-1.login-button").click();
      const endTime = performance.now();
      executedSteps.push("Click on Log in button");
      executionResults.push({
        step: "Click on Log in button",
        status: "success",
        details: "Clicked input.button-1.login-button",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Click on Log in button");
      executionResults.push({
        step: "Click on Log in button",
        status: "error",
        details: `Error clicking input.button-1.login-button: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 6
    startTime = performance.now();
    try {
      const isVisible = await page.locator("a.account").isVisible();
      const endTime = performance.now();
      executedSteps.push("Verify that snaptest@yopmail.com is displayed in the header");
      const elementText = await page.locator("a.account").innerText();
      const expectedValue = "snaptest@yopmail.com";
      const status = elementText === expectedValue ? "success" : "error";
      const details = isVisible ? `Element a.account is visible and has text "${elementText}"` : "Element a.account is not visible";
      executionResults.push({
        step: "Verify that snaptest@yopmail.com is displayed in the header",
        status: status,
        details: details,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Verify that snaptest@yopmail.com is displayed in the header");
      executionResults.push({
        step: "Verify that snaptest@yopmail.com is displayed in the header",
        status: "error",
        details: `Error verifying visibility of a.account: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 7
    startTime = performance.now();
    try {
      await page.locator("a[href='/books']").click();
      const endTime = performance.now();
      executedSteps.push("Click on Books in the top menu");
      executionResults.push({
        step: "Click on Books in the top menu",
        status: "success",
        details: "Clicked a[href='/books']",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Click on Books in the top menu");
      executionResults.push({
        step: "Click on Books in the top menu",
        status: "error",
        details: `Error clicking a[href='/books']: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 8
    startTime = performance.now();
    try {
      await page.locator("div.item-box a[href*='/book']").nth(0).click();
      const endTime = performance.now();
      executedSteps.push("Click on the first product link on the page");
      executionResults.push({
        step: "Click on the first product link on the page",
        status: "success",
        details: "Clicked div.item-box a[href*='/book'] at index 0",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Click on the first product link on the page");
      executionResults.push({
        step: "Click on the first product link on the page",
        status: "error",
        details: `Error clicking div.item-box a[href*='/book']: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 9
    startTime = performance.now();
    try {
      await page.locator("input.button-2.product-box-add-to-cart-button").click();
      const endTime = performance.now();
      executedSteps.push("Click on Add to cart button");
      executionResults.push({
        step: "Click on Add to cart button",
        status: "success",
        details: "Clicked input.button-2.product-box-add-to-cart-button",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Click on Add to cart button");
      executionResults.push({
        step: "Click on Add to cart button",
        status: "error",
        details: `Error clicking input.button-2.product-box-add-to-cart-button: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 10
    startTime = performance.now();
    try {
      await page.locator("a.ico-cart").click();
      const endTime = performance.now();
      executedSteps.push("Click on Shopping cart link in the header");
      executionResults.push({
        step: "Click on Shopping cart link in the header",
        status: "success",
        details: "Clicked a.ico-cart",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Click on Shopping cart link in the header");
      executionResults.push({
        step: "Click on Shopping cart link in the header",
        status: "error",
        details: `Error clicking a.ico-cart: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 11
    startTime = performance.now();
    try {
      const isVisible = await page.locator("div.cart-item-row").isVisible();
      const endTime = performance.now();
      executedSteps.push("Verify that the product is present in the shopping cart");
      executionResults.push({
        step: "Verify that the product is present in the shopping cart",
        status: isVisible ? "success" : "error",
        details: isVisible ? "Element div.cart-item-row is visible" : "Element div.cart-item-row is not visible",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Verify that the product is present in the shopping cart");
      executionResults.push({
        step: "Verify that the product is present in the shopping cart",
        status: "error",
        details: `Error verifying visibility of div.cart-item-row: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 12
    startTime = performance.now();
    try {
      await page.locator("#termsofservice").click();
      const endTime = performance.now();
      executedSteps.push("Click the Terms of service checkbox");
      executionResults.push({
        step: "Click the Terms of service checkbox",
        status: "success",
        details: "Clicked #termsofservice",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Click the Terms of service checkbox");
      executionResults.push({
        step: "Click the Terms of service checkbox",
        status: "error",
        details: `Error clicking #termsofservice: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 13
    startTime = performance.now();
    try {
      await page.locator("#checkout").click();
      const endTime = performance.now();
      executedSteps.push("Click on Checkout button");
      executionResults.push({
        step: "Click on Checkout button",
        status: "success",
        details: "Clicked #checkout",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Click on Checkout button");
      executionResults.push({
        step: "Click on Checkout button",
        status: "error",
        details: `Error clicking #checkout: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 14
    startTime = performance.now();
    try {
      await page.locator("input.button-1.new-address-next-step-button").click();
      const endTime = performance.now();
      executedSteps.push("Click on Continue button in the billing address section");
      executionResults.push({
        step: "Click on Continue button in the billing address section",
        status: "success",
        details: "Clicked input.button-1.new-address-next-step-button",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Click on Continue button in the billing address section");
      executionResults.push({
        step: "Click on Continue button in the billing address section",
        status: "error",
        details: `Error clicking input.button-1.new-address-next-step-button: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 15
    startTime = performance.now();
    try {
      const isVisible = await page.locator("#shipping-buttons-container").isVisible();
      const endTime = performance.now();
      executedSteps.push("Verify that the shipping address section is displayed");
      executionResults.push({
        step: "Verify that the shipping address section is displayed",
        status: isVisible ? "success" : "error",
        details: isVisible ? "Element #shipping-buttons-container is visible" : "Element #shipping-buttons-container is not visible",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Verify that the shipping address section is displayed");
      executionResults.push({
        step: "Verify that the shipping address section is displayed",
        status: "error",
        details: `Error verifying visibility of #shipping-buttons-container: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 16
    startTime = performance.now();
    try {
      await page.locator("input.button-1.shipping-address-next-step-button").click();
      const endTime = performance.now();
      executedSteps.push("Click on Continue button in the shipping address section");
      executionResults.push({
        step: "Click on Continue button in the shipping address section",
        status: "success",
        details: "Clicked input.button-1.shipping-address-next-step-button",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Click on Continue button in the shipping address section");
      executionResults.push({
        step: "Click on Continue button in the shipping address section",
        status: "error",
        details: `Error clicking input.button-1.shipping-address-next-step-button: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 17
    startTime = performance.now();
    try {
      const isVisible = await page.locator("#shipping-method-buttons-container").isVisible();
      const endTime = performance.now();
      executedSteps.push("Verify that the Shipping method section is displayed");
      executionResults.push({
        step: "Verify that the Shipping method section is displayed",
        status: isVisible ? "success" : "error",
        details: isVisible ? "Element #shipping-method-buttons-container is visible" : "Element #shipping-method-buttons-container is not visible",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Verify that the Shipping method section is displayed");
      executionResults.push({
        step: "Verify that the Shipping method section is displayed",
        status: "error",
        details: `Error verifying visibility of #shipping-method-buttons-container: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 18
    startTime = performance.now();
    try {
      await page.locator("input.button-1.shipping-method-next-step-button").click();
      const endTime = performance.now();
      executedSteps.push("Click on Continue button in the Shipping method section");
      executionResults.push({
        step: "Click on Continue button in the Shipping method section",
        status: "success",
        details: "Clicked input.button-1.shipping-method-next-step-button",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Click on Continue button in the Shipping method section");
      executionResults.push({
        step: "Click on Continue button in the Shipping method section",
        status: "error",
        details: `Error clicking input.button-1.shipping-method-next-step-button: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 19
    startTime = performance.now();
    try {
      const isVisible = await page.locator("#payment-method-block").isVisible();
      const endTime = performance.now();
      executedSteps.push("Verify that Cash On Delivery is selected by default in the payment method section");
      executionResults.push({
        step: "Verify that Cash On Delivery is selected by default in the payment method section",
        status: isVisible ? "success" : "error",
        details: isVisible ? "Element #payment-method-block is visible" : "Element #payment-method-block is not visible",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Verify that Cash On Delivery is selected by default in the payment method section");
      executionResults.push({
        step: "Verify that Cash On Delivery is selected by default in the payment method section",
        status: "error",
        details: `Error verifying visibility of #payment-method-block: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 20
    startTime = performance.now();
    try {
      await page.locator("input.button-1.payment-method-next-step-button").click();
      const endTime = performance.now();
      executedSteps.push("Click on Continue button in the payment method section");
      executionResults.push({
        step: "Click on Continue button in the payment method section",
        status: "success",
        details: "Clicked input.button-1.payment-method-next-step-button",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Click on Continue button in the payment method section");
      executionResults.push({
        step: "Click on Continue button in the payment method section",
        status: "error",
        details: `Error clicking input.button-1.payment-method-next-step-button: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 21
    startTime = performance.now();
    try {
      const isVisible = await page.locator("#payment-info-buttons-container").isVisible();
      const endTime = performance.now();
      executedSteps.push("Verify that the selected payment method is displayed in the Payment information section");
      executionResults.push({
        step: "Verify that the selected payment method is displayed in the Payment information section",
        status: isVisible ? "success" : "error",
        details: isVisible ? "Element #payment-info-buttons-container is visible" : "Element #payment-info-buttons-container is not visible",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Verify that the selected payment method is displayed in the Payment information section");
      executionResults.push({
        step: "Verify that the selected payment method is displayed in the Payment information section",
        status: "error",
        details: `Error verifying visibility of #payment-info-buttons-container: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 22
    startTime = performance.now();
    try {
      await page.locator("input.button-1.payment-info-next-step-button").click();
      const endTime = performance.now();
      executedSteps.push("Click on Continue button in the Payment information section");
      executionResults.push({
        step: "Click on Continue button in the Payment information section",
        status: "success",
        details: "Clicked input.button-1.payment-info-next-step-button",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Click on Continue button in the Payment information section");
      executionResults.push({
        step: "Click on Continue button in the Payment information section",
        status: "error",
        details: `Error clicking input.button-1.payment-info-next-step-button: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 23
    startTime = performance.now();
    try {
      await page.locator("input.button-1.confirm-order-next-step-button").click();
      const endTime = performance.now();
      executedSteps.push("On the confirm order section, click on Confirm button");
      executionResults.push({
        step: "On the confirm order section, click on Confirm button",
        status: "success",
        details: "Clicked input.button-1.confirm-order-next-step-button",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("On the confirm order section, click on Confirm button");
      executionResults.push({
        step: "On the confirm order section, click on Confirm button",
        status: "error",
        details: `Error clicking input.button-1.confirm-order-next-step-button: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

    // Step 24
    startTime = performance.now();
    try {
      const isVisible = await page.locator("div.order-completed p strong").isVisible();
      const endTime = performance.now();
      executedSteps.push("Verify that the order number is shown on the order confirmation page");
      executionResults.push({
        step: "Verify that the order number is shown on the order confirmation page",
        status: isVisible ? "success" : "error",
        details: isVisible ? "Element div.order-completed p strong is visible" : "Element div.order-completed p strong is not visible",
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    } catch (error: any) {
      const endTime = performance.now();
      executedSteps.push("Verify that the order number is shown on the order confirmation page");
      executionResults.push({
        step: "Verify that the order number is shown on the order confirmation page",
        status: "error",
        details: `Error verifying visibility of div.order-completed p strong: ${error.message}`,
        timestamp: Date.now(),
        duration_ms: endTime - startTime
      });
    }

  } catch (criticalError: any) {
    // Handle any critical errors that stop the entire test
    executionResults.push({
      step: "Test Execution Error",
      status: "error",
      details: `Critical error occurred: ${criticalError.message}`,
      timestamp: Date.now(),
      duration_ms: 0
    });
  } finally {
    // Cleanup browser
    if (browser) {
      await browser.close();
    }

    // Calculate summary
    const totalDuration = executionResults.reduce((sum, r) => sum + r.duration_ms, 0);

    // ALWAYS return results, even on failure
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
