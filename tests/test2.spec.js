import { test, expect } from '@playwright/test';

import { url } from './shared';

test.beforeEach(async ({ page }) => {
    //login as admin happens everytime
    await page.goto(url);
    await page.getByLabel('Username*').click();
    await page.getByLabel('Username*').fill('blink');
    await page.getByLabel('Username*').press('Tab');
    await page.getByLabel('Password*').fill('temp');
    await page.getByLabel('Password*').press('Enter');
  });

/**
 * deleting this user as admin
 */
test('DeleteUserWithAdmin', async ({ page }) => {
  
    await page.getByRole('menuitem', { name: 'Employees' }).click();
    if (await page.getByRole('row', { name: 'testAdmin' }).count() > 0){
        await page.getByRole('row', { name: 'testAdmin' }).first().getByRole('button', { name: ' ui-button' }).click();
    }
    await page.getByRole('button', { name: ' Logout' }).click();
  });