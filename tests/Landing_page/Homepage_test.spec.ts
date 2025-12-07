import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://danchaq-frontend.vercel.app/');
    console.log('running before each tests.........')

})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
})

test('Test the Title, URL & Get-Started Button', async ({ page }) => {
    // await page.goto('https://danchaq-frontend.vercel.app/');
    await expect(page).toHaveTitle("Hoobake")
    await expect(page).toHaveURL('https://danchaq-frontend.vercel.app/')
    await expect(page.locator("//button[normalize-space()='Get Started']")).toHaveText('Get Started');

});

test('Test The Ai chat option', async ({ page }) => {

    await page.locator("//input[@placeholder='Chat with AI']").fill('Hello There!')
    await expect(page.getByText("👋 Hi there! I'm Houdini, your AI assistant from Hoobake. Let's find your perfect local baker! 🍰")).toBeVisible
    await page.locator("//button[@type='submit']").click()

    await page.locator("//input[@placeholder='Chat with AI']").fill('Birthday')
    await page.locator("//button[@type='submit']").click()

    await page.locator("//input[@placeholder='Chat with AI']").fill('Cake')
    await page.locator("//button[@type='submit']").click()

    await page.locator("//input[@placeholder='Chat with AI']").fill('Chocolate')
    await page.locator("//button[@type='submit']").click()

    await page.locator("//input[@placeholder='Chat with AI']").fill('20')
    await page.locator("//button[@type='submit']").click()

    await page.locator("//input[@placeholder='Chat with AI']").fill('Floral')
    await page.locator("//button[@type='submit']").click()

    await page.locator("//input[@placeholder='Chat with AI']").fill('morning')
    await page.locator("//button[@type='submit']").click()

    await page.locator("//input[@placeholder='Chat with AI']").fill('Birthday')
    await page.locator("//button[@type='submit']").click()

    await page.locator("//input[@placeholder='Chat with AI']").fill('Scottsdale, AZ 85260')
    await page.locator("//button[@type='submit']").click()

});

test('Validate the FAQ & Footer Social Icon section', async ({ page }) => {

    await expect(page.getByText("What should I do if I encounter issues with my order?")).toBeVisible
    await page.locator("//h3[contains(text(),'What should I do if I encounter issues with my ord')]").click()

    await page.locator("//a[contains(@href,'https://instagram.com')]").click();

});
