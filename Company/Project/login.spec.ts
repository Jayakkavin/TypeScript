import { test, expect, chromium, Browser, Page, BrowserContext } from "@playwright/test";

test.setTimeout(12000);

test('Generated Test', async () => {
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
    "Wait for the add to cart success message",
    "Click on Shopping cart link in the header",
    "Verify that the product is present in the shopping cart",
    "Check the Terms of service checkbox",
    "Click on Checkout button",
    "Click Continue button in the billing address section",
    "Verify that the shipping address section is displayed",
    "Click Continue button in the shipping address section",
    "Verify that the Shipping method section is displayed",
    "Click Continue button in the Shipping method section",
    "Verify that Cash On Delivery is selected by default",
    "Click Continue button in the Payment method section",
    "Verify that the Payment information section is displayed",
    "Click Continue button in the Payment information section",
    "Click Confirm button on the confirm order section",
    "Verify that the order number is shown on the order confirmation page"
  ];
  const executedSteps: string[] = [];
  const executionResults: any[] = [];
  let totalDuration = 0;
  let passed = 0;
  let failed = 0;
  let failureOccurs = false;

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

  for (let i = 0; i < userTestSteps.length; i++) {
    const step = `Step ${i + 1}`;
    let status = 'success';
    let details = '';
    const startTime = performance.now();

    try {
      switch (i) {
        case 0:
          await page.goto("https://demowebshop.tricentis.com", { timeout: 30000, waitUntil: 'load' });
          details = "Navigated to https://demowebshop.tricentis.com";
          break;
        case 1:
          await page.locator("//a[text()='Log in']").click();
          details = "Clicked //a[text()='Log in']";
          break;
        case 2:
          await page.locator("#Email").fill("snaptest@yopmail.com");
          details = "Filled #Email";
          break;
        case 3:
          await page.locator("#Password").fill("snaptest@123");
          details = "Filled #Password";
          break;
        case 4:
          await page.locator("//input[@value='Log in']").click();
          details = "Clicked //input[@value='Log in']";
          break;
        case 5:
          await page.locator("//a[text()='snaptest@yopmail.com']").waitFor({ state: 'visible' });
          details = "Waited for //a[text()='snaptest@yopmail.com']";
          break;
        case 6:
          await page.locator("//a[text()='Books']").click();
          details = "Clicked //a[text()='Books']";
          break;
        case 7:
          await page.locator("//div[@class='item-box'][1]//a[@href and @title]").click();
          details = "Clicked //div[@class='item-box'][1]//a[@href and @title]";
          break;
        case 8:
          await page.locator("#add-to-cart-button-45").click();
          details = "Clicked #add-to-cart-button-45";
          break;
        case 9:
          await page.locator("//p[@class='content' and contains(text(),'The product has been added to your ')]").waitFor({ state: 'visible' });
          details = "Waited for //p[@class='content' and contains(text(),'The product has been added to your ')]";
          break;
        case 10:
          await page.locator("//span[@class='cart-label']").click();
          details = "Clicked //span[@class='cart-label']";
          break;
        case 11:
          await page.locator("//a[@class='product-name']").waitFor({ state: 'visible' });
          details = "Waited for //a[@class='product-name']";
          break;
        case 12:
          await page.locator("#termsofservice").check();
          details = "Checked #termsofservice";
          break;
        case 13:
          await page.locator("#checkout").click();
          details = "Clicked #checkout";
          break;
        case 14:
          await page.locator("//input[@title='Continue']").click();
          details = "Clicked //input[@title='Continue']";
          break;
        case 15:
          await page.locator("//div[@id='shipping-buttons-container']").waitFor({ state: 'visible' });
          details = "Waited for //div[@id='shipping-buttons-container']";
          break;
        case 16:
          await page.locator("//input[@onclick='Shipping.save()']").click();
          details = "Clicked //input[@onclick='Shipping.save()']";
          break;
        case 17:
          await page.locator("//div[@id='shipping-method-buttons-container']").waitFor({ state: 'visible' });
          details = "Waited for //div[@id='shipping-method-buttons-container']";
          break;
        case 18:
          await page.locator("//input[@onclick='ShippingMethod.save()']").click();
          details = "Clicked //input[@onclick='ShippingMethod.save()']";
          break;
        case 19:
          await page.locator("//li[@class='payment-method']/label[contains(text(),'Cash On Delivery')]").waitFor({ state: 'visible' });
          details = "Waited for //li[@class='payment-method']/label[contains(text(),'Cash On Delivery')]";
          break;
        case 20:
          await page.locator("//input[@onclick='PaymentMethod.save()']").click();
          details = "Clicked //input[@onclick='PaymentMethod.save()']";
          break;
        case 21:
          await page.locator("//div[@id='payment-info-buttons-container']").waitFor({ state: 'visible' });
          details = "Waited for //div[@id='payment-info-buttons-container']";
          break;
        case 22:
          await page.locator("//input[@onclick='PaymentInfo.save()']").click();
          details = "Clicked //input[@onclick='PaymentInfo.save()']";
          break;
        case 23:
          await page.locator("//input[@value='Confirm']").click();
          details = "Clicked //input[@value='Confirm']";
          break;
        case 24:
          await page.locator("//div[@class='section order-completed']/div[@class='title']/strong").waitFor({ state: 'visible' });
          details = "Waited for //div[@class='section order-completed']/div[@class='title']/strong";
          break;
      }
    } catch (error: any) {
      status = 'error';
      details = error.message;
      failed++;
      failureOccurs = true;
      const endTime = performance.now();
      const duration = endTime - startTime;
      totalDuration += duration;

      executedSteps.push(userTestSteps[i]);
      executionResults.push({
        step: step,
        status: status,
        details: details,
        timestamp: new Date().toISOString(),
        duration_ms: duration
      });

      await browser.close();

      const summary = {
        total_steps: userTestSteps.length,
        passed: i - failed,
        failed: failed,
        duration_ms: totalDuration
      };

      return {
        user_test_steps: userTestSteps,
        executed_test_steps: executedSteps,
        execution_results: executionResults,
        summary: summary
      };
    }

    const endTime = performance.now();
    const duration = endTime - startTime;
    totalDuration += duration;

    executedSteps.push(userTestSteps[i]);
    executionResults.push({
      step: step,
      status: status,
      details: details,
      timestamp: new Date().toISOString(),
      duration_ms: duration
    });

    if (status === 'success') {
      passed++;
    } else {
      failed++;
    }
  }

  await browser.close();

  const summary = {
    total_steps: userTestSteps.length,
    passed: passed,
    failed: failed,
    duration_ms: totalDuration
  };

  return {
    user_test_steps: userTestSteps,
    executed_test_steps: executedSteps,
    execution_results: executionResults,
    summary: summary
  };
});
