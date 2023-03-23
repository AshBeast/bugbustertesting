import { test, expect } from '@playwright/test';

import { FullNameHRA, UsernameHRA, url } from './shared';

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
 * Admin adde a new user with randomly generated username and fullname
 */
test('AddHRUserWithAdmin', async ({ page, browserName }) => {

  await page.getByRole('menuitem', { name: 'Employees' }).click();

  //making HR
  await page.getByRole('button', { name: ' Add Employee' }).click();
  await page.getByLabel('Full Name*').click();
  await page.getByLabel('Full Name*').fill(browserAdd+FullNameHRA);
  await page.getByLabel('Full Name*').press('Tab');
  await page.getByLabel('Username*').fill(browserAdd+UsernameHRA);
  await page.getByLabel('Username*').press('Tab');
  await page.getByRole('combobox').filter({ hasText: 'Employee Type' }).locator('span').click();
  await page.getByRole('option', { name: 'HR' }).click();
  await page.getByRole('combobox').filter({ hasText: 'Pay Grade' }).locator('span').click();
  await page.getByRole('option', { name: 'P5' }).click();
  await page.getByRole('combobox').filter({ hasText: 'supervisor' }).locator('span').click();
  await page.getByRole('option', { name: 'nhughes' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  //This is to make sure the admin sees the user added in the table
  await page.getByRole('gridcell', { name: browserAdd+UsernameHRA }).first().click();

  await page.getByRole('button', { name: ' Logout' }).click();
  
  //This is to make sure the new user can login
  await page.goto(url);
  await page.getByLabel('Username*').click();
  await page.getByLabel('Username*').fill(browserAdd+UsernameHRA);
  await page.getByLabel('Username*').press('Tab');
  await page.getByLabel('Password*').fill('temp');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' Logout' }).click();
});

