import {NewArticlePage} from '../support/pageObjects/newArticle.po';
import {HomePage} from '../support/pageObjects/homePage.po';

describe('Test task', () => {
    it('11 articles could be created', () => {
        cy.login(Cypress.env("EMAIL"), Cypress.env("PASSWORD"));
        const homePage = new HomePage();
        
        for(let i=0; i<11; i++) {
            cy.fixture('articleContent').then(articleContent => {
                homePage.navBar.createNewArticle();
                const newArticlePage = new NewArticlePage(articleContent, i);
                newArticlePage.createNewArticle(articleContent, i);
                newArticlePage.checkArticleContent(articleContent, i)
            })
        }
    });
});