/**
 * The purpose of this test file is 
 * to test project creation.
 * This test is not run by default
 * reason being we can't delete projects.
 * We recommand you run this this only
 * if you know how delete the project 
 * in the database.
 * Running the source mysql file will work but
 * will remove all information in the database
 * that is not in the mysql file.
 */
import { test, expect } from '@playwright/test';

import { url } from './shared'

//making random names and descriptions for 
let projectName;
let projectDescription;
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
for (let i = 0; i < Math.random()*20; i++) {
    projectName += characters.charAt(Math.floor(Math.random() * characters.length));
    projectDescription += characters.charAt(Math.floor(Math.random() * characters.length));
}

/**
 * Creating Random project
 * if a project has the same name of an existing project
 * it will fail
 */
test('CreatingRandomProject', async ({ page }) => {
  await page.goto(url);
  await page.getByLabel('Username*').fill('nhughes');
  await page.getByLabel('Password*').click();
  await page.getByLabel('Password*').fill('temp');
  await page.getByLabel('Password*').press('Enter');
  await page.getByRole('menuitem', { name: 'Projects ' }).hover();
  await page.getByRole('menuitem', { name: 'View' }).click();
  await page.getByRole('menuitem', { name: 'Projects ' }).hover();
  await page.getByRole('menuitem', { name: 'Create' }).click();
  await page.getByLabel('Project Name*').fill(projectName);
  await page.getByLabel('Project Description').click();
  await page.getByLabel('Project Description').fill(projectDescription);
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Name: '+projectName+' Description: ' + projectDescription }).click();
  await page.getByRole('button', { name: ' Logout' }).click();
});