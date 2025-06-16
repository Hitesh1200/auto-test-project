// playwright.config.js
// playwright.config.js
const { devices } = require('@playwright/test');

module.exports = {
    timeout: 30000,
    workers: 1, // ✅ Only one test runs at a time
    use: {
        browserName: 'webkit', // Safari
        ...devices['iPhone 15 Pro'], 
        headless: false,
    },
};

//     use: {
//         headless: false, // Runs in visible browser mode
//         screenshot: 'only-on-failure',
//         video: 'retain-on-failure',
//     },
//     projects: [
//         {
//             name: 'Chromium',
//             use: { browserName: 'chromium' },
//         },
//         {
//             name: 'Firefox',
//             use: { browserName: 'firefox' },
//         },
//         {
//             name: 'WebKit',
//             use: { browserName: 'webkit' },
//         },
//     ],
// });
