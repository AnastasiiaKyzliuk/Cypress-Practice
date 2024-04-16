//Сторінка - https://the-internet.herokuapp.com/dropdown
//Тест 1:
//Перевірити, що по дефолту обране значення "Please select an option"
//Тест 2:
//Обрати значення "Option 2"
//Перевірити, що обране значення "Option 2"


describe('Dropdown test', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/dropdown') } )

    it('Test 1 - Verify the "Please select an option" is default', () => {
        cy.get('#dropdown > option:selected').should('have.text', 'Please select an option')
    })

    it('Test 2 - Verify the option 2 have text "Option 2"', () => {
        cy.get('#dropdown > option[value="2"]').should('have.text', 'Option 2')
    })
})