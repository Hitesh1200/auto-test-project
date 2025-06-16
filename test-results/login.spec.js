const { test, expect } = require('@playwright/test');

test.use({ headless: false });

test('Login to Opinion Edge (Mocked reCAPTCHA)', async ({ page }) => {
    await page.goto('https://devuser.opinion-edge.com/#/login', { waitUntil: 'domcontentloaded' });

    // Optional: Print request URLs to find the CAPTCHA endpoint
    page.on('request', request => {
        console.log('>>', request.method(), request.url());
    });

    // Mock backend reCAPTCHA validation (update the URL to match your backend)
    await page.route('**/api/auth/verify-recaptcha', async route => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({ success: true })
        });
    });

    await page.waitForSelector('input[placeholder="Email"]', { timeout: 10000 });
    await page.fill('input[placeholder="Email"]', 'reliablenagpur15@gmail.com');

    await page.fill('input[placeholder="Password"]', 'Test@123');

    await page.getByRole('button', { name: /login/i }).click();

    await page.waitForURL('**/dashboard', { timeout: 15000 });
    expect(page.url()).toContain('/dashboard');
});
