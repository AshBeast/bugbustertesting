/**
 * Use cases changing password 
 * from 'temp' to so 'somepass'
 * 
 * Use cases changing userinfo as HR 
 * from 'temp' to so 'somepass'
 */
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

  //Time is needed in a fast test
  await page.waitForTimeout(1000);
  await page.getByLabel('Username*').click();
  await page.getByLabel('Username*').fill(browserAdd+UsernameH);
  await page.getByLabel('Password*').click();
  await page.getByLabel('Password*').fill('somepass');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' Logout' }).click();
});

// /**
//  * testing change all user's info from employee
//  * to PM. check authorization has changed based on the type
//  * does not change fullname
//  */
// test('Modify info', async ({ page }) => {
//   //login as HR
//   await page.getByLabel('Username*').click();
//   await page.getByLabel('Username*').fill(browserAdd+UsernameHRH);
//   await page.getByLabel('Password*').click();
//   await page.getByLabel('Password*').fill('temp');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('menuitem', { name: 'Employees' }).click();

//   //
//   await page.getByRole('row', { name: browserAdd+UsernameH }).first().getByRole('link', { name: '' }).click();

//   //change employee type from employee to PM
//   getByRole('combobox').filter({ hasText: 'Employee TypeHRPMEmployeeHR' }).locator('div').nth(2).click();
//   await page.getByRole('option', { name: 'PM' }).click();

//   //change pay grade from P5 to P3
//   await page.getByRole('combobox').filter({ hasText: 'Pay GradeJSSSDSP1P2P3P4P5P6P2' }).locator('span').click();
//   await page.getByRole('option', { name: 'P3' }).click();

//   //change supervisor to blink
//   await page.locator('[id="j_idt39\\:employees\\:6\\:supervisor"] span').click();
//   await page.getByRole('option', { name: 'blink' }).click();

//   //complete changes and logout
//   await page.getByRole('link', { name: '' }).click();
//   await page.getByRole('button', { name: ' Logout' }).click();

//   //checking authorization
//   await page.getByLabel('Username*').click();
//   await page.getByLabel('Username*').fill('emp2');
//   await page.getByLabel('Password*').click();
//   await page.getByLabel('Password*').fill('temp');
//   await page.getByLabel('Password*').press('Enter');
//   await page.getByRole('menuitem', { name: 'Projects ' }).click();
//   await page.getByRole('button', { name: ' Logout' }).click();
// });