import { test, expect } from '@playwright/test';

import { FullName, Username, url } from './shared';

// let FullName = '';
// let Username = '';
// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// for (let i = 0; i < Math.random()*10; i++) {
//   FullName += characters.charAt(Math.floor(Math.random() * characters.length));
//   Username += characters.charAt(Math.floor(Math.random() * characters.length));
// }

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
test('AddUserWithAdmin', async ({ page }) => {
  await page.getByRole('menuitem', { name: 'Employees' }).click();
  await page.getByRole('button', { name: ' Add Employee' }).click();
  await page.getByLabel('Full Name*').click();
  await page.getByLabel('Full Name*').fill(FullName);
  await page.getByLabel('Full Name*').press('Tab');
  await page.getByLabel('Username*').fill(Username);
  await page.getByLabel('Username*').press('Tab');
  await page.getByRole('combobox').filter({ hasText: 'Employee Type' }).locator('span').click();
  await page.getByRole('option', { name: 'HR' }).click();
  await page.getByRole('combobox').filter({ hasText: 'Pay Grade' }).locator('span').click();
  await page.getByRole('option', { name: 'P5' }).click();
  await page.getByRole('combobox').filter({ hasText: 'supervisor' }).locator('span').click();
  await page.getByRole('option', { name: 'nhughes' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  //This is to make sure the admin sees the user added in the table
  await page.getByRole('gridcell', { name: Username }).click();

  await page.getByRole('button', { name: ' Logout' }).click();
  
  //This is to make sure the new user can login
  await page.goto(url);
  await page.getByLabel('Username*').click();
  await page.getByLabel('Username*').fill(Username);
  await page.getByLabel('Username*').press('Tab');
  await page.getByLabel('Password*').fill('temp');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' Logout' }).click();
});

/**
 * deleting this user
 */
test('DeleteUserWithAdmin', async ({ page }) => {
  await page.getByRole('menuitem', { name: 'Employees' }).click();
  await page.getByRole('row', { name: Username+' '+FullName+' ' }).getByRole('button', { name: ' ui-button' }).click();
  await page.getByRole('button', { name: ' Logout' }).click();
  await page.getByLabel('Username*').click();
  await page.getByLabel('Username*').fill(Username);
  await page.getByLabel('Username*').press('Tab');
  await page.getByLabel('Password*').fill('temp');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('cell', { name: 'Error - invalid credentials' }).click();
});