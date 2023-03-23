import { expect } from '@playwright/test';

export let url = 'http://localhost:8080/pms/';

//HRA means HR user created by A or admin
export let FullNameHRA = 'testAdminCrHR';
export let UsernameHRA = 'testAdminCrHR';

//PMA means PM user created by A or admin
export let FullNamePMA = 'testAdminCrPM';
export let UsernamePMA = 'testAdminCrPM';

//'A' means normal user created by A or admin
export let FullNameA = 'testAdminCr';
export let UsernameA = 'testAdminCr';

//HRH means HR user created by HR
export let FullNameHRH = 'testHRCrHR';
export let UsernameHRH = 'testHRCrHR';

//PMH means PM user created by HR
export let FullNamePMH = 'testHRCrPM';
export let UsernamePM = 'testHRCrPM';

//'H' means normal user created by HR
export let FullNameH = 'testHRCr';
export let UsernameH = 'testHRCr';


// /**
//  * add random amount of random characters
//  */
// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// for (let i = 0; i < Math.random()*10; i++) {
//   FullNameHRA += characters.charAt(Math.floor(Math.random() * characters.length));
//   UsernameHRA += characters.charAt(Math.floor(Math.random() * characters.length));
// }