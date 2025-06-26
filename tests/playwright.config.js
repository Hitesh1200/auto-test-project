const { devices } = require('@playwright/test');

module.exports = {
    timeout: 30000,
    workers: 1,

    use: {
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },

    projects: [
        {
            name: 'Chromium',
            use: {
                browserName: 'chromium',
                headless: false,
                screenshot: 'only-on-failure',
                video: 'retain-on-failure',
            },
        },
        {
            name: 'Firefox',
            use: {
                browserName: 'firefox',
                headless: false,
                screenshot: 'only-on-failure',
                video: 'retain-on-failure',
            },
        },
        {
            name: 'WebKit',
            use: {
                browserName: 'webkit',
                headless: false,
                screenshot: 'only-on-failure',
                video: 'retain-on-failure',
            },
        },
    ],
};
