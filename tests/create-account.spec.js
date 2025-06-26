const { test, expect } = require('@playwright/test');

test('Create Account with all fields on Opinion Edge', async ({ page }) => {
    await page.goto('https://devuser.opinion-edge.com/#/create-account', {
        waitUntil: 'networkidle',
    });

    await page.fill('input[placeholder="Email Id"]', 'reliablenagpur15@gmail.com');
    await page.fill('input[placeholder="First Name"]', 'Hitesh');
    await page.fill('input[placeholder="Last Name"]', 'Chauhan');
    await page.fill('input[placeholder="Password"]', 'Test@123');
    await page.fill('input[placeholder="Confirm Password"]', 'Test@123');
    await page.fill('input[placeholder="Zip Code"]', '122001');
    await page.selectOption('select[formcontrolname="getMonth"]', { label: 'May' });
    await page.selectOption('select[formcontrolname="getYear"]', { label: '1995' });
    await page.selectOption('select[formcontrolname="language"]', { label: 'English-India' });
    await page.selectOption('select[formcontrolname="gender"]', { label: 'Male' });
    await page.selectOption('select[formcontrolname="opinionEdgeHear"]', { label: 'From LinkedIn' });
    await page.check('input[type="checkbox"]');
    await page.click('button:has-text("Create my account")');

    const popupSelector = 'div.swal2-popup';
    try {
        await page.waitForSelector(popupSelector, { timeout: 5000 });

        const possibleSelectors = [
            '.swal2-html-container',
            '.swal2-title',
            '.swal2-content',
            '.swal2-container',
            'div.swal2-popup'
        ];

        for (const sel of possibleSelectors) {
            const exists = await page.$(`${popupSelector} ${sel}`);
            if (exists) {
                const message = await page.textContent(`${popupSelector} ${sel}`);
                console.log('❗ Popup Message:', message.trim());
                await page.screenshot({ path: 'popup-detected.png' });
                break;
            }
        }
    } catch {
        console.log('⚠ No validation popup appeared.');
    }

    await page.waitForTimeout(2000);
});
