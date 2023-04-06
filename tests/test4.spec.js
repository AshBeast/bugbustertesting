/**
 * The purpose of this test file is to delete anything made during the test.
 * This includes: user's created by admin or HR
 * 
 * This no longer works, it is removed from the package.json.
 * the use-case delete users was removed from the web app.
 * We made this change because we didn't want to go to jail.
 */
import { test } from '@playwright/test';

import { url } from './shared';

//by default browserAdd is U for unknown
let browserAdd = 'U';
test.beforeAll(async ({ browserName }) => {
  //checking the browser and adding character to see the diffrence
  if (browserName === 'chromium'){
    browserAdd = 'C';
  } else if (browserName === 'firefox'){
    browserAdd = 'F';
  } else if (browserName === 'webkit'){
    browserAdd = 'W';
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
test('DeleteUserWithAdmin', async ({ page }) => {

    await page.getByRole('menuitem', { name: 'Employees' }).click();

    //added this for firefox sometimes the user's didn't show
    //this is not related for regular use of this site. playwright sometimes runs too fast for some websites.
    //test will continue after 5 times of refereshing and the user we are looking for does not show
    let count = 0;
    while ((!await page.getByRole('row', { name: browserAdd+'test' }).count() > 0) && count <= 5){
      await page.getByRole('menuitem', { name: 'Employees' }).click();
      count ++
    }

    //deleting chrome made test's
    while (await page.getByRole('row', { name: browserAdd+'test' }).count() > 0){
      await page.getByRole('menuitem', { name: 'Employees' }).click();
      await page.getByRole('row', { name: browserAdd+'test' }).first().getByRole('button', { name: ' Delete Employee' }).click();
      //give it a chance to work by waiting one second
      await page.waitForTimeout(2000);
    }
    await page.getByRole('button', { name: ' Logout' }).click();
  });