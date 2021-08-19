declare global {
    namespace Cypress {  
      interface Chainable {
        login: (email:string, password:string) => void
      }
    }
  }

  export const login = (email:string, password:string) => {
    cy.request('POST', `${Cypress.env("API_URL")}/api/users/login`, 
      {
        "email": email, 
        "password": password    
      }
      )
    .its('body').then(body => {
        const token = body.data
        cy.visit('/', {
            onBeforeLoad(win) {
                win.localStorage.setItem('userInfo', JSON.stringify(token));
            }
        });
    })
    
}
  
  Cypress.Commands.add('login', login)// ***********************************************
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
