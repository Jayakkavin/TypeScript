import { test, expect } from '@playwright/test';

test('login workflow', async ({ page }) => {
  // 1️⃣ Go to the login page
  await page.goto('https://www.google.com/');

  // 2️⃣ Fill in credentials (replace with real selectors/user-data)
  const username = process.env.TEST_USER || 'testuser';
  const password = process.env.TEST_PASS || 'testpass';

  try {
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').fill(password);

    // 3️⃣ Click login button
    await page.getByRole('button', { name: /log in/i }).click();

    // 4️⃣ Assert successful navigation or welcome message
    await expect(page.locator('.welcome-message')).toHaveText(/Welcome,\s+.*!/, { timeout: 5000 });
  } catch (error) {
    console.error('Test failed:', error);
    throw error;
  }
});
