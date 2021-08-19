import {HomePage} from '../support/pageObjects/homePage.po';

describe('Test task', () => {
    it('11 articles could be created', () => {
        cy.login(Cypress.env("EMAIL"), Cypress.env("PASSWORD"));
        const homePage = new HomePage();
    });
});