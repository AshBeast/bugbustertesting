# Playwright Setup Guide for PMS Created by Ashkan Zahedanaraki with The BugBusters team - README

## Playwright is a Node.js library that allows you to automate browser actions such as launching browsers, navigating web pages, and interacting with the content. This README will guide you through the steps required to set up and use Playwright.

- We made these playwirght tests to have quick way to test our use-cases in our PMS web app
- Playwright allowed us to test, build and maintain our web applications.
- The use-cases that are runned here will support Chrome, FireFox, and Webkit

## 📚 Table of Contents
- Prerequisites
- Installation
- Before running
- How to run
- How it should look
- Test fail
- Credits

## 📋 Prerequisites
Before installing Playwright, make sure you have the following software installed on your system:

- Node.js (version 12 or higher)
- npm (version 6 or higher, usually bundled with Node.js)


You can check the installed versions of Node.js and npm by running the following commands in your terminal or command prompt:

```
node -v
npm -v
```

## 🔧 Installation 

To install Playwright, open your terminal or command prompt and run the following command:

```
npm install playwright
```

This command installs Playwright and its browser dependencies (Chromium, Firefox, and WebKit).

## 📝 Before running

use the following commands to download our test and make your working directory inside the new directory:
```
git clone https://github.com/AshBeast/bugbustertesting.git
cd bugbustertesting
```

Make sure playwright has the correct URL by checking the file /tests/shared.js
```
export let url = 'URL';
```
This URL should lead to PMS. it does not matter if it is deployed or locally hosted,
if you can use this URL so can playwirght.

Please take note we are not responsible if these test brake your web app.
use caution when running this.

You need to have your database backed up before running this test.
You need to reset your database everytime you run this test, you can use your backup or the mysql file provided.


## 🏃 How to run

To run all the tests, run this command: 
```
npm test
```
run the mysql file or use your backup to get rid of the "test users" these tests created and other garbage info.



## 👁️‍🗨️ How it should look

## 🚫 Test fail

Tests can fail. You need to indentify if this is a problem with the test or the web app. Here is some Playwright tools that can help you.

Debuging is very useful to finding issues. you can add --debug after the command to run individual tests like the following:

```
npx playwright test tests/test1.spec.js --debug
```

or you can change the file /package.json 's scripts from
```
    "test1": "npx playwright test tests/test1.spec.js",
    "test2": "npx playwright test tests/test2.spec.js",
    "test3": "npx playwright test tests/test3.spec.js",
```
to
```
    "test1": "npx playwright test tests/test1.spec.js --debug",
    "test2": "npx playwright test tests/test2.spec.js --debug",
    "test3": "npx playwright test tests/test3.spec.js --debug",
```

--debug was added to all the test files. you can choose which test files to debug or not debug when you use the command `npm test` by changing this script.

## 💳 Credits

I used documentation from the Playwright website to learn and trouble shoot. This can help you as well for these tests.

https://playwright.dev/docs/intro


