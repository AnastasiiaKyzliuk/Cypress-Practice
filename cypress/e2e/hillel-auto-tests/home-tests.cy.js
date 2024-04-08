//Test 1-5
//Перевірити, що всі соціальні лінки містять лінки(аттрибут href) на відповідні сайти. Використовувати .invoke('attr',"href')

describe('Social media icons functionality', () => {
    it('Verify Facebook icon contains Facebook link', () => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        });
        cy.wait(5000);
        cy.get('a.socials_link').eq(0).invoke('attr', 'href').should('contain', 'https://www.facebook.com/Hillel.IT.School');
    });

    it('Verify Telegram icon contains Telegram link', () => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        });
        cy.wait(5000);
        cy.get('a.socials_link').eq(1).invoke('attr', 'href').should('contain', 'https://t.me/ithillel_kyiv');
    });

    it('Verify YouTube icon contains YouTube link', () => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        });
        cy.wait(5000);
        cy.get('a.socials_link').eq(2).invoke('attr', 'href').should('contain', 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1');
    });

    it('Verify Instagram icon contains Instagram link', () => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        });
        cy.wait(5000);
        cy.get('a.socials_link').eq(3).invoke('attr', 'href').should('contain', 'https://www.instagram.com/hillel_itschool/');
    });

    it('Verify LinkedIn icon contains LinkedIn link', () => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        });
        cy.wait(5000);
        cy.get('a.socials_link').eq(4).invoke('attr', 'href').should('contain', 'https://www.linkedin.com/school/ithillel/');
    });
});





//Тест 6
//Перевірити, що після кліку на пноку "Sign In" відкривається форма логіну

describe('Sign In functionality', () => {
    it('Opens the login form after clicking the "Sign In" button', () => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        });
        cy.get('.header_signin').click();
        cy.get('.modal-title').should('contain', 'Log in');
    });
});


//Тест 7
//Перевірити, що після кліку на пноку "Sign Up" відкривається форма реєстрації
describe('Registration functionality', () => {
    it('Opens the registration form after clicking the "Sign Up" button', () => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        });
        
        cy.get('.header_signin').click();
        cy.get('button.btn.btn-link').contains('Registration').click();
        cy.get('h4.modal-title').should('contain', 'Registration');
    });
});



