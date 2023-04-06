import { expect } from '@playwright/test';

/**
 * Make sure this url navigates to PMS.
 */
export let url = 'http://localhost:8080/pms/';

// export let url = 'https://pms-itr3-v2-des.apps.okd4.infoteach.ca/';

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
export let UsernamePMH = 'testHRCrPM';

//'H' means normal user created by HR
export let FullNameH = 'testHRCr';
export let UsernameH = 'testHRCr';
