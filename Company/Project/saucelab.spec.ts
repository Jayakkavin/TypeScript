import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import fs from 'fs';

const USER_TEST_STEPS = [
  "Navigate to https://www.saucedemo.com/.",
  "Enter \"standard_user\" in the username field with xpath //input[@id='user-name']",
  "Enter \"secret_sauce\" in the password field with xpath //input[@id='password']",
  "Click the Login button with xpath //input[@id='login-button']",
  "Wait for the page to load completely using Javascript.",
  "Click on the product sort filter dropdown with xpath //select[@class='product_sort_container']",
  "Select Name (Z to A) option from the sort dropdown with xpath //select[@class='product_sort_container']/option[text()='Name (Z to A)']",
  "Wait for the page to load completely using Javascript.",
  "Locate the product \"Sauce Labs Backpack\" and click the Add to Cart button with xpath //div[contains(@class, 'inventory_item')]//div[contains(text(), 'Sauce Labs Backpack')]/ancestor::div[@class='inventory_item_label']/following-sibling::div[@class='pricebar']/button",
  "Click on the cart icon to verify that the product has been added with xpath //div[@id='shopping_cart_container']/a",
  "Wait for the page to load completely using Javascript.",
  "Ensure that the product is present in the cart with xpath //div[@class='cart_item']//div[@class='inventory_item_name' and text()='Sauce Labs Backpack']",
  "Wait for the page to load completely using Javascript.",
  "Then click on the checkout button with xpath //button[@id='checkout']",
  "Wait for the page to load completely using Javascript.",
  "Enter the first name as chaitanya in the first name field with xpath //input[@id='first-name']",
  "Enter the last name as Kompella in the last name field with xpath //input[@id='last-name']",
  "Enter the postal code as 62567352 in postal code field with xpath //input[@id='postal-code']",
  "Wait for the page to load completely using Javascript.",
  "Click on continue button with xpath //input[@id='continue']",
  "Wait for the page to load completely using Javascript.",
  "Click on finish button with xpath //button[@id='finish']",
  "You should see a message “Thank you for your order!” with xpath //h2[text()='Thank you for your order!']",
  "Wait for the page to load completely using Javascript.",
  "Then click on back to home button with xpath //button[@id='back-to-products']",
  "Wait for the page to load completely using Javascript.",
  "Click to burger bar with xpath //button[@id='react-burger-menu-btn']",
  "Wait for the page to load completely using Javascript.",
  "Click on logout with xpath //a[@id='logout_sidebar_link']",
  "Keep the browser open after the test execution is complete."
];

const testName = 'SauceDemo Test';
const outputFile = 'test-result.json';

test.describe(testName, () => {
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;

  const executionResults: { [step: string]: { status: string; error?: string } } = {};
  const executedSteps: string[] = [];

  const executeStep = async (stepName: string, stepFunction: () => Promise<void>) => {
    try {
      console.log(`Executing step: ${stepName}`);
      await stepFunction();
      executionResults[stepName] = { status: 'passed' };
      executedSteps.push(stepName);
      console.log(`${stepName} - PASSED`);
    } catch (e: any) {
      const errorMessage = e.message || 'An error occurred';
      executionResults[stepName] = { status: 'failed', error: errorMessage };
      console.error(`${stepName} - FAILED: ${errorMessage}`);
      
      try {
          await page.screenshot({ path: `screenshots/${stepName.replace(/[^a-zA-Z0-9]/g, '_')}.png` });
      } catch (screenshotError: any) {
          console.error(`Failed to capture screenshot for ${stepName}: ${screenshotError.message}`);
      }

      fs.writeFileSync(outputFile, JSON.stringify({
        testName: testName,
        steps: USER_TEST_STEPS,
        executedSteps: executedSteps,
        results: executionResults
      }, null, 2));
      
      throw e;
    } finally {
      fs.writeFileSync(outputFile, JSON.stringify({
        testName: testName,
        steps: USER_TEST_STEPS,
        executedSteps: executedSteps,
        results: executionResults
      }, null, 2));
    }
  };

  test.beforeAll(async () => {
    browser = await chromium.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--single-process',
        '--disable-gpu'
      ]
    });
  });

  test.beforeEach(async () => {
    context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
    page = await context.newPage();
    page.setDefaultTimeout(30000);
    page.setDefaultNavigationTimeout(15000);
  });

  test.afterEach(async () => {
    await context.close();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('should perform a complete purchase flow', async () => {
    try {
      await executeStep(USER_TEST_STEPS[0], async () => {
        await page.goto('https://www.saucedemo.com/', { waitUntil: 'networkidle' });
      });

      await executeStep(USER_TEST_STEPS[1], async () => {
        await page.locator('//input[@id=\'user-name\']').waitFor({ timeout: 5000 });
        await page.locator('//input[@id=\'user-name\']').fill('standard_user');
      });

      await executeStep(USER_TEST_STEPS[2], async () => {
        await page.locator('//input[@id=\'password\']').waitFor({ timeout: 5000 });
        await page.locator('//input[@id=\'password\']').fill('secret_sauce');
      });

      await executeStep(USER_TEST_STEPS[3], async () => {
        await page.locator('//input[@id=\'login-button\']').click();
        await page.waitForLoadState('networkidle');
      });

      await executeStep(USER_TEST_STEPS[4], async () => {
        await page.waitForTimeout(1000);
      });

      await executeStep(USER_TEST_STEPS[5], async () => {
        await page.locator('//select[@class=\'product_sort_container\']').click();
      });

      await executeStep(USER_TEST_STEPS[6], async () => {
        await page.locator('//select[@class=\'product_sort_container\']/option[text()=\'Name (Z to A)\']').click();
      });

      await executeStep(USER_TEST_STEPS[7], async () => {
        await page.waitForTimeout(1000);
      });

      await executeStep(USER_TEST_STEPS[8], async () => {
        await page.locator('//div[contains(@class, \'inventory_item\')]//div[contains(text(), \'Sauce Labs Backpack\')]/ancestor::div[@class=\'inventory_item_label\']/following-sibling::div[@class=\'pricebar\']/button').click();
      });

      await executeStep(USER_TEST_STEPS[9], async () => {
        await page.locator('//div[@id=\'shopping_cart_container\']/a').click();
        await page.waitForLoadState('networkidle');
      });

      await executeStep(USER_TEST_STEPS[10], async () => {
        await page.waitForTimeout(1000);
      });

      await executeStep(USER_TEST_STEPS[11], async () => {
        await expect(page.locator('//div[@class=\'cart_item\']//div[@class=\'inventory_item_name\' and text()=\'Sauce Labs Backpack\']')).toBeVisible();
      });

      await executeStep(USER_TEST_STEPS[12], async () => {
        await page.waitForTimeout(1000);
      });

      await executeStep(USER_TEST_STEPS[13], async () => {
        await page.locator('//button[@id=\'checkout\']').click();
        await page.waitForLoadState('networkidle');
      });

      await executeStep(USER_TEST_STEPS[14], async () => {
        await page.waitForTimeout(1000);
      });

      await executeStep(USER_TEST_STEPS[15], async () => {
        await page.locator('//input[@id=\'first-name\']').fill('chaitanya');
      });

      await executeStep(USER_TEST_STEPS[16], async () => {
        await page.locator('//input[@id=\'last-name\']').fill('Kompella');
      });

      await executeStep(USER_TEST_STEPS[17], async () => {
        await page.locator('//input[@id=\'postal-code\']').fill('62567352');
      });

      await executeStep(USER_TEST_STEPS[18], async () => {
        await page.waitForTimeout(1000);
      });

      await executeStep(USER_TEST_STEPS[19], async () => {
        await page.locator('//input[@id=\'continue\']').click();
        await page.waitForLoadState('networkidle');
      });

      await executeStep(USER_TEST_STEPS[20], async () => {
        await page.waitForTimeout(1000);
      });

      await executeStep(USER_TEST_STEPS[21], async () => {
        await page.locator('//button[@id=\'finish\']').click();
      });

      await executeStep(USER_TEST_STEPS[22], async () => {
        await expect(page.locator('//h2[text()=\'Thank you for your order!\']')).toBeVisible();
      });

      await executeStep(USER_TEST_STEPS[23], async () => {
        await page.waitForTimeout(1000);
      });

      await executeStep(USER_TEST_STEPS[24], async () => {
        await page.locator('//button[@id=\'back-to-products\']').click();
      });

      await executeStep(USER_TEST_STEPS[25], async () => {
        await page.waitForTimeout(1000);
      });

      await executeStep(USER_TEST_STEPS[26], async () => {
        await page.locator('//button[@id=\'react-burger-menu-btn\']').click();
      });

      await executeStep(USER_TEST_STEPS[27], async () => {
        await page.waitForTimeout(1000);
      });

      await executeStep(USER_TEST_STEPS[28], async () => {
        await page.locator('//a[@id=\'logout_sidebar_link\']').click();
      });

      await executeStep(USER_TEST_STEPS[29], async () => {
        console.log('Test completed successfully. Browser will remain open.');
      });

    } catch (error) {
      console.error('Test failed:', error);
      fs.writeFileSync(outputFile, JSON.stringify({
        testName: testName,
        steps: USER_TEST_STEPS,
        executedSteps: executedSteps,
        results: executionResults
      }, null, 2));
      throw error;
    } finally {
      fs.writeFileSync(outputFile, JSON.stringify({
        testName: testName,
        steps: USER_TEST_STEPS,
        executedSteps: executedSteps,
        results: executionResults
      }, null, 2));
    }
  });
});
