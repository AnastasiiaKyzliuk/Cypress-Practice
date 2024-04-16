//Сайт https://qauto.forstudy.space/
//Login: guest
//Pass: welcome2qauto
//Pre-conditions: Мануально зареєструйте нового юзера на сайті.
//Використовуючи fixtures, збережіть дані(email, password) вашого юзера.
//Тест 1: 
//Нажати Sign In
//Ввести дані юзеру(взяти їх з .json файлу з фікстур)
//Нажати Login
//Будь-яким способом перевірте, що ви на сторінці Garage


import userData from '../../fixtures/credentials.json'

describe('Login with valid credentials', () => {

    it('Test 1 - Verifying log in with valid credentials', () => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })
        cy.contains('Sign In').click();
        cy.get('h4.modal-title').should('be.visible');
        cy.get('input#signinEmail').type(userData.email);
        cy.get('input#signinPassword').type(userData.password);
        cy.get('.modal-footer > .btn-primary').click()
        cy.get('h1').should('have.text','Garage')
    })
});
