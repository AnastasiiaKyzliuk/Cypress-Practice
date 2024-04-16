//Сторінка - https://the-internet.herokuapp.com/dropdown
//Тест 1:
//Перевірити, що по дефолту обране значення "Please select an option"
//Тест 2:
//Обрати значення "Option 2"
//Перевірити, що обране значення "Option 2"


describe('Checkbox tests', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
    })

    it('Test 1 - Verify the checkbox 2 checked', () => {
        cy.get('form#checkboxes > input:nth-of-type(2)').should('be.checked')
        cy.get('form#checkboxes > input:nth-of-type(2)').uncheck()
        cy.get('input[type="checkbox"]').should('not.be.checked')
    })

    it('Test 2 - Verify both checkbox checked', () => {
        cy.get('form#checkboxes > input:nth-of-type(1)').check()
        cy.get('input[type="checkbox"]').should('be.checked')
    })

})