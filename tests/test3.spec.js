/**
 * Use cases changing password 
 * from 'temp' to so 'somepass'
 * 
 * Use cases changing userinfo as HR 
 * from 'temp' to so 'somepass'
 */
import { test } from '@playwright/test';

import {url,
    //HR user made by Admin
    UsernameHRA,
    //PM user made by Admin
    UsernamePMA,
    //normal user made by Admin
    UsernameA,
    //HR user made by HR
    UsernameHRH,
    //PM user made by HR 
    UsernamePMH,
    //normal user made by HR
    UsernameH} from './shared';

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
 * This is to check if the test disable users from test2 worked.
 */
test('check disabled admin created HR user', async ({ page }) => {
  await page.getByLabel('Username*').click();
  await page.getByLabel('Username*').fill(browserAdd+UsernameHRA);
  await page.getByLabel('Password*').click();
  await page.getByLabel('Password*').fill('temp');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('cell', { name: 'Error - invalid credentials' }).click()
});

/**
 * This is to check if the test disable users from test2 worked.
 */
test('check disabled admin created PM user', async ({ page }) => {
  await page.getByLabel('Username*').click();
  await page.getByLabel('Username*').fill(browserAdd+UsernamePMA);
  await page.getByLabel('Password*').click();
  await page.getByLabel('Password*').fill('temp');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('cell', { name: 'Error - invalid credentials' }).click()
});

/**
 * This is to check if the test disable users from test2 worked.
 */
test('check disabled admin created employee user', async ({ page }) => {
  await page.getByLabel('Username*').click();
  await page.getByLabel('Username*').fill(browserAdd+UsernameA);
  await page.getByLabel('Password*').click();
  await page.getByLabel('Password*').fill('temp');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('cell', { name: 'Error - invalid credentials' }).click()
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

  //Time is needed in a fast test
  await page.waitForTimeout(1000);
  await page.getByLabel('Username*').click();
  await page.getByLabel('Username*').fill(browserAdd+UsernameH);
  await page.getByLabel('Password*').click();
  await page.getByLabel('Password*').fill('somepass');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' Logout' }).click();
});

/**
 * PM user that was created by HR 
 * will change password in this test
 */
test('PMUserChangePass', async ({ page }) => {
  await page.getByLabel('Username*').click();
  await page.getByLabel('Username*').fill(browserAdd+UsernamePMH);
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

  //Time is needed in a fast test
  await page.waitForTimeout(1000);
  await page.getByLabel('Username*').click();
  await page.getByLabel('Username*').fill(browserAdd+UsernamePMH);
  await page.getByLabel('Password*').click();
  await page.getByLabel('Password*').fill('somepass');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' Logout' }).click();
});

/**
 * HR user that was created by HR 
 * will change password in this test
 */
test('HRUserChangePass', async ({ page }) => {
  await page.getByLabel('Username*').click();
  await page.getByLabel('Username*').fill(browserAdd+UsernameHRH);
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

  //Time is needed in a fast test
  await page.waitForTimeout(1000);
  await page.getByLabel('Username*').click();
  await page.getByLabel('Username*').fill(browserAdd+UsernameHRH);
  await page.getByLabel('Password*').click();
  await page.getByLabel('Password*').fill('somepass');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' Logout' }).click();
});
