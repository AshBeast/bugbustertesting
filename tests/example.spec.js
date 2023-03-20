import { test, expect } from '@playwright/test';

function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}

let FullName = '';
let Username = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
for (let i = 0; i < Math.random()*10; i++) {
  FullName += characters.charAt(Math.floor(Math.random() * characters.length));
  Username += characters.charAt(Math.floor(Math.random() * characters.length));
}

var canTestDelete = false;

let url = 'http://localhost:8080/pms/';

test.beforeEach(async ({ page }) => {
  await page.goto(url);
  await page.getByLabel('Username*').click();
  await page.getByLabel('Username*').fill('blink');
  await page.getByLabel('Username*').press('Tab');
  await page.getByLabel('Password*').fill('temp');
  await page.getByLabel('Password*').press('Enter');
});

test('AddUserWithAdmin', async ({ page }) => {
  await page.getByRole('menuitem', { name: 'Employees' }).click();
  await page.getByRole('button', { name: ' Add Employee' }).click();
  await page.getByLabel('Full Name*').click();
  await page.getByLabel('Full Name*').fill(FullName);
  await page.getByLabel('Full Name*').press('Tab');
  await page.getByLabel('Username*').fill(Username);
  await page.getByLabel('Username*').press('Tab');
  await page.locator('[id="j_idt71\\:empType_label"]').click();
  await page.getByRole('option', { name: 'HR' }).click();
  await page.locator('[id="j_idt71\\:payGrade_label"]').click();
  await page.getByRole('option', { name: 'P5' }).click();
  await page.locator('[id="j_idt71\\:supervisor_label"]').click();
  await page.getByRole('option', { name: 'nhughes' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: ' Logout' }).click();
  
  //login and logout to check
  
  await page.goto(url);
  await page.getByLabel('Username*').click();
  await page.getByLabel('Username*').fill(Username);
  await page.getByLabel('Username*').press('Tab');
  await page.getByLabel('Password*').fill('temp');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' Logout' }).click();
});

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