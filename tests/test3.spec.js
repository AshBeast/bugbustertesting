import { test, expect } from '@playwright/test';

import {url,
    //HR user made by admin
    FullNameHRA, UsernameHRA, 
    //PM user made by admin
    FullNamePMA, UsernamePMA,
    //normal user made by admin 
    FullNameA, UsernameA,
    //HR user made by HR
    FullNameHRH, UsernameHRH,
    //PM user made by HR 
    FullNamePMH, UsernamePM,
    //normal user made by HR
    FullNameH, UsernameH} from './shared';

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
    await page.goto(url);
});

/**
 * normal user that was created by HR 
 * will change password in this test
 */
test('normalUserChangePass', async ({ page }) => {
  await page.getByLabel('Username*').click();
  await page.getByLabel('Username*').fill(browserAdd+UsernameH);
  await page.getByLabel('Password*').click();
  await page.getByLabel('Password*').fill('temp');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('menuitem', { name: 'Reset Password' }).click();
  await page.getByLabel('New Password*', { exact: true }).click();
  await page.getByLabel('New Password*', { exact: true }).fill('somepass');
  await page.getByLabel('New Password*', { exact: true }).press('Tab');
  await page.getByLabel('Confirm New Password*').fill('somepass');
  await page.getByRole('button', { name: 'Reset Password' }).click();
  await page.getByRole('button', { name: ' Logout' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Username*').click();
  await page.getByLabel('Username*').fill(browserAdd+UsernameH);
  await page.getByLabel('Password*').click();
  await page.getByLabel('Password*').fill('somepass');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' Logout' }).click();
});