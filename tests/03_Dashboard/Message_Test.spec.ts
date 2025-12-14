import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {

    await page.goto('https://danchaq-frontend.vercel.app/');
    console.log('running before each tests.........')

    await page.locator("//button[normalize-space()='Sign in']").click()
    await page.locator("//input[contains(@placeholder,'youremail@email.com')]").fill('yihatid361@discounp.com')
    await page.locator("//input[@placeholder='******']").fill('12345678Tar!')
    await page.locator("//button[normalize-space()='Log In']").click();
    // await expect(page.locator("//button[normalize-space()='Log In']")).toBeVisible();

})


test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
    await page.screenshot({ path: './Screenshots/MessagePageScreenshot.png', fullPage: true });

})

test('Testing The AI chat if it works properly or not', async ({ page }) => {

    await page.locator("//span[normalize-space()='AI Bot']").click()
    await expect(page.getByText("👋 Hi there! I'm Houdini, your AI assistant from Hoobake. Let's find your perfect local baker! 🍰")).toBeVisible

    await page.locator("//input[@placeholder='Chat with AI']").fill('Hello There!')
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
    // await page.waitForTimeout(5000);


    // await page.locator("//h2[normalize-space()='Summary Report:']").check();


    // await expect(page.locator("//h2[normalize-space()='Summary Report:']")).toBeVisible();
    //h2[normalize-space()='Summary Report:']
});

// test('further messaging', async ({ page }) => {

//     await page.locator("//span[normalize-space()='AI Bot']").click()
//     await page.locator("//div[contains(@class,'flex min-h-screen bg-//div[4]//button[1]").click()
// });
