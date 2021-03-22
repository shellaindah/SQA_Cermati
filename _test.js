Feature('Registrasi ');
const faker = require('faker')

Scenario('Register Sukses', ({ I }) => {
    // Menuju Website
    I.amOnPage('/');
    // Mengisi Form
    I.fillField('#email', faker.internet.email());
    I.fillField('#password','Admin!23');
    I.fillField('#confirm-password', 'Admin!23');
    I.fillField('#first-name', faker.name.firstName());
    I.fillField('#last-name', faker.name.lastName());
    I.fillField('#mobile-phone', faker.phone.phoneNumber('081#########'));
    I.fillField('#residence-city','KABUPATEN BOGOR');
    I.pressKey('Enter');
    I.click('Daftar Akun')
    I.see('Cermati')
});
