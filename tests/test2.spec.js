import { test, expect } from '@playwright/test';

import { url } from './shared';

//by default usersToDelete is Utest for unknown browser
let usersToDelete = 'Utest';
test.beforeAll(async ({ browserName }) => {
  //checking the browser and deleting correct users
  if (browserName === 'chromium'){
    usersToDelete = 'Ctest';
  } else if (browserName === 'firefox'){
    usersToDelete = 'Ftest';
  } else if (browserName === 'webkit'){
    usersToDelete = 'Wtest';
  }
});

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
test('DeleteUserWithAdmin', async ({ page, browserName }) => {
  
    await page.getByRole('menuitem', { name: 'Employees' }).click();
    //deleting chrome made test's
    while (await page.getByRole('row', { name: usersToDelete }).count() > 0){
        await page.getByRole('row', { name: usersToDelete }).first().getByRole('button', { name: ' ui-button' }).click();
        //give it a chance to work by waiting one second
        await page.waitForTimeout(1000);
    }
    await page.getByRole('button', { name: ' Logout' }).click();
  });