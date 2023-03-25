/**
 * The purpose of this test file is to delete anything made during the test.
 * This includes: user's created by admin or HR
 */
import { test, expect } from '@playwright/test';

import { url,
        UsernameHRA} from './shared';

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
    await page.getByLabel('Username*').fill(browserAdd+UsernameHRA);
    await page.getByLabel('Username*').press('Tab');
    await page.getByLabel('Password*').fill('temp');
    await page.getByLabel('Password*').press('Enter');
  });

/**
 * deleting this user as admin
 */
test('DeleteUserWithAdmin', async ({ page, browserName }) => {

    await page.getByRole('menuitem', { name: 'Employees' }).click();

    //added this for firefox sometimes the user's didn't show
    //this is not related for regular use of this site. playwright sometimes runs too fast for some websites.
    while (!await page.getByRole('row', { name: browserAdd+'test' }).count() > 0){
      await page.getByRole('menuitem', { name: 'Employees' }).click();
    }

    //deleting chrome made test's
    while (await page.getByRole('row', { name: browserAdd+'test' }).count() > 0){
      await page.getByRole('row', { name: browserAdd+'test' }).first().getByRole('button', { name: ' ui-button' }).click();
      //give it a chance to work by waiting one second
      await page.waitForTimeout(2000);
    }
    await page.getByRole('button', { name: ' Logout' }).click();
  });