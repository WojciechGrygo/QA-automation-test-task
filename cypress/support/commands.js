// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload'
import data from '../fixtures/loginData.json'

Cypress.Commands.add('login', () => {
    cy.visit('/')
    cy.get('#user_email').type(data.email)
    cy.get('#user_password').type(data.password)
    cy.get('[type="submit"]').click()
    cy.intercept('**role=STUDENT').as('loggedIn')
    cy.wait('@loggedIn', {timeout: 8000})
})