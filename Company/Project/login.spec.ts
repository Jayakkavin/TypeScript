import { test, expect } from '@playwright/test';

test('login workflow', async ({ page }) => {
  // 1️⃣ Go to the login page
  await page.goto('https://www.google.com/');
  
  // 2️⃣ Fill in credentials (replace with real selectors/user-data)
  await page.getByLabel('Username').fill(process.env.TEST_USER as string);
  await page.getByLabel('Password').fill(process.env.TEST_PASS as string);
  
  // 3️⃣ Click login button
  await page.getByRole('button', { name: 'Log in' }).click();
  
  // 4️⃣ Assert successful navigation or welcome message
  await expect(page.locator('.welcome-message'))
    .toHaveText(/Welcome\,\s+.*!/, { timeout: 5000 });
});
