import { test, expect } from '@playwright/test';

const URL = 'https://playwright.dev/';

test.beforeEach(async ({ page }) => {
    await page.goto(URL);
});

test.afterEach(async ({ page }) => {
    await page.close();
});

test.describe.only('batch of tests 1', () => {
    test('Heading says "No flaky tests"', async ({ page }) => {
        await expect(page.locator('h3').nth(3)).toHaveText(/Resilient • No flaky tests/);
    });

    test('Checks "Playwright Inspector" page', async ({ page }) => {
        await page.getByText('Playwright inspector.', { exact: true }).click();
        await expect(page).toHaveURL('https://playwright.dev/docs/debug#playwright-inspector')

        const inspectorDescription = `The Playwright Inspector is a GUI tool to help you debug your Playwright tests. It allows you to step through your tests, live edit locators, pick locators and see actionability logs.`;
        await expect(page.getByText(inspectorDescription)).toBeVisible();
    })
});

test.describe.skip('batch of tests 2', () => {
    test('Test case 1"', async ({ page }) => {
        await expect(page.locator('h3').nth(3)).toHaveText(/Resilient • No flaky tests/);
    });

    test('Test case 2', async ({ page }) => {
        await page.getByText('Playwright inspector.', { exact: true }).click();
        await expect(page).toHaveURL('https://playwright.dev/docs/debug#playwright-inspector')

        const inspectorDescription = `The Playwright Inspector is a GUI tool to help you debug your Playwright tests. It allows you to step through your tests, live edit locators, pick locators and see actionability logs.`;
        await expect(page.getByText(inspectorDescription)).toBeVisible();
    })
});