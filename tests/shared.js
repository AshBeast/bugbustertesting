export let url = 'http://localhost:8080/pms/';

export let FullName = 'testAdmin';
export let Username = 'testAdmin';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
for (let i = 0; i < Math.random()*10; i++) {
  FullName += characters.charAt(Math.floor(Math.random() * characters.length));
  Username += characters.charAt(Math.floor(Math.random() * characters.length));
}