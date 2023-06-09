/**
 * like the last test The purpose of this test file is to make the 3 types of users with HR account
 * but as Human resources(HR) user that was created from the last test.
 * these Project Manager(PM), Human resources(HR).
 * If this test file fails the rest of the test files will not be run.
 */
import { test } from '@playwright/test';

import {url,
      FullNameH, UsernameH,
      FullNamePMH, UsernamePMH, 
      FullNameHRH, UsernameHRH, 
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
  //login as HR happens everytime
  await page.goto(url);
  await page.getByLabel('Username*').click();
  await page.getByLabel('Username*').fill(browserAdd+UsernameHRA);
  await page.getByLabel('Username*').press('Tab');
  await page.getByLabel('Password*').fill('temp');
  await page.getByLabel('Password*').press('Enter');
});

/**
 * HR add a new HR user with randomly generated username and fullname
 */
test('HRAddUserWithHR', async ({ page, browserName }) => {

  await page.getByRole('menuitem', { name: 'Employees' }).click();

  //making HR
  await page.getByRole('button', { name: ' Add Employee' }).click();
  await page.getByLabel('Full Name*').click();
  await page.getByLabel('Full Name*').fill(browserAdd+FullNameHRH);
  await page.getByLabel('Full Name*').press('Tab');
  await page.getByLabel('Username*').fill(browserAdd+UsernameHRH);
  await page.getByLabel('Username*').press('Tab');
  await page.getByRole('combobox').filter({ hasText: 'Employee Type' }).locator('span').click();
  await page.getByRole('option', { name: 'HR' }).click();
  await page.getByRole('combobox').filter({ hasText: 'Pay Grade' }).locator('span').click();
  await page.getByRole('option', { name: 'P5' }).click();
  await page.getByRole('combobox').filter({ hasText: 'supervisor' }).locator('span').click();
  await page.getByRole('option', { name: 'nhughes' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  //This is to make sure the HR sees the user added in the table
  await page.getByRole('gridcell', { name: browserAdd+UsernameHRH }).first().click();

  await page.getByRole('button', { name: ' Logout' }).click();
  
  //This is to make sure the new user can login, needs time before login
  await page.waitForTimeout(2000);
  await page.goto(url);
  await page.getByLabel('Username*').click();
  await page.getByLabel('Username*').fill(browserAdd+UsernameHRH);
  await page.getByLabel('Username*').press('Tab');
  await page.getByLabel('Password*').fill('temp');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' Logout' }).click();
});

/**
 * HR add a new PM user with randomly generated username and fullname
 */
test('PMAddUserWithHR', async ({ page, browserName }) => {

  await page.getByRole('menuitem', { name: 'Employees' }).click();

  //making PM
  await page.getByRole('button', { name: ' Add Employee' }).click();
  await page.getByLabel('Full Name*').click();
  await page.getByLabel('Full Name*').fill(browserAdd+FullNamePMH);
  await page.getByLabel('Full Name*').press('Tab');
  await page.getByLabel('Username*').fill(browserAdd+UsernamePMH);
  await page.getByLabel('Username*').press('Tab');
  await page.getByRole('combobox').filter({ hasText: 'Employee Type' }).locator('span').click();
  await page.getByRole('option', { name: 'PM' }).click();
  await page.getByRole('combobox').filter({ hasText: 'Pay Grade' }).locator('span').click();
  await page.getByRole('option', { name: 'P5' }).click();
  await page.getByRole('combobox').filter({ hasText: 'supervisor' }).locator('span').click();
  await page.getByRole('option', { name: 'nhughes' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  //This is to make sure the HR sees the user added in the table
  await page.getByRole('gridcell', { name: browserAdd+UsernamePMH }).first().click();

  await page.getByRole('button', { name: ' Logout' }).click();
  
  //This is to make sure the new user can login, needs time before login
  await page.waitForTimeout(2000);
  await page.goto(url);
  await page.getByLabel('Username*').click();
  await page.getByLabel('Username*').fill(browserAdd+UsernamePMH);
  await page.getByLabel('Username*').press('Tab');
  await page.getByLabel('Password*').fill('temp');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' Logout' }).click();
});

/**
 * HR add a new normal user with randomly generated username and fullname
 */
test('AddUserWithHR', async ({ page, browserName }) => {

  await page.getByRole('menuitem', { name: 'Employees' }).click();

  //making HR
  await page.getByRole('button', { name: ' Add Employee' }).click();
  await page.getByLabel('Full Name*').click();
  await page.getByLabel('Full Name*').fill(browserAdd+FullNameH);
  await page.getByLabel('Full Name*').press('Tab');
  await page.getByLabel('Username*').fill(browserAdd+UsernameH);
  await page.getByLabel('Username*').press('Tab');
  await page.getByRole('combobox').filter({ hasText: 'Employee Type' }).locator('span').click();
  await page.getByRole('option', { name: 'Employee', exact: true }).click();
  await page.getByRole('combobox').filter({ hasText: 'Pay Grade' }).locator('span').click();
  await page.getByRole('option', { name: 'P5' }).click();
  await page.getByRole('combobox').filter({ hasText: 'supervisor' }).locator('span').click();
  await page.getByRole('option', { name: 'nhughes' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  //This is to make sure the HR sees the user added in the table
  await page.getByRole('gridcell', { name: browserAdd+UsernameH }).first().click();

  await page.getByRole('button', { name: ' Logout' }).click();
  
  //This is to make sure the new user can login, needs time before login
  await page.waitForTimeout(2000);
  await page.goto(url);
  await page.getByLabel('Username*').click();
  await page.getByLabel('Username*').fill(browserAdd+UsernameH);
  await page.getByLabel('Username*').press('Tab');
  await page.getByLabel('Password*').fill('temp');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' Logout' }).click();
});

/**
 * Disable all the user's created by admin for testing
 * This is a long test.
 * This test should stay at the buttom because it deactivates the HR created by admin
 * This could interefer with other tests if they aren't already logged in 
 */
test('Disable Admin Created Users', async ({ page, browserName }) => {

  await page.getByRole('menuitem', { name: 'Employees' }).click();

  //deleting chrome made test's
  
  while (await page.getByRole('row', { name: browserAdd+'testAdmin' }).getByRole('button', { name: ' Deactivate Employee' }).count() > 0){
    await page.getByRole('menuitem', { name: 'Employees' }).click();
    await page.getByRole('row', { name: browserAdd+'testAdmin' }).first().getByRole('button', { name: ' Deactivate Employee' }).click();
    //give it a chance to work by waiting one second
    await page.waitForTimeout(2000);
  }

  //Firefox's count() doesn't return correct number
  //Work around
  if (browserName === 'firefox'){
    await page.getByRole('row', { name: browserAdd+'testAdmin' }).first().getByRole('button', { name: ' Deactivate Employee' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('row', { name: browserAdd+'testAdmin' }).first().getByRole('button', { name: ' Deactivate Employee' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('row', { name: browserAdd+'testAdmin' }).first().getByRole('button', { name: ' Deactivate Employee' }).click();
  }

  await page.getByRole('button', { name: ' Logout' }).click(); 
});