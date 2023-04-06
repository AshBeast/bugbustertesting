# Playwright Setup Guide for PMS Created by Ashkan Zahedanaraki with The BugBusters team - README

## Playwright is a Node.js library that allows you to automate browser actions such as launching browsers, navigating web pages, and interacting with the content. This README will guide you through the steps required to set up and use Playwright.

- We made these playwirght tests to have quick way to test our use-cases in our PMS app
- Playwright allowed us to test, build and maintain our web applications.
- The use-cases that are runned here will support Chrome, FireFox, and Webkit

## 📚 Table of Contents
- [Prerequisites](#Prerequisites)
- [Installation](#installation)
- [Before running](#beforerunning)
- [How to run](howtorun)
- [How it should look](howitshouldlook)
- [Credits](#credits)

## 📋 Prerequisites
Before installing Playwright, make sure you have the following software installed on your system:

Node.js (version 12 or higher)
npm (version 6 or higher, usually bundled with Node.js)

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


# Purpose of this test

The purpose of this is to Playwright test our critical use-cases in PMS.

# Notes:

We understand the url of the website can change.
please go to the shared.js and the change the variable called url
to the correct url if needed.

We used VScode to make and run these test. other environments should work but
changes to the gitignore might required depending on environment.

npm is required for this test. make sure you have it.

The use-case making projects is not run normaly because
we can't delete project and we don't want fill our database with
garbage.

use this command to run that test project creation when set up is complete:
`npx playwright test tests/projectCreationTest.spec.js`

The use-case modifing user info could not be the test
duo some limitation's of playwright.
playwright needed the row id of the edit boxes to make changes.
this was simply not possible to know.

# How to run the testing for PMS project in your local machine

### Clone the project to your folder and cd into the new directory

```
your-folder $ git clone https://github.com/AshBeast/bugbustertesting.git
your-folder $ cd test
```

Set up is complete.

# Running the test

```
npm test
```

This command runs test files test1, test2, test3, test4

### What to do when a test that is not test 4 fails.

# 1. you want to remove the test users

Run test 4 by running:
`npx playwright test tests/test4.spec.js`
Test 4 removes every test user with each browser it was created with.

# 2. you want to know what went wrong

When a test in a test file fails the next testfiles will not run
and playwright takes starts a localhost and
takes you to your default browser where it will open the localhost.
This will show you what test failed, in what browser it failed in,
and what line in the test it was that was no successful.

# 3. how to debug a testfile

open package.json you will see 4 tests

```
    "test1": "npx playwright test tests/test1.spec.js",
    "test2": "npx playwright test tests/test2.spec.js",
    "test3": "npx playwright test tests/test3.spec.js",
    "test4": "npx playwright test tests/test4.spec.js --workers=1",
```

add --debug to any test you want to step through youself.

example for debuging test4:

`"test4": "npx playwright test tests/test4.spec.js --workers=1 --debug"`
