import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://danchaq-frontend.vercel.app/');
    console.log('running before each tests.........')

    await page.locator("//button[normalize-space()='Sign in']").click()
    await page.locator("//input[contains(@placeholder,'youremail@email.com')]").fill('magif69413@bialode.com')
    await page.locator("//input[@placeholder='******']").fill('12345678Tar!')
    await page.locator("//button[normalize-space()='Log In']").click();
    await expect(page.locator("//button[normalize-space()='Log In']")).toBeVisible();

})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
})

test('Test User profile different sections and fields', async ({ page }) => {

    await page.locator("//span[normalize-space()='Profile']").click()
    await page.locator("//input[@placeholder='Azusa Nakano']").fill('Md. Tajwar Ali')
    await page.locator("//input[contains(@placeholder,'03393-4933')]").fill('01933945963')
    await page.locator("//input[@placeholder='R,M,Das Road']").fill('Mohakhali')
    await page.locator("//input[@placeholder='Azusa Nakano']").fill('Md. Tajwar Ali')
    await page.locator("//input[@placeholder='Azusa Nakano']").fill('Md. Tajwar Ali')


});