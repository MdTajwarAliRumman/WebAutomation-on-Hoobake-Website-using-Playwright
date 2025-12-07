import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://danchaq-frontend.vercel.app/');
    console.log('running before each tests.........')
})

test('Test the Title, URL & Get-Started Button', async ({ page }) => {
    // await page.goto('https://danchaq-frontend.vercel.app/');
    await expect(page).toHaveTitle("Hoobake")
    await expect(page).toHaveURL('https://danchaq-frontend.vercel.app/')
    await expect(page.locator("//button[normalize-space()='Get Started']")).toHaveText('Get Started');
    await page.waitForTimeout(2000); // 2 seconds delay


});

test('Test The Ai chat option', async ({ page }) => {

    await page.locator("//input[@placeholder='Chat with AI']").fill('Hello There!')
    await expect(page.getByText("👋 Hi there! I'm Houdini, your AI assistant from Hoobake. Let's find your perfect local baker! 🍰")).toBeVisible
    await page.locator("//button[@type='submit']").click()
    await page.waitForTimeout(4000); // 2 seconds delay

});
