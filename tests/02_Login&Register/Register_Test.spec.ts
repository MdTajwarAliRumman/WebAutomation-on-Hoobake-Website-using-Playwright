import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://danchaq-frontend.vercel.app/');
    console.log('running before each tests.........')

})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
})

test('Test Register with invalid credentials', async ({ page }) => {

    await page.locator("//button[normalize-space()='Get Started']").click()
    await page.locator("//a[normalize-space()='As a baker']").click()
    await page.getByPlaceholder('youremail@email.com').fill("kewed77188@bialode.com");
    await page.locator("//input[@name='password']").fill('2345678')
    await page.locator("//input[@name='confirm_password']").fill('&&222')
    await page.getByText('Sign Up').click();
    await expect(page.getByText('Sign Up')).toBeVisible();
});

test('Test Register with invalid Mail & valid passwords', async ({ page }) => {

    await page.locator("//button[normalize-space()='Get Started']").click()
    await page.locator("//a[normalize-space()='As a baker']").click()
    await page.getByPlaceholder('youremail@email.com').fill("kewed77188alode.com");
    await page.locator("//input[@name='password']").fill('12345678Tar!')
    await page.locator("//input[@name='confirm_password']").fill('12345678Tar!')
    await page.getByText('Sign Up').click();
    await expect(page.getByText('Sign Up')).toBeVisible();
});

test('Test Register with valid Mail & invalid passwords', async ({ page }) => {

    await page.locator("//button[normalize-space()='Get Started']").click()
    await page.locator("//a[normalize-space()='As a baker']").click()
    await page.getByPlaceholder('youremail@email.com').fill("kewed77188@bialode.com");
    await page.locator("//input[@name='password']").fill('123456')
    await page.locator("//input[@name='confirm_password']").fill('1234567')
    await page.getByText('Sign Up').click();
    await expect(page.getByText('Sign Up')).toBeVisible();
});

test('Test Register By keeping all the fields Empty', async ({ page }) => {

    await page.locator("//button[normalize-space()='Get Started']").click()
    await page.locator("//a[normalize-space()='As a baker']").click()
    await page.getByPlaceholder('youremail@email.com').fill("");
    await page.locator("//input[@name='password']").fill('')
    await page.locator("//input[@name='confirm_password']").fill('')
    await page.getByText('Sign Up').click();
    await expect(page.getByText('Email is required')).toBeVisible();
    await expect(page.getByText('Password is required', { exact: true })).toBeVisible();
    await expect(page.getByText('Confirm Password is required', { exact: true })).toBeVisible();
    await expect(page.getByText('Accepted terms is required', { exact: true })).toBeVisible();

});

test('Test Register with valid Credentials but not accepting the terms & conditions', async ({ page }) => {

    await page.locator("//button[normalize-space()='Get Started']").click()
    await page.locator("//a[normalize-space()='As a baker']").click()
    await page.getByPlaceholder('youremail@email.com').fill("faseha5956@bialode.com");
    await page.locator("//input[@name='password']").fill('12345678Tar!')
    await page.locator("//input[@name='confirm_password']").fill('12345678Tar!')
    await page.getByText('Sign Up').click();
    await expect(page.getByText('Accepted terms is required', { exact: true })).toBeVisible();
    await expect(page.getByText('Sign Up')).toBeVisible();
});

test('Test Register with valid Credentials and Login', async ({ page }) => {

    await page.locator("//button[normalize-space()='Get Started']").click()
    await page.locator("//a[normalize-space()='As a baker']").click()
    await page.getByPlaceholder('youremail@email.com').fill("feha5956@bialode.com");
    await page.locator("//input[@name='password']").fill('12345678Tar!')
    await page.locator("//input[@name='confirm_password']").fill('12345678Tar!')
    await page.locator('[name="accepted_terms"]').click();
    await page.getByText('Sign Up').click();
    await expect(page.locator("//button[normalize-space()='Log In']")).toBeVisible();

    await page.locator("//input[contains(@placeholder,'youremail@email.com')]").fill('faseha5956@bialode.com')
    await page.locator("//input[@placeholder='******']").fill('12345678Tar!')
    await page.locator("//button[normalize-space()='Log In']").click();
    await expect(page.locator("//span[normalize-space()='Profile']")).toBeVisible();

});