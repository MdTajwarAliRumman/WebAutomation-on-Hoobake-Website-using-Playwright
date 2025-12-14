import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://danchaq-frontend.vercel.app/');
    console.log('running before each tests.........')

    await page.locator("//button[normalize-space()='Sign in']").click()
    await page.locator("//input[contains(@placeholder,'youremail@email.com')]").fill('fiyigi1374@discounp.com')
    await page.locator("//input[@placeholder='******']").fill('12345678Tar!')
    await page.locator("//button[normalize-space()='Log In']").click();
    // await expect(page.locator("//button[normalize-space()='Log In']")).toBeVisible();

})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
    await page.screenshot({ path: './Screenshots/ProfilePageScreenshot.png', fullPage: true });
})

test('Test User profile different sections and fields', async ({ page }) => {

    await page.locator("//span[normalize-space()='Profile']").click()
    await page.getByRole('textbox', { name: 'Azusa Nakano' }).click();
    await page.getByRole('textbox', { name: 'Azusa Nakano' }).fill('Tajwar');
    await page.getByRole('textbox', { name: 'Azusa Nakano' }).press('Tab');
    await page.getByRole('textbox', { name: 'R,M,Das Road' }).click();
    await page.getByRole('textbox', { name: 'R,M,Das Road' }).fill('501 a road');
    await page.getByRole('textbox', { name: 'R,M,Das Road' }).press('Tab');
    await page.getByRole('textbox', { name: '-4933' }).click();
    await page.getByRole('textbox', { name: '-4933' }).fill('0244405504');
    await page.locator('select[name="country"]').selectOption('Bangladesh');
    await page.locator('input[name="city"]').click();
    await page.locator('input[name="city"]').fill('Dhaka');
    await page.locator('input[name="zip_code"]').click();
    await page.locator('input[name="zip_code"]').fill('1234');
    await page.locator('select[name="language"]').selectOption('Bengali');
    await page.getByRole('button', { name: 'Save' }).first().click();

});