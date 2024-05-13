Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Angélica Raquel')
    cy.get('#lastName').type('Oliveira')
    cy.get('#email').type('angelkel@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})