import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://danchaq-frontend.vercel.app/');
    console.log('running before each tests.........')

})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
})

test('Test login with invalid credentials', async ({ page }) => {

    await page.locator("//button[normalize-space()='Sign in']").click()
    await page.locator("//input[contains(@placeholder,'youremail@email.com')]").fill('Demo@gmail.com')
    await page.locator("//input[@placeholder='******']").fill('Demo@gmail.com')
    await page.locator("//button[normalize-space()='Log In']").click();
    await expect(page.locator("//button[normalize-space()='Log In']")).toBeVisible();
});

test('Test login with invalid Mail and Valid password', async ({ page }) => {

    await page.locator("//button[normalize-space()='Sign in']").click()
    await page.locator("//input[contains(@placeholder,'youremail@email.com')]").fill('Demo@gmail.com')
    await page.locator("//input[@placeholder='******']").fill('12345678Tar!')
    await page.locator("//button[normalize-space()='Log In']").click();
    await expect(page.locator("//button[normalize-space()='Log In']")).toBeVisible();
});

test('Test login with Valid Mail and invalid password', async ({ page }) => {

    await page.locator("//button[normalize-space()='Sign in']").click()
    await page.locator("//input[contains(@placeholder,'youremail@email.com')]").fill('fatiya9402@cexch.com')
    await page.locator("//input[@placeholder='******']").fill('222')
    await page.locator("//button[normalize-space()='Log In']").click();
    await expect(page.locator("//button[normalize-space()='Log In']")).toBeVisible();
});

test('Test login with fields being empty', async ({ page }) => {

    await page.locator("//button[normalize-space()='Sign in']").click()
    await page.locator("//input[contains(@placeholder,'youremail@email.com')]").fill('')
    await page.locator("//input[@placeholder='******']").fill('')
    await page.locator("//button[normalize-space()='Log In']").click();
    // await expect(page.locator("//p[normalize-space()='Email is required']")).toBeVisible();
    await expect(page.getByText('Email is required')).toBeVisible();
    await expect(page.getByText('Password is required')).toBeVisible();
});

test('Test login with Valid Credentials', async ({ page }) => {

    await page.locator("//button[normalize-space()='Sign in']").click()
    await page.locator("//input[contains(@placeholder,'youremail@email.com')]").fill('fatiya9402@cexch.com')
    await page.locator("//input[@placeholder='******']").fill('12345678Tar!')
    await page.locator("//button[normalize-space()='Log In']").click();
    await expect(page.locator("//button[normalize-space()='Log In']")).toBeVisible();
});

//span[normalize-space()='Profile']
