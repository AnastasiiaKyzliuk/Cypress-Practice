//Сайт для тестування - https://the-internet.herokuapp.com/login
//Тест 1 - Логін із існуючим логіном, але не правильним паролем
//Перевірити, що в такому випадку відобразиться помилка "Your password is invalid!".


describe("First test", () => {
    it("error message for invalid password", () => {
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.get('input#username').type('tomsmith');
      cy.get('input#password').type('WrongPassword');
      cy.get("button[type='submit']").click();
      cy.get("#flash").should("contain", "Your password is invalid!");
    });
  });
  

//Тест 2 - Логін із неправильним логіном та будь-яким паролем
//Перевірити, що в такому випадку відобразиться помилка "Your username is invalid!"

describe("Login Page", () => {
    it(" error message for invalid username", () => {
      cy.visit("https://the-internet.herokuapp.com/login");
      cy.get("#username").type("WrongUsername");
      cy.get("#password").type("SuperSecretPassword!");
      cy.get("button[type='submit']").click();
      cy.get("#flash").should("contain", "Your username is invalid!");
    });
  });
  